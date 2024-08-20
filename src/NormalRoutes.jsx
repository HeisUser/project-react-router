import {
    Routes,
    Route,
  } from 'react-router-dom';
  
  
  // Outlet & Layout Components with Custom Naming
  /* Layout always contain 'Outlet' component */
  import HomeLayout from './OutletLayouts/HomeLayout';
  import HelpLayout from './OutletLayouts/HelpLayout';
  import CareersLayout from './OutletLayouts/CareersLayout';
  
  // Pages Component with Custom Naming
  import HomePage from './pages/Home';
  import AboutPage from './pages/About';
  import FaqPage from './pages/help/Faq';
  import ContactPage from './pages/help/Contact';
  import CareersPage, { CareersLoader } from './pages/careers/Careers';
  import CareerDetailsPage, { CareerDetailsLoader } from './pages/careers/CareerDetails';
  import NotFoundPage from './pages/NotFound';
  
  
  
  export default function NormalRoutes(){
    return (
      <>
        <Routes>
            {/*First Layer - Layout always contains <Outlet /> component*/}
            <Route path='/' element={<HomeLayout />}>
            <Route index element={<HomePage />} />
            <Route path='about' element={<AboutPage />} />
    
            {/*Second Layer Nested of Help - Layout always contains <Outlet /> component*/}
            <Route path='help' element={<HelpLayout />} > 
                <Route path='faq' element={<FaqPage />} />
                <Route path='contact' element={<ContactPage />} />
            </Route>

            {/*Second Layer Nested of Careers - Layout always contains <Outlet /> component*/}
            <Route path='careers' element={<CareersLayout />} >
                <Route 
                  index
                  element={<CareersPage />}
                  loader={CareersLoader}
                />

                <Route 
                  path=':id'
                  element={<CareerDetailsPage />}
                  loader={CareerDetailsLoader}
                />
            </Route>

    
            <Route path="*" element={<NotFoundPage />} />
            
            </Route>
        </Routes>
        
      </>
    );
  }