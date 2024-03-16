import { IMenus } from "../../../types/admin";

interface ISidebarMenusProps {
  menus: IMenus[];
  selectedMenu: number;
  setSelectedMenu: (index: number) => void;
}

export default function sidebarMenus({
  menus,
  selectedMenu,
  setSelectedMenu,
}: ISidebarMenusProps) {
  return (
    <>
      <div id="sidebar" className="basis-16 bg-blue-800">
        <div className="p-4 m-4 bg-slate-200" />
        {menus.map((menu, index) =>
          selectedMenu === index ? (
            <div
              key={index}
              onClick={() => {
                setSelectedMenu(index);
              }}
              className="group flex flex-col justify-center aligns-center py-2 bg-blue-500 hover:cursor-pointer"
            >
              <img className="mx-4" src={menu.icon} alt={menu.alt} />
              <p className="text-white text-[0.7rem] text-center font-bold">
                {menu.title}
              </p>
            </div>
          ) : (
            <div
              key={index}
              onClick={() => setSelectedMenu(index)}
              className="group flex flex-col justify-center aligns-center py-2 hover:bg-blue-500 hover:cursor-pointer"
            >
              <img className="mx-4" src={menu.icon} alt={menu.alt} />
              <p className="text-white text-[0.7rem] text-center group-hover:font-bold">
                {menu.title}
              </p>
            </div>
          )
        )}
        {/* {menus.map((menu, index) => {
          return (
            <div
              key={index}
              onClick={() => setSelectedMenu(index)}
              className="group flex flex-col justify-center aligns-center py-2 hover:bg-blue-500"
            >
              <img className="mx-4" src={menu.icon} alt={menu.alt} />
              <p className="text-white text-[0.7rem] text-center group-hover:font-bold">
                {menu.title}
              </p>
            </div>
          );
        })} */}
      </div>
    </>
  );
}
