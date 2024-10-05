import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AppLayout from "./components/AppLayout";
import React from "react";
import ProtectedRoute from "./components/ProtectedRoute";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <ProtectedRoute>
              <AppLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate replace to="homepage" />} />
          <Route path="homepage" element={<Homepage />} />
          <Route path="bookings/:bookingId" />
          <Route path="checkin/:bookingId" />
          <Route path="cabins" />
          <Route path="users" />
          <Route path="settings" />
          <Route path="account" />
        </Route>

        <Route path="login" />
        <Route path="*" />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
