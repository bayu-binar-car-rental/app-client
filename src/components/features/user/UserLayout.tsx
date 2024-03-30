import { Outlet } from "react-router-dom";
import { useAppSelector } from "../../../redux/hooks";

import Header from "./Header";
import Footer from "./Footer";

export default function UserLayout() {
  const isToggle = useAppSelector((state) => state.toggle.isToggle);
  return (
    <>
      <div className={`space-y-10 h-screen ${isToggle && "overflow-hidden"}`}>
        <Header />

        <div className="container-xl space-y-10 px-5 md:px-10 lg:px-20 xl:px-32 relative">
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  );
}
