import Hero from "./header-components/Hero";
import Navbar from "./header-components/Navbar";

export default function Header() {
  return (
    <>
      <div className="container-2xl px-5 md:px-10 lg:px-20 xl:px-32 bg-[#F1F3FF] relative">
        <Navbar />
        <Hero />
      </div>
    </>
  );
}
