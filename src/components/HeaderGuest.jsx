import { HiUserGroup } from "react-icons/hi";

export default function Header() {
    return (
        <div
            id="header-container"
            className="row align-items-center border-b-5 border-white bg-hijau flex justify-between items-center px-30"
        >
            <div id="sidebar-logo">
                <span id="logo-title" className="font-poppins-extrabold text-[48px] text-white">
                    Sedap{" "}
                    <b id="logo-dot" className="text-white">
                        .
                    </b>
                </span>
            </div>

            <div className="col-lg-7">
                <nav className="navbar">
                    <ul className="navbar-links flex space-x-15 text-white">
                        <li className="navbar-links">
                            <a href="#">Home</a>
                        </li>
                        <li className="navbar-links">
                            <a href="#">About Us</a>
                        </li>
                        <li className="navbar-links">
                            <a href="#">Restaurants</a>
                        </li>
                        <li className="navbar-links">
                            <a href="#">Pages</a>
                        </li>
                        <li className="navbar-links">
                            <a href="#">Contacts</a>
                        </li>
                    </ul>
                </nav>
            </div>

            <div id="header-actions-container" className="flex items-center space-x-4">
                <div
                    id="button-signup"
                    className="flex items-center gap-2 bg-white border-2 border-gray-300 text-green-700 px-4 py-2 rounded-lg"
                >
                    <HiUserGroup />
                    <button>Daftar Member!</button>
                </div>

                <div
                    id="button-login"
                    className="border-2 border-gray-300 text-white px-4 py-2 rounded-lg"
                >
                    <button>Login</button>
                </div>
            </div>
        </div>
    );
}
