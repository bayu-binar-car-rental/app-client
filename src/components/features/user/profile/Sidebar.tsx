import { useAppSelector } from "../../../../states/hooks";

export default function Sidebar() {
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
    <>
      <nav id="sidebar" className="md:basis-1/3 p-3 border rounded-md">
        <ul className="flex flex-col gap-3">
          {menus.map((menu, index) => (
            <li key={index}>
              <a
                className="p-1 w-full inline-block hover:bg-slate-300"
                href={menu.path}
              >
                {menu.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
