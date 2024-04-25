import { menus } from "../../../../data/menus";
import { useLocation, useNavigate } from "react-router-dom";

export default function sidebarMenus() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <nav id="sidebar" className="basis-16 bg-blue-800">
        <div className="p-4 m-4 bg-slate-200" />
        {menus.map((menu, index) => (
          <a
            key={index}
            onClick={() => navigate(menu.path)}
            className={`group flex flex-col justify-center aligns-center py-2 hover:bg-blue-500 hover:cursor-pointer ${
              menu.paths.includes(location.pathname) && "bg-blue-500 text-black"
            }`}
          >
            <img className="mx-4" src={menu.icon} alt={menu.alt} />
            <p className="text-white text-[0.7rem] text-center group-hover:font-bold">
              {menu.title}
            </p>
          </a>
        ))}
      </nav>
    </>
  );
}
