import React from "react";
import Register from "./pages/Register";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AdminDashboard from "./dashboard/admin/AdminDashboard";
import UserDashboard from "./dashboard/user/UserDashboard";
import AdminRoute from "./routes/AdminRoute";
import UserRoute from "./routes/UserRoute";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/dashboard/admin"
        element={
          <AdminRoute>
            <AdminDashboard />
          </AdminRoute>
        }
      />
      <Route
        path="/dashboard/user"
        element={
          <UserRoute>
            <UserDashboard />
          </UserRoute>
        }
      />
      <Route path="/dashboard/user" element={<UserDashboard />} />
    </Routes>
  );
};

export default App;
