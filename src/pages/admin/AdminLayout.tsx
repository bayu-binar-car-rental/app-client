import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import SidebarMenus from "../../components/features/admin/AdminLayout/SidebarMenus";
import SidebarSubmenus from "../../components/features/admin/AdminLayout/SidebarSubmenus";
import ContentHeader from "../../components/features/admin/AdminLayout/ContentHeader";

import { menus } from "../../data/menus";

export const BASE_URL = "https://binar-car-rental-api-bayu.fly.dev";

export default function AdminLayout() {
  const [collapse, setCollapse] = useState<boolean>(true);
  const [selectedMenu, setSelectedMenu] = useState<number>(0);
  const [selectedSubMenu, setSelectedSubMenu] = useState<number>(0);

  const navigate = useNavigate();

  useEffect(() => {
    setSelectedSubMenu(0);
    navigate(menus[selectedMenu]["paths"][0]);
  }, [selectedMenu]);

  useEffect(() => {
    navigate(menus[selectedMenu]["paths"][selectedSubMenu]);
  }, [selectedSubMenu]);

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
        <div className="basis-full relative overflow-y-auto h-full">
          <ContentHeader collapse={collapse} setCollapse={setCollapse} />
          <div className="p-5">
            <Outlet
              context={[
                menus,
                selectedMenu,
                setSelectedMenu,
                selectedSubMenu,
                setSelectedSubMenu,
              ]}
            />
          </div>
        </div>
      </div>
    </>
  );
}
