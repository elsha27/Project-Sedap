import { ImSpinner2 } from "react-icons/im"; 
import { BsFillExclamationDiamondFill } from "react-icons/bs"; 
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [dataForm, setDataForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError(false);

    axios
      .post("https://dummyjson.com/user/login", {
        username: dataForm.email,
        password: dataForm.password,
      })
      .then((response) => {
        // Jika status bukan 200, tampilkan pesan error
        if (response.status !== 200) {
          setError(response.data.message);
          return;
        }

        // Redirect ke dashboard jika login sukses
        navigate("/");
      })
      .catch((err) => {
        if (err.response) {
          setError(err.response.data.message || "An error occurred");
        } else {
          setError(err.message || "An unknown error occurred");
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  /* error & loading status */
  const errorInfo = error ? (
    <div className="bg-red-200 mb-5 p-5 text-sm font-light text-gray-600 rounded flex items-center">
      <BsFillExclamationDiamondFill className="text-red-600 me-2 text-lg" />
      {error}
    </div>
  ) : null;

  const loadingInfo = loading ? (
    <div className="bg-gray-200 mb-5 p-5 text-sm rounded flex items-center">
      <ImSpinner2 className="me-2 animate-spin" />
      Mohon Tunggu...
    </div>
  ) : null;

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
        Welcome Back 👋
      </h2>

      {errorInfo}

      {loadingInfo}

      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="text"
            id="email"
            className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm
                            placeholder-gray-400"
            placeholder="you@example.com"
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className="mb-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm
                            placeholder-gray-400"
            placeholder="********"
            name="password"
            onChange={handleChange}
          />
        </div>
        <a href="http://localhost:5173/forgot" className="block text-sm font-medium text-gray-500 mb-5 text-right hover:text-blue-500">Forgot Password?</a>
        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4
                        rounded-lg transition duration-300"
        >
          Login
        </button>
        <a href="http://localhost:5173/register" className="block text-sm font-medium text-center text-gray-500 mb-5 mt-4 hover:text-blue-500">Don't have account? Register </a>
      </form>
    </div>
  );
}
