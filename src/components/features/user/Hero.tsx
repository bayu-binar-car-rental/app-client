import { PropsWithChildren, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../../redux/hooks";
import { setToken } from "../../../redux/slices/authSlice";

import Title from "../../ui/Title";
import closeIcon from "../../../assets/fi_x.png";
import burgerIcon from "../../../assets/fi_menu.svg";
import { RiArrowDropDownLine } from "react-icons/ri";

interface IProps {
  openCanvas: boolean;
  setOpenCanvas: (state: boolean) => void;
}

function Navbar({ openCanvas, setOpenCanvas }: IProps) {
  const navigate = useNavigate();
  const [isDropdown, setIsDropdown] = useState<boolean>(false);
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setToken());
  }, []);

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
          {isLoggedIn && (
            <div className="py-2 px-4 bg-blue-700 flex justify-center items-center rounded-full text-white">
              <p className="">U</p>
            </div>
          )}
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
            {!isLoggedIn ? (
              <button
                className="p-1 px-5 bg-[#5CB85F] text-white"
                onClick={() => navigate("/auth/sign-up")}
              >
                Register
              </button>
            ) : (
              <div className="flex flex-col space-y-2">
                <hr />
                <a href="/#faq" onClick={() => setOpenCanvas(false)}>
                  Profile
                </a>
                <button
                  type="button"
                  className="text-left"
                  onClick={() => {
                    localStorage.removeItem("token");
                    location.reload();
                  }}
                >
                  Log Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="items-center space-x-8 hidden sm:visible sm:flex">
        <a href="/#features">Our Services</a>
        <a href="/#services">Why Us</a>
        <a href="/#testimonial">Testimoni</a>
        <a href="/#faq">FAQ</a>
        {!isLoggedIn ? (
          <button
            onClick={() => navigate("/auth/sign-up")}
            className="p-1 px-5 bg-[#5CB85F] text-white"
          >
            Register
          </button>
        ) : (
          <div className="flex items-center space-x-2 relative">
            <div className="py-2 px-4  bg-blue-700 flex justify-center items-center rounded-full text-white">
              <p className="">U</p>
            </div>
            <RiArrowDropDownLine
              onClick={() => setIsDropdown(!isDropdown)}
              className="text-2xl hover:cursor-pointer"
            />
            {isDropdown && (
              <div className="flex flex-col space-y-2 py-3 bg-white absolute z-50 -bottom-20 -right-28">
                <button className="ps-4 pe-10 py-1 text-left hover:bg-slate-300">
                  Profile
                </button>
                <button
                  className="ps-4 pe-10 py-1 text-left hover:bg-slate-300"
                  onClick={() => {
                    localStorage.removeItem("token");
                    location.reload();
                  }}
                >
                  Log Out
                </button>
              </div>
            )}
          </div>
        )}
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
