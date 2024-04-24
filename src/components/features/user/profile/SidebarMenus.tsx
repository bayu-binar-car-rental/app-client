import { useLocation, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../../states/hooks";

interface ISidebarMenusProps {
  className?: string;
}

export default function SidebarMenus({ className }: ISidebarMenusProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useAppSelector((state) => state.user);

  const menus = [
    {
      label: "Profile",
      path: `/profile/${id}`,
    },
    {
      label: "Transactions",
      path: `/profile/${id}/transactions`,
    },
    {
      label: "Cars",
      path: `/profile/${id}/cars`,
    },
  ];

  return (
    <ul className={`flex flex-col ${className}`}>
      {menus.map((menu, index) => (
        <li key={index}>
          <a
            className={`p-1 w-full inline-block hover:bg-slate-200 hover:cursor-pointer rounded-md px-3 ${
              location.pathname === menu.path && "bg-slate-200"
            }`}
            onClick={() => navigate(menu.path)}
          >
            {menu.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
