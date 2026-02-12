import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import App from './App.tsx';
import ThankYouPage from './pages/ThankYouPage.tsx';
import AdminDashboard from './pages/AdminDashboard.tsx';
import AdminLogin from './pages/AdminLogin.tsx';
import CourseLandingPage from './pages/CourseLandingPage.tsx';
import ProtectedRoute from './components/ProtectedRoute.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        {/* Course landing pages — marketing-friendly URLs */}
        <Route path="/course/:slug" element={<CourseLandingPage />} />
        <Route path="/sql-dbt" element={<CourseLandingPage />} />
        <Route path="/gen-ai" element={<CourseLandingPage />} />
        <Route path="/snowflake" element={<CourseLandingPage />} />
        <Route path="/microsoft-fabric" element={<CourseLandingPage />} />
        <Route path="/azure" element={<CourseLandingPage />} />
        <Route path="/aws" element={<CourseLandingPage />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        {/* Catch-all: redirect unknown routes to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
