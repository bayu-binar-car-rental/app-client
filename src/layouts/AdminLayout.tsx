import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import SidebarMenus from "../components/features/admin/AdminLayout/SidebarMenus";
import SidebarSubmenus from "../components/features/admin/AdminLayout/SidebarSubmenus";
import ContentHeader from "../components/features/admin/AdminLayout/ContentHeader";

export default function AdminLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [collapse, setCollapse] = useState<boolean>(false);

  useEffect(() => {
    if (location.pathname === "/admin") {
      navigate("dashboard");
    }
  }, [location.pathname]);

  return (
    <>
      <div className="flex flex-row h-screen bg-slate-50 overflow-clip">
        {/* Sidebar - Menus */}
        <SidebarMenus />

        {/* Sidebar - Submenus */}
        {!collapse && <SidebarSubmenus />}

        {/* Content */}
        <div className="basis-full relative overflow-y-auto h-full">
          <ContentHeader collapse={collapse} setCollapse={setCollapse} />
          <div className="p-5">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
