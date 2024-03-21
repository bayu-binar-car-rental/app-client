import { useNavigate } from "react-router-dom";
import Title from "../../../ui/Title";

export default function CallToAction() {
  const navigate = useNavigate();
  return (
    <>
      {/* Call To Action */}
      <section id="cta">
        <div className="bg-[#0D28A6] rounded-lg p-10 py-20 flex flex-col items-center space-y-5">
          <Title
            title="Sewa Mobil di Denpasar Sekarang"
            variant="h2"
            center
            sx={["text-white"]}
          />
          <p className="max-w-lg text-center text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="sm:pt-10">
            <button
              className="p-2 px-5 bg-[#5CB85F] text-white"
              onClick={() => navigate("car")}
            >
              Mulai Sewa Mobil
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
