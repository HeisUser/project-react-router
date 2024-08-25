import { useParams, useLoaderData } from "react-router-dom";

export default function DestructuringJson_Nested() {
  const { sku } = useParams();  // Get the 'sku' from URL params
  console.log('Table useParams sku: ' + sku);

  // Destructure the nested response data from useLoaderData using nested destructuring
  const { 
    id, 
    attributes: { 
      description: [{ children: [{ text }] }],  // Nested destructuring to get `text`
      images: { data: [{ attributes: { url } }] }  // Nested destructuring to get `url`
    } 
  } = useLoaderData();

  console.log('Tables useLoaderData: ' +
    id +
    ', ' +
    sku +
    ', ' +
    text +
    ', ' +
    url
  );


  return (
    <div>
      <p>id: {id}</p>
      <p>SKU: {sku}</p>
      <p>Description: {text}</p>
      <p>Image URL: {url}</p>
    </div>
  );
}



// Loader function to fetch data
// Retrieve Data with String "sku" from JSON Object by Destructuring
export async function tableLoader({ params }) {
  const { sku } = params;  // Extract SKU from params
  console.log('tableLoader sku: ' + sku);

  const res = await fetch('http://localhost:4000/data_object' + '/');
  const { diningTables: { data: tables } } = await res.json();  // Destructure to get tables array directly
  console.log('tables: ', tables);

  // Find the table with the matching sku using nested destructuring
  const table = tables.find(
    ({ attributes: { sku: tableSku } }) => tableSku === sku  // Nested destructuring to get `attributes.sku`
  );

  console.log('Found table: ', table);

  return table;  // Return the matched table object
}





