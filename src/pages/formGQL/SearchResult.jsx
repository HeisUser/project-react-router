import { useQuery } from '@apollo/client';
import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { GetDiningTable_id_or_sku } from '../../graphql/queries'; // GraphQL Query
import DeletionFeature from '../../components/DeletionFeature'; // Deletion Component


function SearchResult() {
  const { searchQuery } = useParams();
  const [status, setStatus] = useState(null); // Lifted status state - from DeletionFeature.jsx

  // Fetch dining tables by id or sku
    // Destructure 'refetch' from the useQuery hook
  const { loading, error, data, refetch } = useQuery(GetDiningTable_id_or_sku, {
    variables: { id: searchQuery, sku: searchQuery },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const results = data?.diningTables?.data || [];

  return (
    <div>
      <h2>Results for {searchQuery}</h2>

      {/* Status messages of Deletion Feature */}
      {status === 'loading' && <p>Deleting...</p>}
      {status === 'success' && (
        <div>
          <p>Deletion successful!</p>
          <nav>
            <Link to="/">Go back to Search</Link>
          </nav>
        </div>
      )}

      {/* Retrieve Search Result */}
      {results.length > 0 ? (
        <div>
          <ul>
            {results.map(({ id, attributes }) => {
              const { sku, description, images } = attributes;
              const [{ text }] = description[0].children;
              const [{ attributes: { url } }] = images.data;

              return (
                <li key={id}>
                  <p>SKU: {sku}</p>
                  <p>Description: {text}</p>
                  <img src={'http://localhost:1337' + url} alt={sku} width="200" />

                  {/* Deletion Feature Component */}
                  <DeletionFeature
                    id={id}
                    onDeleted={() => refetch()} // Refetch data after deletion
                    setStatus={setStatus} // Pass setStatus to DeletionFeature
                  />
                </li>
              );
            })}
          </ul>

          <nav>
            <Link to="/gql">Go back to Search</Link>
          </nav>
        </div>
      ) : (
        status !== 'success' && (
          <div>
            <p>No results found.</p>
            <nav>
              <Link to="/">Go back to Search</Link>
            </nav>
          </div>
        )
      )}
    </div>
  );
}

export default SearchResult;

