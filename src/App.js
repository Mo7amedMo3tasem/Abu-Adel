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
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      setLoading(true);
      const timer = setTimeout(() => setLoading(false), 800);
      return () => clearTimeout(timer);
  }, [location.pathname]);

  // تأكيد الرجوع لأعلى الصفحة بعد ظهور المحتوى الجديد
  useEffect(() => {
      if (!loading) window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [loading, location.pathname]);

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
  // منع المتصفح من استرجاع مكان السكرول القديم عند الرجوع/التقدم
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  return (
      <BrowserRouter>
        <Header/>
        <AnimatedRoutes />
        <Footer/>
      </BrowserRouter>
  );
}

