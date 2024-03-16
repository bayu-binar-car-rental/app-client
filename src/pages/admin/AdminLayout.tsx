import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import SidebarMenus from "../../components/features/AdminLayout/SidebarMenus";
import SidebarSubmenus from "../../components/features/AdminLayout/SidebarSubmenus";
import ContentHeader from "../../components/features/AdminLayout/ContentHeader";

import { menus } from "../../data/menus";

export const BASE_URL = "https://binar-car-rental-api-bayu.fly.dev";

export default function AdminLayout() {
  const [collapse, setCollapse] = useState<boolean>(true);
  const [selectedMenu, setSelectedMenu] = useState<number>(0);
  const [selectedSubMenu, setSelectedSubMenu] = useState<number>(0);
  const navigate = useNavigate();

  useEffect(() => {
    navigate(menus[selectedMenu]["paths"][selectedSubMenu]);
  }, [selectedMenu, selectedSubMenu]);

  return (
    <>
      <div className="flex flex-row h-screen bg-slate-50 overflow-clip">
        {/* Sidebar - Menus */}

        <SidebarMenus
          menus={menus}
          selectedMenu={selectedMenu}
          setSelectedMenu={setSelectedMenu}
        />

        {/* Sidebar - Submenus */}
        {!collapse && (
          <SidebarSubmenus
            collapse={collapse}
            menu={menus[selectedMenu]}
            selectedSubMenu={selectedSubMenu}
            setSelectedSubMenu={setSelectedSubMenu}
          />
        )}

        {/* Content */}
        <div className="basis-full relative overflow-y-auto">
          <ContentHeader collapse={collapse} setCollapse={setCollapse} />
          <div className="p-5">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
