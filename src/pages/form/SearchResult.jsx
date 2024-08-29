import { useLoaderData, useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

// Loader function to fetch and filter data based on the search query
export async function loaderSearch({ params }) {

    console.log('loaderSearch sku: ' + params);

    // Fetch data from json-server API (Endpoint)
    const response = await fetch('http://localhost:4000/data_object' + '/');
    const { diningTables } = await response.json(); // Destructure diningTables from the response

    // Filter the data based on the searchQuery (either by 'sku' or 'id')
    const filteredData = diningTables.data.filter(
      ({ id, attributes: { sku } }) => 
          id === params.searchQuery 
              || sku.toLowerCase().includes(params.searchQuery.toLowerCase())
    );

    return filteredData;
}


function SearchResult() {
  // Retrieve the search query from the URL parameters using useParams
    // searchQuery is param and same name on the route path as ":searchQuery" (See DataRoutes.jsx file)
  const { searchQuery } = useParams();
  
  // useLoaderData fetches the filtered data that was returned by the loader function
  const loaderData = useLoaderData();
  
  // useState to manage the results state, initially set to the loader data
  const [results, setResults] = useState(loaderData);

  // useEffect to update the results state whenever the loaderData changes
  useEffect(() => {
    setResults(loaderData);
  }, [loaderData]);


  return (
    <div>
      {/* Display the search query in the heading */}
      <h2>Results for {searchQuery}</h2>

      {/* Conditionally render the results: if there are results, display them in a list, otherwise show a message */}
      {results.length > 0 ? (
        <ul>
          {results.map(({ id, attributes }) => {
            const { sku, description, images } = attributes;
            const [{ text }] = description[0].children; // Extracting description text
            const [{ attributes: { url } }] = images.data; // Extracting image URL
            
            return (
              <li key={id}>
                <p>SKU: {sku}</p>
                <p>Description: {text}</p>
                <p>Image URL: {url}</p>
                <img 
                  src={'http://localhost:4000' + url} // Serve images from json-server
                  alt={sku} 
                  width="200"
                />
                <nav>
                    <Link to="/form">Go back to Search</Link>
                </nav>
              </li>
            );
          })}
        </ul>
      ) : (
        <div>
          {/* Display this message if no results are found */}
          <p>No results found.</p> 

          {/* Link to go back to the SearchForm component */}
          <nav>
            <Link to="/form">Go back to Search</Link>
          </nav>
        </div>
      )}
    </div>
  );
}

export default SearchResult;
