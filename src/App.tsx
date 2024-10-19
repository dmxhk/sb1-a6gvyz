import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Welcome from './pages/Welcome';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import CreateUser from './pages/CreateUser';
import EditUser from './pages/EditUser';
import UserManagement from './pages/UserManagement';
import PhotoUpload from './pages/PhotoUpload';
import PhotoGallery from './pages/PhotoGallery';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/create-user" element={<CreateUser />} />
            <Route path="/edit-user/:id" element={<EditUser />} />
            <Route path="/user-management" element={<UserManagement />} />
            <Route path="/upload" element={<PhotoUpload />} />
            <Route path="/gallery" element={<PhotoGallery />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;