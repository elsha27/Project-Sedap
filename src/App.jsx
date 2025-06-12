import "./assets/tailwind.css";
// import Dashboard from "./pages/Dashboard.jsx";
import { Route, Routes } from "react-router-dom";
import Loading from "./components/Loading";
import NotFound from "./components/NotFound";
// import Orders from "./pages/Orders.jsx";
// import Customers from "./pages/Customers.jsx";
// import ErrorPage400 from "./pages/ErrorPage400.jsx";
// import ErrorPage401 from "./pages/ErrorPage401.jsx";
// import ErrorPage403 from "./pages/ErrorPage403.jsx";
// import AddCustomer from "./pages/AddCustomer.jsx";
// import AddOrder from "./pages/AddOrders.jsx";
// import MainLayout from "./layouts/MainLayout.jsx";
// import AuthLayout from "./layouts/AuthLayout.jsx";
// import Login from "./pages/Auth/Login.jsx";
// import Register from "./pages/Auth/Register.jsx";
// import Forgot from "./pages/Auth/Forgot.jsx";

import React, { Suspense } from "react";
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Orders = React.lazy(() => import("./pages/Orders"));
const Customers = React.lazy(() => import("./pages/Customers"));
const Users = React.lazy(() => import("./pages/Users"));
const ErrorPage400 = React.lazy(() => import("./pages/ErrorPage400"));
const ErrorPage401 = React.lazy(() => import("./pages/ErrorPage401"));
const ErrorPage403 = React.lazy(() => import("./pages/ErrorPage403"));
const AddCustomer = React.lazy(() => import("./pages/AddCustomer"));
const AddOrder = React.lazy(() => import("./pages/AddOrders"));
const MainLayout = React.lazy(() => import("./layouts/MainLayout"));
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));
const Login = React.lazy(() => import("./pages/Auth/Login"));
const Register = React.lazy(() => import("./pages/Auth/Register"));
const Forgot = React.lazy(() => import("./pages/Auth/Forgot"));
const GuestLayout = React.lazy(() => import("./layouts/GuestLayout"));
const DashboardGuest = React.lazy(() => import("./pages/DashboardGuest"));
<<<<<<< HEAD
const CekMember = React.lazy(() => import("./pages/CekMember"))
const Notes = React.lazy(() => import("./pages/Notes"))
=======
const CekMember = React.lazy(() => import("./pages/CekMember"));
const Products = React.lazy(() => import("./pages/products"));
const ProductDetail = React.lazy(() => import("./pages/ProductDetail"))
>>>>>>> efe81c81537148a8c3b5e3d121a935efd099f987

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/errorpage400" element={<ErrorPage400 />} />
          <Route path="/errorpage401" element={<ErrorPage401 />} />
          <Route path="/errorpage403" element={<ErrorPage403 />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/users" element={<Users />} />
          <Route path="/addcustomer" element={<AddCustomer />} />
          <Route path="/addorders" element={<AddOrder />} />
<<<<<<< HEAD
          <Route path="/notes" element={<Notes />} />
=======
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} /> 
>>>>>>> efe81c81537148a8c3b5e3d121a935efd099f987
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>
        <Route path="*" element={<NotFound />} />

        <Route element={<GuestLayout />}>
          <Route path="/guest" element={<DashboardGuest />} />
          <Route path="/cekmember" element={<CekMember />} />
        </Route>

      </Routes>
    </Suspense >
  );
}

export default App;
