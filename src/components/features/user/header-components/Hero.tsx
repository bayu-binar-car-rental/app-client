import HeroImage from "./hero/HeroImage";
import HeroContent from "./hero/HeroContent";
import { useLocation } from "react-router-dom";

export default function Hero() {
  const { pathname } = useLocation();

  return (
    <>
      {/* Padding for blank content */}
      <div
        className={`py-20 ${
          pathname !== "/" &&
          pathname !== "/car" &&
          !pathname.includes("/profile")
            ? "visible"
            : "hidden"
        }`}
      />

      {/* Content */}
      <div
        className={`flex flex-col lg:flex-row ${
          pathname !== "/" && pathname !== "/car" ? "hidden" : "visible"
        }`}
      >
        <HeroContent />
        <HeroImage />
      </div>
    </>
  );
}
