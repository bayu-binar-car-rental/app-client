import { useNavigate } from "react-router-dom";

import Title from "../../../../ui/Title";
import Button from "../../../../ui/Button";

export default function HeroContent() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    localStorage.getItem("carFilters") && localStorage.removeItem("carFilters");
    navigate("car");
  };

  return (
    <div className="basis-1/2 flex flex-col space-y-4 py-5 pb-64 md:pb-[22rem] lg:pb-10 lg:py-10 xl:py-20">
      <Title
        title="Sewa & Rental Mobil Terbaik di kawasan Denpasar"
        variant="h2"
      />
      <p className="pe-20">
        Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
        terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk
        sewa mobil selama 24 jam.
      </p>
      <div
        className={`${
          window.location.pathname !== "/" && "hidden md:block md:invisible"
        }`}
      >
        <Button onclick={handleNavigation}>Mulai Sewa Mobil</Button>
      </div>
    </div>
  );
}
