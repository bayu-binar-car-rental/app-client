import { Outlet, useNavigate } from "react-router-dom";

import Hero from "./Hero";
import Footer from "./Footer";
import Title from "../../ui/Title";
import carImage from "../../../assets/img_car.png";
import { useState } from "react";

export default function UserLayout() {
  const navigate = useNavigate();
  const [openCanvas, setOpenCanvas] = useState<boolean>(false);

  return (
    <>
      <div className={`space-y-10 h-screen ${openCanvas && "overflow-hidden"}`}>
        {/* Hero */}
        <section id="hero">
          <Hero openCanvas={openCanvas} setOpenCanvas={setOpenCanvas}>
            <div className="lg:flex">
              <div
                id="content"
                className="basis-1/2 flex flex-col space-y-4 py-10 pb-64 md:pb-[22rem] lg:pb-10 lg:py-20 xl:py-24"
              >
                <Title
                  title="Sewa & Rental Mobil Terbaik di kawasan Denpasar"
                  variant="h2"
                />
                <p className="pe-20">
                  Selamat datang di Binar Car Rental. Kami menyediakan mobil
                  kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                  kebutuhanmu untuk sewa mobil selama 24 jam.
                </p>
                <div>
                  <button
                    onClick={() => navigate("car")}
                    className={`p-2 px-5 bg-[#5CB85F] text-white ${
                      window.location.pathname !== "/" && "hidden"
                    }`}
                  >
                    Mulai Sewa Mobil
                  </button>
                </div>
              </div>
              <div className="basis-auto flex justify-end items-end absolute bottom-0 right-0">
                <img
                  className="w-11/12 z-10 overflow-x-hidden md:w-full lg:w-10/12 xl:w-11/12"
                  src={carImage}
                  alt="Car Image"
                />
              </div>
            </div>
          </Hero>
        </section>

        <div className="container-xl space-y-10 px-5 md:px-10 lg:px-20 xl:px-32">
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  );
}
