import React from "react";
import orderData from "../orders.json";

export default function Orders() {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">Order List</h2>
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
          <a href="../AddOrders">Add Order</a>
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-xl overflow-hidden">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="px-6 py-3 border-b">Order ID</th>
              <th className="px-6 py-3 border-b">Customer Name</th>
              <th className="px-6 py-3 border-b">Status</th>
              <th className="px-6 py-3 border-b">Total Price</th>
              <th className="px-6 py-3 border-b">Order Date</th>
            </tr>
          </thead>
          <tbody>
            {orderData.map((order, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 border-b">{order.order_id}</td>
                <td className="px-6 py-4 border-b">{order.customer_name}</td>
                <td className="px-6 py-4 border-b">
                  <span
                    className={`px-2 py-1 text-sm font-medium rounded ${
                      order.status === "Completed"
                        ? "bg-green-100 text-green-700"
                        : order.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-4 border-b">Rp {order.total_price.toLocaleString()}</td>
                <td className="px-6 py-4 border-b">{order.order_date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
