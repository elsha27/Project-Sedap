import React from "react";

export default function ErrorPage({ code, message, image }) {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-6">
      <h1 className="text-7xl font-bold text-gray-800 mb-2">{code}</h1>
      <p className="text-lg font-semibold text-gray-500 text-center max-w-lg">{message}</p>
      <img src={image} alt={`Error ${code}`} className="w-200 mb-6" />
    </div>
  );
}


