import React from "react";

export default function ErrorPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-6">
      <h1 className="text-7xl font-bold text-gray-800 mb-2">404</h1>
      <p className="text-lg font-semibold text-gray-500 text-center max-w-lg">Halaman Tidak Ditemukan</p>
      <img src="/img/400.png" className="w-200 mb-6" />
    </div>
  );
}


