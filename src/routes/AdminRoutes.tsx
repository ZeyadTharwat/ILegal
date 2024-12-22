import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../pages/Home";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/home" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
