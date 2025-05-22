import { MdWarehouse } from "react-icons/md";
import { MdOutlineRememberMe } from "react-icons/md";
import { GiCoins } from "react-icons/gi";
import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";
import { Link } from "react-router-dom";
import ulasanData from "../ulasan.json"

export default function DashboardGuest() {
    return (
        <div
            id="dashboard-container"
            className="min-h-screen text-white px-30 py-10 flex flex-col space-y-10"
        >
            <div className="flex flex-row items-center">

                <div className="flex-1 pr-10">
                    <h1 className="font-poppins-extrabold text-[48px] text-left leading-tight">
                        Rasakan Kenikmatan
                        <br />
                        Hidangan Favoritmu,
                    </h1>
                    <p className="mt-4 text-lg text-left">
                        Pesan makanan favoritmu dengan mudah, cepat, dan praktis langsung
                        dari aplikasi Sedap!
                    </p>
                </div>

                <div className="flex-1 flex justify-end">
                    <img src="/img/gambar1.png" className="w-[650px] max-w-full" />
                </div>
            </div>

            <div id="dashboard-grid" className="grid sm:grid-cols-2 md:grid-cols-2 gap-6">
                <Link to="/cekmember">
                    <div className="flex items-center space-x-5 bg-white text-black rounded-lg shadow-md p-4 cursor-pointer hover:bg-blue-100 hover:text-blue-700 transition duration-200">
                        <div className="bg-blue-500 rounded-full p-4 transition duration-200">
                            <MdOutlineRememberMe className="text-white text-5xl" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-3xl font-bold">
                                Cek Keanggotaan / Member
                            </span>
                        </div>
                    </div>
                </Link>

                <div className="flex items-center space-x-5 bg-white text-black rounded-lg shadow-md p-4 cursor-pointer hover:bg-yellow-100 hover:text-green-700 transition duration-200">
                    <div className="bg-yellow-500 rounded-full p-4 transition duration-200">
                        <MdWarehouse className="text-white text-5xl" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-3xl font-bold">Cek Stok Produk</span>
                    </div>
                </div>
            </div>

            <div className="row align-items-center bg-green-600 bg-tra flex justify-between items-center px-30">
                <div id="dashboard-grid" className="grid sm:grid-cols-2 md:grid-cols-2 gap-6 ">
                    <div className="flex items-center space-x-5 bg-white text-black rounded-lg shadow-md p-4 cursor-pointer hover:bg-blue-100 hover:text-blue-700 transition duration-200">
                        {ulasanData.map((ulasan, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                                <td className="px-6 py-4 border-b">{ulasan.avatar}</td>
                                <td className="px-6 py-4 border-b">{ulasan.name}</td>
                                <td className="px-6 py-4 border-b">{ulasan.review}</td>
                            </tr>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
