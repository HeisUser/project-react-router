import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Apollo Client
import { ApolloProvider } from '@apollo/client';

// Loader Apollo Client
import ClientApollo from './pages/formGQL/ClientApollo.jsx';

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
import CareersError from './pages/careers/CareersError';
import NotFoundPage from './pages/NotFound';

// Destructuring Json Examples
import DesctructuringLayout from './OutletLayouts/DestructuringLayout';
import DestructuringJson_Basic, { careerLoader } from './pages/destructuring/DestructuringJson_Basic';
import DestructuringJson_Nested, { tableLoader } from './pages/destructuring/DestructuringJson_nested';
import DestructuringJson from './pages/destructuring/DestructuringJson_Theory';

// Form Handling
import SearchResult, { loaderSearch } from './pages/form/SearchResult';
import SearchForm from './pages/form/SearchForm';

// GQL Form Handling
import SearchFormGQL from './pages/formGQL/SearchForm';
import SearchResultGQL from './pages/formGQL/SearchResult';


// Define the router
const router = createBrowserRouter([
    {
        path: "/",      // First Layer of Parent (Layout) with Children
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
                path: "careers",    // Second Layer of Parent (Layout) with Children
                element: <CareersLayout />,
                errorElement: <CareersError />, // errorElement can be replaced with Parent Layer
                children: [
                    {
                        index: true,    // CareersPage as Root Page of Careers being index with "careers" path
                        element: <CareersPage />,
                        loader: CareersLoader,
                        // errorElement: <CareersError /> // errorElement can be replaced with Children Layer
                    },
                    {
                        path: ":salary",
                        element: <CareerDetails />,
                        loader: CareerDetailsLoader,
                    },
                ],
            },
            {
                path: "json",    // Second Layer of Parent (Layout) with Children
                element: <DesctructuringLayout />,
                errorElement: <CareersError />, // errorElement can be replaced with Parent Layer
                children: [
                    {
                        path: ":salary",
                        element: <DestructuringJson_Basic />,
                        loader: careerLoader,
                    },
                    {
                        path: "table/:sku",
                        element: <DestructuringJson_Nested />,
                        loader: tableLoader,
                    },
                    {
                        path: 'theory',
                        element: <DestructuringJson />,
                    }
                ],
            },

            {
                path: "form",    // Second Layer of Parent (Layout) with Children
                element: <DesctructuringLayout />,
                errorElement: <CareersError />, // errorElement can be replaced with Parent Layer
                children: [
                    {
                        index: true,
                        element: <SearchForm />,
                    },
                    {
                        path: 'result/:searchQuery',
                        element: <SearchResult />,
                        loader: loaderSearch,
                    },
                ],
            },
            {
                path: "gql",    // Second Layer of Parent (Layout) with Children
                element: <DesctructuringLayout />,
                errorElement: <CareersError />, // errorElement can be replaced with Parent Layer
                children: [
                    {
                        index: true,
                        element: <SearchFormGQL />,
                    },
                    {
                        path: 'result/:searchQuery',
                        element: <SearchResultGQL />,
                    },
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

        <ApolloProvider client={ClientApollo}>

          {/* Provide RouterProvider with the router instance */}
          <RouterProvider router={router} />
        </ApolloProvider>
      );
}