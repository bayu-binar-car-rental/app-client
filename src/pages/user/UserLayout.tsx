import { Outlet, useNavigate } from "react-router-dom";

import Hero from "./Hero";
import Footer from "./Footer";
import Title from "../../components/ui/Title";
import carImage from "../../assets/img_car.png";

export default function UserLayout() {
  const navigate = useNavigate();

  return (
    <>
      <div className="space-y-20 min-h-screen">
        {/* Hero */}
        <section id="hero">
          <Hero>
            <div className="flex">
              <div
                id="content"
                className="basis-1/2 flex flex-col space-y-4 py-20"
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
                    className="p-2 px-5 bg-[#5CB85F] text-white"
                  >
                    Mulai Sewa Mobil
                  </button>
                </div>
              </div>
              <div className="basis-auto flex justify-end items-end absolute bottom-0 right-0">
                <img src={carImage} alt="Car Image" width={"90%"} />
              </div>
            </div>
          </Hero>
        </section>

        <div className="container px-20 space-y-20">
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  );
}
