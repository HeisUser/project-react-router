import { useRoutes } from 'react-router-dom';

// Layouts
import HomeLayout from './OutletLayouts/HomeLayout';
import HelpLayout from './OutletLayouts/HelpLayout';
import CareersLayout from './OutletLayouts/CareersLayout';

// Pages
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import FaqPage from './pages/help/Faq';
import ContactPage from './pages/help/Contact';
import CareersPage, { CareersLoader } from './pages/careers/Careers';
import CareerDetails, { CareerDetailsLoader } from './pages/careers/CareerDetails';
import NotFoundPage from './pages/NotFound';

// Define the router
const routerJSON = [
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
                        path: ":id",
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
];


/* 
useRoutes hook is the functional equivalent of <Routes>, but it uses JavaScript objects instead 
of <Route> elements to define your routes. These objects have the same properties as normal <Route> 
elements, but they don't require JSX.

The return value of useRoutes is either a valid React element you can use to render the route 
tree, or null if nothing matched.
*/
export default function UseRoutesDataRoute(){
    const element = useRoutes(routerJSON);
    return element;
};