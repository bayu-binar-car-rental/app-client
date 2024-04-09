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
          pathname !== "/" && pathname !== "/car" ? "visible" : "hidden"
        }`}
      />

      {/* Content */}
      <div
        className={`lg:flex ${
          pathname !== "/" && pathname !== "/car" ? "lg:hidden" : "visible"
        }`}
      >
        <HeroContent />
        <HeroImage />
      </div>
    </>
  );
}
