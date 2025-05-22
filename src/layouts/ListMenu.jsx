import { BiMessageAltError } from "react-icons/bi"; 
import { BiErrorAlt } from "react-icons/bi"; 
import { BiError } from "react-icons/bi"; 
import { CgProfile } from "react-icons/cg";
import { FcCustomerSupport } from "react-icons/fc";
import { AiOutlineShoppingCart, AiFillHome } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom"

export default function ListMenu() {
  const menuClass = ({ isActive }) =>
    `flex cursor-pointer items-center rounded-xl p-4  space-x-2
    ${isActive ?
      "text-hijau bg-green-200 font-extrabold" :
      "text-gray-600 hover:text-hijau hover:bg-green-200 hover:font-extrabold"
    }`
  return (
    <ul id="menu-list" className="space-y-3">
      <li>
        <NavLink to="/" className={menuClass}>
          <AiFillHome className="mr-4 text-xl" /> Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink to="/orders" className={menuClass}>
          <AiOutlineShoppingCart className="mr-4 text-xl" /> Orders
        </NavLink>
      </li>
      <li>
        <NavLink to="/customers" className={menuClass}>
          <CgProfile className="mr-4 text-xl" /> Customers
        </NavLink>
      </li>
      <li>
        <NavLink to="/users" className={menuClass}>
          <CgProfile className="mr-4 text-xl" /> Users
        </NavLink>
      </li>
      <li>
        <NavLink to="/ErrorPage400" className={menuClass}>
        <BiErrorAlt className="mr-4 text-xl" />Error Page 400
        </NavLink>
      </li>
      <li>
        <NavLink to="/ErrorPage401" className={menuClass}>
        <BiError className="mr-4 text-xl" />Error Page 401
        </NavLink>
      </li>
      <li>
        <NavLink to="/ErrorPage403" className={menuClass}>
        <BiMessageAltError className="mr-4 text-xl" />Error Page 403
        </NavLink>
      </li>
    </ul >
  );
}