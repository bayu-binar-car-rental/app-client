import HeroImage from "./hero/HeroImage";
import HeroContent from "./hero/HeroContent";

export default function Hero() {
  const curPath = window.location.pathname;

  return (
    <>
      {/* Padding for blank content */}
      <div
        className={`py-20 border ${
          curPath !== "/" && curPath !== "/car" ? "visible" : "hidden"
        }`}
      />

      {/* Content */}
      <div
        className={`lg:flex ${
          curPath !== "/" && curPath !== "/car" ? "lg:hidden" : "visible"
        }`}
      >
        <HeroContent />
        <HeroImage />
      </div>
    </>
  );
}
