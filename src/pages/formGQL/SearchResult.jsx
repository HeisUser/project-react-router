import { useQuery } from '@apollo/client';
import { useParams, Link } from 'react-router-dom';
import { GetDiningTable_id_or_sku } from '../../graphql/queries'; // Import the query


function SearchResult() {
  const { searchQuery } = useParams();

  // Fetch dining tables by id or sku
  const { loading, error, data } = useQuery(GetDiningTable_id_or_sku, {
    variables: { id: searchQuery, sku: searchQuery },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const results = data?.diningTables?.data || [];

  return (
    <div>
      <h2>Results for {searchQuery}</h2>

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
                </li>
              );
            })}
          </ul>
          <nav>
            <Link to="/gql">Go back to Search</Link>
          </nav>
        </div>
      ) : (
        <div>
          <p>No results found.</p>
          <nav>
            <Link to="/gql">Go back to Search</Link>
          </nav>
        </div>
      )}
    </div>
  );
}

export default SearchResult;

