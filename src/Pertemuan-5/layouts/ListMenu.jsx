import { CgProfile } from "react-icons/cg";
import { FcCustomerSupport } from "react-icons/fc";
import { AiOutlineShoppingCart, AiFillHome } from "react-icons/ai";

export default function ListMenu() {
  return (
    <ul id="menu-list" className="space-y-3">
      <li>
        <div className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold">
          <AiFillHome className="mr-4 text-xl" /> Dashboard
        </div>
      </li>
      <li>
        <div className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold">
          <AiOutlineShoppingCart className="mr-4 text-xl" /> Orders
        </div>
      </li>
      <li>
        <div className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold">
          <CgProfile className="mr-4 text-xl" /> Customers
        </div>
      </li>
    </ul>
  );
}