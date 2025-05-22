import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Users() {
  const [usersData, setUsersData] = useState([]);
  const [showPassword, setShowPassword] = useState({});

  useEffect(() => {
    // Ambil data user dari dummyjson (hanya contoh)
    axios
      .get("https://dummyjson.com/users")
      .then((response) => {
        setUsersData(response.data.users);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  const togglePasswordVisibility = (index) => {
    setShowPassword((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="p-4 mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Users List</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-xl overflow-hidden">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="px-6 py-3 border-b">Name</th>
              <th className="px-6 py-3 border-b">Email</th>
              <th className="px-6 py-3 border-b w-1/4">Password</th>
            </tr>
          </thead>
          <tbody>
            {usersData.map((user, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 border-b">
                  {user.firstName} {user.lastName}
                </td>
                <td className="px-6 py-4 border-b">{user.email}</td>
                <td className="px-6 py-4 border-b flex items-center gap-2">
                  <div className="flex items-center gap-2">
                    {showPassword[index] ? user.password : "••••••••"}
                    <button
                      onClick={() => togglePasswordVisibility(index)}
                      className="text-blue-500 text-sm"
                    >
                      {showPassword[index] ? "Hide" : "Show"}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {usersData.length === 0 && (
              <tr>
                <td colSpan="3" className="px-6 py-4 text-center text-gray-500">
                  Loading or no users found...
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
