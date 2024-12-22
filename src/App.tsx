import { useEffect, useState } from "react";
import { BrowserRouter as Router, useLocation, Routes, Route } from "react-router-dom";
import AdminRoutes from "./routes/AdminRoutes";

function App() {

  const ScrollToTop = () => {
    const location = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);

    return null;
  };

  const [isLoading, setIsLoading] = useState(true);

  const handleLoading = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    if (document.readyState === "complete") {
      handleLoading();
      console.log('Document is already ready');
    } else {
      window.addEventListener('load', handleLoading);
      console.log('Event listener added for load event');
    }

    return () => {
      window.removeEventListener('load', handleLoading);
    };
  }, []);

  if (isLoading)
    return (
      <div className="min-h-screen flex items-center justify-center flex-col bg-white">
        {/* <img className=" mb-5" src={Logo} alt="Logo" /> */}
        <div className="animate-spin rounded-full sm:size-16 size-10 border-t-[3px] border-b-[3px] border-secondary"></div>
      </div>
    );

  return (
    <Router>
      <ScrollToTop />
      <Routes>
      <Route path="/dashboard/*" element={
            <AdminRoutes />
        } />
      </Routes>
    </Router>
  );
}

export default App;
