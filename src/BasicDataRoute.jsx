import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: '/',  // Telling the Home (Root) Page with result output "Hello World!"
        element: <div>Hello World!</div>,
    },
]);

export default function BasicDataRoute(){
    return (
        <RouterProvider router={router} />
    )
};