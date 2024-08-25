import { Outlet } from "react-router-dom";


export default function DesctructuringLayout() {
  return (
    <div className="careers-layout">
      <h2>Desctructuring JSON Object</h2>
      <p>
        Tutorials about Desctructuring JSON Object
      </p>
      
      <Outlet />
    </div>
  )
}