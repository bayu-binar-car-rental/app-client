import { useNavigate } from "react-router-dom";

import Title from "../../../ui/Title";
import carImage from "../../../../assets/img_car.png";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <>
      <div
        className={`py-20 ${
          window.location.pathname !== "/" &&
          window.location.pathname !== "/car"
            ? "visible"
            : "hidden"
        }`}
      />
      <div
        className={`lg:flex ${
          window.location.pathname !== "/" &&
          window.location.pathname !== "/car"
            ? "lg:hidden"
            : "visible"
        }`}
      >
        <div
          id="content"
          className="basis-1/2 flex flex-col space-y-4 py-5 pb-64 md:pb-[22rem] lg:pb-10 lg:py-10 xl:py-20"
        >
          <Title
            title="Sewa & Rental Mobil Terbaik di kawasan Denpasar"
            variant="h2"
          />
          <p className="pe-20">
            Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
            terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
            untuk sewa mobil selama 24 jam.
          </p>
          <div>
            <button
              onClick={() => navigate("car")}
              className={`z-10 p-2 px-5 bg-[#5CB85F] text-white ${
                window.location.pathname !== "/" && "hidden sm:invisible"
              }`}
            >
              Mulai Sewa Mobil
            </button>
          </div>
        </div>
        <div className="basis-auto flex justify-end items-end absolute bottom-0 right-0 z-0">
          <img
            className="w-11/12 overflow-x-hidden md:w-10/12 xl:w-11/12"
            src={carImage}
            alt="Car Image"
          />
        </div>
      </div>
    </>
  );
}
