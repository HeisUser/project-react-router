import { useNavigate } from 'react-router-dom';

function FormHandler({ query, dynamicSegs, route }) {
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Log the submitted search query to the console
    console.log("Submitted Search Query:", query);

    if (query.trim()) {
      // Replace the dynamic segment with the actual query value
      const path = route.replace(dynamicSegs, query);
      
      // Navigate to the constructed path
      navigate(path);
    }
  };

  return { handleSubmit };
}

export default FormHandler;
