import { Form } from 'react-router-dom';
import { useState } from 'react';
import FormHandler from './FormHandler';

function SearchForm() {
  // State to hold the search query
  const [query, setQuery] = useState('');

  // Dynamic segment placeholder (e.g., ':searchQuery')
  const dynamicSegs = ':searchQuery';

  // Define the route path template
  const routeTemplate = 'result/:searchQuery';


  // Use the handleSubmit function from FormHandler, passing query, route, and dynamicSegs as parameters
  const { handleSubmit } = FormHandler({ query, dynamicSegs, route: routeTemplate, });

  return (
    <div>
      <h1>Search Dining Tables</h1>
      {/* Form component from react-router-dom to handle the search input */}
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter SKU or ID"
          value={query}

          onChange={
            (e) => setQuery(e.target.value)
          } // Update the query state as user types
          
          required
        />
        <button type="submit">Search</button>
      </Form>
    </div>
  );
}

export default SearchForm;
