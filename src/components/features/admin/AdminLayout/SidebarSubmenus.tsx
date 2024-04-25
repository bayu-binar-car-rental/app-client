import { useLocation, useNavigate } from "react-router-dom";
import { menus } from "../../../../data/menus";
import { useEffect, useState } from "react";
import { IMenus } from "../../../../types/admin";

export default function SidebarSubmenus() {
  const location = useLocation();
  const pathname = location.pathname;
  const navigate = useNavigate();
  const [curPath, setCurPath] = useState<string>("");
  const [curMenu, setCurMenu] = useState<IMenus | null>();

  useEffect(() => {
    if (pathname.includes("dashboard") || pathname.includes("analytics")) {
      setCurPath("Dashboard");
    } else {
      setCurPath("Cars");
    }
  }, [pathname]);

  useEffect(() => {
    const menu = menus.findIndex((menu) => menu.title === curPath);
    setCurMenu(menus[menu]);
  }, [curPath]);

  return (
    <div className="bg-white basis-3/12">
      <div className="p-4 m-4 w-1/2 bg-slate-200 border" />

      <div className="px-4 py-2 text-gray-300 font-bold mb-3">
        {curPath.toUpperCase()}
      </div>
      {!curMenu ? (
        <p></p>
      ) : (
        curMenu.submenus.map((menu, index) => (
          <a
            key={index}
            onClick={() => navigate(curMenu.paths[index])}
            className={`px-4 py-2 font-bold hover:bg-slate-200 hover:cursor-pointer block ${
              pathname === curMenu.paths[index] && "bg-slate-200"
            }`}
          >
            {menu}
          </a>
        ))
      )}
    </div>
  );
}
