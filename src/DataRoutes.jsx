import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomeLayout from './OutletLayouts/HomeLayout';
import HelpLayout from './OutletLayouts/HelpLayout';
import CareersLayout from './OutletLayouts/CareersLayout';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import FaqPage from './pages/help/Faq';
import ContactPage from './pages/help/Contact';
import CareersPage, { CareersLoader } from './pages/careers/Careers';
import CareerDetails, { CareerDetailsLoader } from './pages/careers/CareerDetails';
import NotFoundPage from './pages/NotFound';

// Define the router
const router = createBrowserRouter([
    {
        path: "/",      // First Layer with Children
        element: <HomeLayout />,
        children: [
            {
                index: true,    // HomePage (Root) being index with "/" path
                element: <HomePage />,
            },
            {
                path: "about",
                element: <AboutPage />,
            },
            {
                path: "help",   // Second Layer with Children
                element: <HelpLayout />,
                children: [
                    {
                        path: "faq",
                        element: <FaqPage />,
                    },
                    {
                        path: "contact",
                        element: <ContactPage />,
                    },
                ],
            },
            {
                path: "careers",    // Second Layer with Children
                element: <CareersLayout />,
                children: [
                    {
                        index: true,    // CareersPage as Root Page of Careers being index with "careers" path
                        element: <CareersPage />,
                        loader: CareersLoader,
                    },
                    {
                        path: ":salary",
                        element: <CareerDetails />,
                        loader: CareerDetailsLoader
                    }
                ],
            },
            {
                path: "*",
                element: <NotFoundPage />,
            },
        ],
    },
]);

export default function DataRoutes(){
    return (
        <RouterProvider router={router} />
    )
};