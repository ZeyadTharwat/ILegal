import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../pages/Home";
import Bills from "../pages/Bills";
import Tenants from "../pages/Tenants";
import TenantsAnalysis from "../pages/TenantsAnalysis";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/bills/all" element={<Bills />} />
        <Route path="/tenants/all" element={<Tenants />} />
        <Route path="/tenants-analysis" element={<TenantsAnalysis />} />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
