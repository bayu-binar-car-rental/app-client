import { PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="flex justify-between sticky ">
      <div
        onClick={() => navigate("/")}
        className="p-1 w-1/12 bg-blue-800 hover:cursor-pointer"
      />
      <div className="flex items-center space-x-8">
        <a href="/#features">Our Services</a>
        <a href="/#services">Why Us</a>
        <a href="/#testimonial">Testimoni</a>
        <a href="/#faq">FAQ</a>
        <button className="p-1 px-5 bg-[#5CB85F] text-white">Register</button>
      </div>
    </nav>
  );
}

export default function Hero({ children }: PropsWithChildren) {
  return (
    <>
      <div className="container py-5 px-20 bg-[#F1F3FF] relative">
        <Navbar />
        {children}
      </div>
    </>
  );
}
