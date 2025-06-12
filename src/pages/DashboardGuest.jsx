import { MdWarehouse, MdOutlineRememberMe } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaTwitter,FaHandshake } from "react-icons/fa";
import ulasanData from "../ulasan.json";
import produkData from "../product.json";

export default function DashboardGuest() {
  return (
    <div className="min-h-screen text-white px-10 py-10 flex flex-col space-y-16 bg-gray-900">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center">
        <div className="flex-1 pr-10">
          <h1 className="font-poppins-extrabold text-[48px] leading-tight text-green-400">
            Rasakan Kenikmatan
            <br />
            Hidangan Favoritmu,
          </h1>
          <p className="mt-4 text-lg text-gray-200">
            Pesan makanan favoritmu dengan mudah, cepat, dan praktis langsung
            dari aplikasi{" "}
            <span className="font-semibold text-white">Sedap!</span>
          </p>
        </div>
        <div className="flex-1 flex justify-end">
          <img src="/img/gambar1.png" className="w-[650px] max-w-full" />
        </div>
      </div>

      {/* Menu Section */}
      <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-6">
        <Link to="/cekmember">
          <div className="flex items-center space-x-5 bg-white text-gray-800 rounded-lg shadow-md p-4 cursor-pointer hover:bg-green-100 hover:text-green-700 transition duration-200">
            <div className="bg-green-500 rounded-full p-4">
              <MdOutlineRememberMe className="text-white text-5xl" />
            </div>
            <span className="text-2xl font-bold">Cek Keanggotaan</span>
          </div>
        </Link>

        <div className="flex items-center space-x-5 bg-white text-gray-800 rounded-lg shadow-md p-4 cursor-pointer hover:bg-green-100 hover:text-green-700 transition duration-200">
          <div className="bg-green-500 rounded-full p-4">
            <MdWarehouse className="text-white text-5xl" />
          </div>
          <span className="text-2xl font-bold">Cek Stok Produk</span>
        </div>
      </div>

      {/* About Section */}
      <section className="bg-gray-800 rounded-3xl p-10 shadow-lg">
        <h2 className="text-4xl font-extrabold mb-6 text-center text-green-400">
          Tentang Kami
        </h2>
        <p className="text-center max-w-4xl mx-auto text-lg text-gray-200 leading-relaxed">
          <strong>Sedap!</strong> adalah aplikasi pemesanan makanan yang hadir
          untuk memudahkanmu menikmati makanan favorit dengan cepat dan praktis.
          Kami mengutamakan kualitas, kecepatan, dan kepuasan pelanggan dengan
          berbagai pilihan menu terbaik dan layanan yang ramah.
        </p>
      </section>

      {/* Produk Unggulan */}
      <section className="bg-gray-800 rounded-3xl p-10 shadow-lg">
        <h2 className="text-4xl font-extrabold mb-10 text-center text-green-400">
          Produk Unggulan
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {produkData.map((produk) => (
            <div
              key={produk.id}
              className="bg-white rounded-2xl p-4 shadow-md hover:shadow-2xl hover:shadow-green-400/50 transition-all duration-300 ease-in-out transform hover:-translate-y-1 flex flex-col items-center"
            >
              <img
                src={produk.image}
                alt={produk.name}
                className="w-full h-40 object-cover rounded-xl mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                {produk.name}
              </h3>
              <span className="text-green-600 font-bold text-xl">
                Rp{produk.price.toLocaleString("id-ID")}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Ulasan Section */}
      <div className="px-10 py-14 bg-gradient-to-b from-green-600 to-green-400 rounded-3xl shadow-2xl">
        <h2 className="text-white text-4xl font-extrabold mb-10 text-center drop-shadow-sm">
          Apa Kata Mereka?
        </h2>
        <div className="flex justify-center">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ulasanData.map((ulasan, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-white p-8 rounded-2xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
              >
                <img
                  src={ulasan.avatar}
                  alt={ulasan.name}
                  className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-green-500 shadow"
                />
                <h4 className="text-xl font-bold text-gray-800">
                  {ulasan.name}
                </h4>
                <p className="text-gray-600 text-sm text-center mt-3 leading-relaxed italic">
                  “{ulasan.review}”
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white rounded-3xl p-10 shadow-inner mt-10">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Kontak */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-green-400">Kontak</h3>
            <p>Email: support@sedap.com</p>
            <p>Telp: +62 812-3456-7890</p>
            <p>Alamat: Jl. Kuliner No. 12, Jakarta</p>
          </div>

          {/* Sosial Media */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-green-400">
              Sosial Media
            </h3>
            <div className="flex space-x-4">
              <FaInstagram className="text-2xl hover:text-green-400" />
              <FaFacebook className="text-2xl hover:text-green-400" />
              <FaTwitter className="text-2xl hover:text-green-400" />
            </div>
          </div>

          {/* Partner */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-green-400">Partner</h3>
            <div className="text-green-400">
              <FaHandshake className="text-6xl mx-auto" />
            </div>
          </div>
        </div>

        <p className="text-center mt-10 text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Sedap! All rights reserved.
        </p>
      </footer>
    </div>
  );
}
