import HeaderGuest from "../components/HeaderGuest";
import { Outlet } from "react-router-dom";
export default function GuestLayout() {
    return (
        <div id="app-container" className="bg-gradient-to-bl from-white to-green-600 min-h-screen flex">
            <div id="layout-wrapper" className="flex flex-row flex-1">
                <div id="main-content" className="flex-1 ">
                    <HeaderGuest />

                    <Outlet />
                    
                </div>

            </div>

        </div>

    );
}
