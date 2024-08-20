import { useLoaderData, useParams } from 'react-router-dom';

export default function CareerDetails(){
    const { id } = useParams();
    console.log(id);

    const careerData = useLoaderData();
    console.log(careerData);

    // Determine the output result
    /* 
    return (
        <div className='career-details'>
            <h2>{ id }</h2>
        </div>
    );
    */

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
export const CareerDetailsLoader = async({ params }) => {
    const { id } = params;
    console.log(id);

    const res = await fetch('http://localhost:4000/careers_json_object'+ '/' + id);
    console.log(res);
    return res.json();
}