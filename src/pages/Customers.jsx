import React from "react";
import customersData from "../customers.json";

export default function Customers() {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">Customer List</h2>
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
          <a href="../AddCustomer">Add Customer</a>
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-xl overflow-hidden">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="px-6 py-3 border-b">Customer ID</th>
              <th className="px-6 py-3 border-b">Customer Name</th>
              <th className="px-6 py-3 border-b">Email</th>
              <th className="px-6 py-3 border-b">Phone</th>
              <th className="px-6 py-3 border-b">Loyalty</th>
            </tr>
          </thead>
          <tbody>
            {customersData.map((customer, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 border-b">{customer.customer_id}</td>
                <td className="px-6 py-4 border-b">{customer.customer_name}</td>
                <td className="px-6 py-4 border-b">{customer.email}</td>
                <td className="px-6 py-4 border-b">{customer.phone}</td>
                <td className="px-6 py-4 border-b">
                  <span
                    className={`px-2 py-1 text-sm font-medium rounded ${
                      customer.loyalty === "Gold"
                        ? "bg-yellow-200 text-yellow-800"
                        : customer.loyalty === "Silver"
                        ? "bg-gray-200 text-gray-800"
                        : "bg-orange-200 text-orange-800"
                    }`}
                  >
                    {customer.loyalty}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
