import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Download, Trash2, Copy, Edit } from 'lucide-react';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

interface User {
  id: number;
  username: string;
  email: string;
}

const UserManagement: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUsers, setSelectedUsers] = useState<number[]>([]);

  useEffect(() => {
    // TODO: Fetch users from API
    // This is a placeholder, replace with actual API call
    setUsers([
      { id: 1, username: 'user1', email: 'user1@example.com' },
      { id: 2, username: 'user2', email: 'user2@example.com' },
    ]);
  }, []);

  const handleSelectUser = (userId: number) => {
    setSelectedUsers(prev =>
      prev.includes(userId) ? prev.filter(id => id !== userId) : [...prev, userId]
    );
  };

  const handleDeleteUser = (userId: number) => {
    // TODO: Implement delete user logic
    console.log('Delete user', userId);
  };

  const handleCopyUser = (userId: number) => {
    // TODO: Implement copy user logic
    console.log('Copy user', userId);
  };

  const exportToCSV = () => {
    const ws = XLSX.utils.json_to_sheet(users);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Users");
    XLSX.writeFile(wb, "users.csv");
  };

  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(users);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Users");
    XLSX.writeFile(wb, "users.xlsx");
  };

  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.autoTable({
      head: [['ID', 'Username', 'Email']],
      body: users.map(user => [user.id, user.username, user.email]),
    });
    doc.save('users.pdf');
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">User Management</h2>
      <div className="mb-4 space-x-2">
        <button onClick={exportToCSV} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
          Export CSV
        </button>
        <button onClick={exportToExcel} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Export Excel
        </button>
        <button onClick={exportToPDF} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
          Export PDF
        </button>
      </div>
      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Select</th>
            <th className="border p-2">Username</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td className="border p-2">
                <input
                  type="checkbox"
                  checked={selectedUsers.includes(user.id)}
                  onChange={() => handleSelectUser(user.id)}
                />
              </td>
              <td className="border p-2">{user.username}</td>
              <td className="border p-2">{user.email}</td>
              <td className="border p-2">
                <div className="flex space-x-2">
                  <Link to={`/edit-user/${user.id}`} className="text-blue-500 hover:text-blue-700">
                    <Edit size={18} />
                  </Link>
                  <button onClick={() => handleDeleteUser(user.id)} className="text-red-500 hover:text-red-700">
                    <Trash2 size={18} />
                  </button>
                  <button onClick={() => handleCopyUser(user.id)} className="text-green-500 hover:text-green-700">
                    <Copy size={18} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;