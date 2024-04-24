import { Outlet } from "react-router-dom";
import Sidebar from "../components/features/user/profile/Sidebar";

export default function ProfileLayout() {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-3">
        <Sidebar />
        <div id="content" className="h-fit md:basis-full p-3 border rounded-md">
          <Outlet />
        </div>
      </div>
    </>
  );
}
