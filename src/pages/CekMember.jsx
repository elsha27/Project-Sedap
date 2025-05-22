import { useState } from "react";
import {
  FaTimesCircle,
  FaUserCheck,
} from "react-icons/fa";
import { BsPatchCheckFill } from "react-icons/bs";

export default function CekMember() {
  const [email, setEmail] = useState("");
  const [pesan, setPesan] = useState(null);

  const handleCek = async (e) => {
    e.preventDefault();
    setPesan(null);

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.trim() === "" || !emailPattern.test(email)) {
      setPesan({
        tipe: "error",
        teks: "Email tidak valid.",
      });
      return;
    }

    const res = await fetch("/members.json");
    const data = await res.json();
    const member = data.find(
      (m) => m.email.toLowerCase() === email.toLowerCase()
    );

    if (!member) {
      setPesan({
        tipe: "notfound",
        teks: "Email tidak terdaftar sebagai member.",
      });
    } else {
      setPesan({
        tipe: "found",
        nama: member.nama,
        tipe_member: member.tipe_member,
      });
    }
  };

  const getColor = (tipe) => {
    if (tipe === "silver") return "text-gray-500";
    if (tipe === "gold") return "text-yellow-500";
    if (tipe === "platinum") return "text-indigo-500";
    return "text-black";
  };

  return (
    <div className="flex p-10 items-center justify-center">
      {/* Kolom Kiri: Form */}
      <div className="text-2xl ">
        <h1 className="text-3xl font-bold mb-6">Cek Keanggotaan</h1>
        <form onSubmit={handleCek} className="space-y-4">
          <input
            type="email"
            placeholder="Masukkan Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 w-full"
          >
            Cek Member
          </button>
        </form>

        {pesan && (
          <div className="mt-6 p-4 rounded-md shadow-md w-full text-left bg-white border">
            {pesan.tipe === "found" && (
              <div
                className={`flex items-center font-semibold ${getColor(
                  pesan.tipe_member
                )}`}
              >
                <BsPatchCheckFill className="mr-2 text-2xl" />
                🧾 Selamat datang, {pesan.nama}! Anda adalah member{" "}
                <strong className="ml-1 capitalize">{pesan.tipe_member}</strong>.
              </div>
            )}
            {(pesan.tipe === "notfound" || pesan.tipe === "error") && (
              <div className="flex items-center text-red-600 font-semibold">
                <FaTimesCircle className="mr-2" />
                {pesan.teks}
              </div>
            )}
          </div>
        )}
      </div>

      <div className="w-1/2 flex justify-end">
        <img
          src="/img/gambar1.png"
          className="w-[600px] max-w-full object-contain"
        />
      </div>
    </div>
  );
}
