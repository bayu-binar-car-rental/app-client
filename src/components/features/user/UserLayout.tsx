import { Outlet } from "react-router-dom";
import ScrollToTop from "../../ui/ScrollToTop";
import { useAppSelector } from "../../../states/hooks";
import { selectToggle } from "../../../states/slices/toggleSlice";

import Header from "./Header";
import Footer from "./Footer";

export default function UserLayout() {
  const { toggleNavbarCanvas, toggleProfileCanvas } =
    useAppSelector(selectToggle);

  return (
    <>
      <ScrollToTop />
      <div
        className={`space-y-10 h-screen group ${
          toggleNavbarCanvas || toggleProfileCanvas ? "overflow-clip" : ""
        }`}
      >
        <Header />

        <div className="container-xl space-y-10 px-5 md:px-10 lg:px-20 xl:px-32 relative">
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  );
}
