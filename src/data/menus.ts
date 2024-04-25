import homeIcon from "../assets/fi_home.svg";
import carIcon from "../assets/fi_truck.svg";

export const menus = [
  {
    icon: homeIcon,
    alt: "Dashboard icon",
    title: "Dashboard",
    path: "dashboard",
    submenus: ["Dashboard", "Analytics"],
    paths: ["/admin/dashboard", "/admin/analytics"],
  },
  {
    icon: carIcon,
    alt: "Cars icon",
    title: "Cars",
    path: "cars",
    submenus: ["List Car", "Car Rent"],
    paths: ["/admin/cars", "/admin/rents"],
  },
];
