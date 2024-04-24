import { useState } from "react";
import Avatar from "../../../ui/Avatar";
import { Burger } from "../../../ui/icons";
import SidebarMenus from "./SidebarMenus";
import { useAppSelector } from "../../../../states/hooks";

export default function Sidebar() {
  const { username } = useAppSelector((state) => state.user);
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <>
      <nav
        id="sidebar"
        className="md:basis-1/3 h-fit p-3 border rounded-md md:space-y-5"
      >
        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <Avatar />
            <p>{username}</p>
          </div>
          <button
            onClick={() => setOpenMenu(!openMenu)}
            className="border p-1 hover:bg-slate-300 focus:bg-slate-300 blur:bg-white md:hidden relative"
          >
            <Burger />
            <div
              className={`${
                openMenu ? "flex" : "hidden"
              } absolute top-10 right-0 bg-white border p-2 text-left rounded-md shadow-md`}
            >
              <SidebarMenus className="text-sm" />
            </div>
          </button>
        </div>
        <hr className="hidden md:flex" />
        <SidebarMenus className="hidden md:flex gap-2" />
      </nav>
    </>
  );
}
