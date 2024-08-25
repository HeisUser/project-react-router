import { NavLink, Outlet } from "react-router-dom";


export default function HomeLayout() {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1>Jobarouter</h1>
          {/* 
              to="/" defined by path: "/" on DataRoutes.jsx
              or path='/' on NormalRoutes.jsx
          */}
          <NavLink to="/">Home</NavLink>

          {/* 
              to="about" defined by path: "about" on DataRoutes.jsx
              or path='about' on NormalRoutes.jsx
          */}
          <NavLink to="about">About</NavLink>
          <NavLink to="help">FAQ & Help</NavLink>
          <NavLink to="careers">Careers</NavLink>
          <NavLink to="json">Destructuring</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
