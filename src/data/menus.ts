import homeIcon from "../assets/fi_home.svg";
import carIcon from "../assets/fi_truck.svg";

import { IMenus } from "../types/admin";

export const menus: IMenus[] = [
  {
    icon: homeIcon,
    alt: "Dashboard icon",
    title: "Dashboard",
    submenus: ["Dashboard", "Analytics"],
    paths: ["dashboard", "analytics"],
  },
  {
    icon: carIcon,
    alt: "Cars icon",
    title: "Cars",
    submenus: ["List Car", "Car Rent"],
    paths: ["car-list", "car-rent"],
  },
];
