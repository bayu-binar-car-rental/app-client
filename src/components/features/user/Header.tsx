import Hero from "./header-components/Hero";
import NavAuth from "./header-components/navbar/NavAuth";
import Navbar from "./header-components/navbar/Navbar";
import NavItem from "./header-components/navbar/NavItem";

export default function Header() {
  return (
    <>
      <div className="container-2xl px-5 md:px-10 lg:px-20 xl:px-32 bg-[#F1F3FF] relative">
        <Navbar>
          <NavItem variant="link" to="#features" label="Our Services" />
          <NavItem variant="link" to="#services" label="Why Us" />
          <NavItem variant="link" to="#testimonial" label="Testimonial" />
          <NavItem variant="link" to="#faq" label="FAQ" />
          <NavAuth />
        </Navbar>
        <Hero />
      </div>
    </>
  );
}
