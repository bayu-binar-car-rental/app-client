import { useState } from "react";

import homeIcon from "../../assets/fi_home.svg";
import carIcon from "../../assets/fi_truck.svg";

import { IMenus } from "../../types/types";
import SidebarMenus from "../admin/SidebarMenus";
import SidebarSubmenus from "../admin/SidebarSubmenus";
import ContentHeader from "../admin/ContentHeader";

const menus: IMenus[] = [
  {
    icon: homeIcon,
    alt: "Dashboard icon",
    title: "Dashboard",
    submenus: ["Dashboard", "Analytics"],
    paths: ["home", "analytics"],
  },
  {
    icon: carIcon,
    alt: "Cars icon",
    title: "Cars",
    submenus: ["List Car", "Car Rent"],
    paths: ["list-car", "car-rent"],
  },
];

export default function AdminLayout() {
  const [collapse, setCollapse] = useState<boolean>(true);
  const [selectedMenu, setSelectedMenu] = useState<number>(0);
  const [selectedSubMenu, setSelectedSubMenu] = useState<number>(0);

  return (
    <>
      <div className="flex flex-row h-screen">
        {/* Sidebar - Menus */}
        <SidebarMenus
          menus={menus}
          selectedMenu={selectedMenu}
          setSelectedMenu={setSelectedMenu}
        />

        {/* Sidebar - Submenus */}
        <SidebarSubmenus
          collapse={collapse}
          menu={menus[selectedMenu]}
          selectedSubMenu={selectedSubMenu}
          setSelectedSubMenu={setSelectedSubMenu}
        />

        {/* Content */}
        <ContentHeader collapse={collapse} setCollapse={setCollapse} />
      </div>
    </>
  );
}
