import { useLoaderData, useParams } from 'react-router-dom';

export default function CareerDetails(){
    const { salary } = useParams();
    console.log('CareerDetails useParams salary ' + salary);

    const careerData = useLoaderData();
    console.log('CareerDetails useLoaderData careerData ' + careerData);


    return (
        <div className="career-details">
            <h2>Career Details for {careerData.title}</h2>
            <p>Starting Salary: {careerData.salary}</p>
            <p>Location: {careerData.location}</p>

            <p>
                {JSON.stringify(careerData)}
            </p>
        </div>

    )
}

// Loader Function
// Retrieve Data with String "salary" from JSON Object
export const CareerDetailsLoader = async({ params }) => {
    const { salary } = params;
    console.log('CareerDetailsLoader salary ' + salary);

    const res = await fetch('http://localhost:4000/careers_json_object'+ '/');
    console.log('CareerDetailsLoader res ' + res);
    const careers = await res.json();

    // Find the career with the matching salary
    const career = careers.find(
        career => career.salary.toString() === salary
    );
  
    // Error will be throw to CareersError.jsx by useRouteError hook
    if (!career) {
      throw new Error("Error : Career not found");
    }
  
    return career;
}