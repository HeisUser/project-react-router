import { useParams, useLoaderData } from "react-router-dom";


export default function DestructuringJson_Basic(){
    const { salary } = useParams();  // Get the 'salary' from URL params with Destructuring Method of JSON
    console.log('CareerDetails useParams salary ' + salary);
    


    const { id, name, title, location } = useLoaderData();  // Destructure the response data in curly braces
    console.log('CareerDetails useLoaderData careerData ' + 
        id + 
        ', ' + 
        name + 
        ', ' + 
        title + 
        ', ' + 
        salary + 
        ', ' + 
        location
    );
  
    return (
      <div>
        <h2>Career Details for {name}</h2>
        <p>Title: {title}</p>
        <p>Salary: {salary}</p>
        <p>Location: {location}</p>
        <p>id: {id}</p>
      </div>
    );
}


// Loader function to fetch data
// Retrieve Data with String "salary" from JSON Object by Destructuring
export async function careerLoader({ params }) {
    const { salary } = params;
    console.log('CareerDetailsLoader salary ' + salary);

    const res = await fetch('http://localhost:4000/careers_json_object'+ '/');
    console.log('CareerDetailsLoader res ' + res);

    const careers = await res.json();
    console.log('career : ' + careers)

    // Find the career with the matching salary
    const career = careers.find(
        career => career.salary.toString() === salary
    );

    return career;
}




