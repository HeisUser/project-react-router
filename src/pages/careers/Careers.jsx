import { Link, useLoaderData } from "react-router-dom"

export default function Careers() {
  const careers = useLoaderData();
  console.log('Careers useLoaderData careers ' + careers);


  return (
    <div className="careers">
      {careers.map(career => (
        
        <Link to={career.salary.toString()} key={career.salary}>
          <p>{career.title}</p>
          <p>Based in {career.location}</p>
        </Link>
      ))}
      <p>
        {JSON.stringify(careers)}
      </p>
    </div>
  )
}

// data loader
export const CareersLoader = async () => {
  const res = await fetch('http://localhost:4000/careers_json_object');
  return res.json();
}