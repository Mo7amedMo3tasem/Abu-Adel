import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Home     from './components/Home';
import Naoem    from './components/Naoem';
import Eastern  from './components/Eastern';
import Western  from './components/Western';
import Tart     from './components/Tart';
import Bakery   from './components/Bakery';
import Choco    from './components/Choco';
import About    from './components/About';
import Contact  from './components/Contact';
import Location from './components/Location';
import Loader   from './components/Loader';
import Header   from './components/Header';
import Footer   from './components/Footer';



// ===== مكون التحميل عند الانتقال بين الصفحات =====
function AnimatedRoutes() {

  const location                  = useLocation();
  const [loading, setLoading]     = useState(false);

  useEffect(() => {
      setLoading(true);
      const timer = setTimeout(() => setLoading(false), 800);
      return () => clearTimeout(timer);
  }, [location.pathname]);

  if (loading) return <Loader />;

  return (
      <Routes location={location}>
          <Route index element={<Home/>} />
          <Route path="/home"     element={<Home     />} />
          <Route path="/naoem"    element={<Naoem    />} />
          <Route path="/eastern"  element={<Eastern  />} />
          <Route path="/western"  element={<Western  />} />
          <Route path="/tart"     element={<Tart     />} />
          <Route path="/bakery"   element={<Bakery   />} />
          <Route path="/choco"    element={<Choco    />} />
          <Route path="/about"    element={<About    />} />
          <Route path="/contact"  element={<Contact  />} />
          <Route path="/location" element={<Location />} />
      </Routes>
  );
}



export default function App() {
  return (
      <BrowserRouter>
        <Header/>
        <AnimatedRoutes />
        <Footer/>
      </BrowserRouter>
  );
}

