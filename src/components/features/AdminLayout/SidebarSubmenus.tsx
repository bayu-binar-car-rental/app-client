import { IMenus } from "../../../types/admin";

interface ISidebarMenusProps {
  collapse: boolean;
  menu: IMenus;
  selectedSubMenu: number;
  setSelectedSubMenu: (index: number) => void;
}

export default function SidebarSubmenus({
  menu,
  selectedSubMenu,
  setSelectedSubMenu,
}: ISidebarMenusProps) {
  return (
    <div className="bg-white basis-3/12">
      <div className="p-4 m-4 w-1/2 bg-slate-200 border" />

      <div className="px-4 py-2 text-gray-300 font-bold mb-3">
        {menu.title.toUpperCase()}
      </div>
      {menu.submenus.map((submenu, index) =>
        selectedSubMenu === index ? (
          <div
            key={index}
            onClick={() => setSelectedSubMenu(index)}
            className="px-4 py-2 bg-slate-200 hover:cursor-pointer"
          >
            <p className="font-bold">{submenu}</p>
          </div>
        ) : (
          <div
            key={index}
            onClick={() => setSelectedSubMenu(index)}
            className="px-4 py-2 hover:bg-slate-200 hover:cursor-pointer"
          >
            {submenu}
          </div>
        )
      )}
    </div>
  );
}
