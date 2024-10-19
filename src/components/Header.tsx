import React from 'react';
import { Link } from 'react-router-dom';
import { Camera } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Camera size={24} />
          <span className="text-xl font-bold">PhotoStream</span>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/login" className="hover:underline">Login</Link></li>
            <li><Link to="/gallery" className="hover:underline">Gallery</Link></li>
            <li><Link to="/upload" className="hover:underline">Upload</Link></li>
            <li><Link to="/user-management" className="hover:underline">Users</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;