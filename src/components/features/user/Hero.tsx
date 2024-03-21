import { PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";
import burgerIcon from "../../../assets/fi_menu.svg";
import closeIcon from "../../../assets/fi_x.png";
import Title from "../../ui/Title";

interface IProps {
  openCanvas: boolean;
  setOpenCanvas: (state: boolean) => void;
}

function Navbar({ openCanvas, setOpenCanvas }: IProps) {
  const navigate = useNavigate();

  return (
    <nav className="flex justify-between">
      <div
        onClick={() => navigate("/")}
        className="p-4 px-10 bg-blue-800 hover:cursor-pointer"
      />
      <div className="sm:hidden">
        <img
          onClick={() => setOpenCanvas(true)}
          src={burgerIcon}
          alt="Burger Icon"
        />

        {/* OffCanvas */}
        <div
          className={`w-1/2 bg-white h-full z-50 absolute top-0 right-0 p-7 space-y-3 flex flex-col ${
            !openCanvas && "hidden overflow-hidden"
          }`}
        >
          <div className="flex items-center justify-between">
            <Title title="BCR" variant="h6" />
            <img onClick={() => setOpenCanvas(false)} src={closeIcon} alt="" />
          </div>
          <a href="/#features" onClick={() => setOpenCanvas(false)}>
            Our Services
          </a>
          <a href="/#services" onClick={() => setOpenCanvas(false)}>
            Why Us
          </a>
          <a href="/#testimonial" onClick={() => setOpenCanvas(false)}>
            Testimoni
          </a>
          <a href="/#faq" onClick={() => setOpenCanvas(false)}>
            FAQ
          </a>
          <div>
            <button className="p-1 px-5 bg-[#5CB85F] text-white">
              Register
            </button>
          </div>
        </div>
      </div>
      <div className="items-center space-x-8 hidden sm:visible sm:flex">
        <a href="/#features">Our Services</a>
        <a href="/#services">Why Us</a>
        <a href="/#testimonial">Testimoni</a>
        <a href="/#faq">FAQ</a>
        <button className="p-1 px-5 bg-[#5CB85F] text-white">Register</button>
      </div>
    </nav>
  );
}

export default function Hero({
  openCanvas,
  setOpenCanvas,
  children,
}: PropsWithChildren<IProps>) {
  return (
    <>
      <div className="container-2xl pt-5 px-5 md:px-10 lg:px-20 xl:px-32 bg-[#F1F3FF] relative">
        <Navbar openCanvas={openCanvas} setOpenCanvas={setOpenCanvas} />
        {children}
      </div>
    </>
  );
}
