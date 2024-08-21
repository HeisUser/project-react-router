import { Link, useRouteError } from "react-router-dom"; // useRouteError only works with Data Router


export default function CareersError() {
  const error = useRouteError();
  console.error = (error);

  return (
    <div className="careers-error">
      <h2>Error Page</h2>
      <p>{error.message}</p>

      <Link to="/">Back to the Homepage</Link>
    </div>
  );
}