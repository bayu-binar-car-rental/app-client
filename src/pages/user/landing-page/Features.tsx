import serviceImage from "../../../assets/img_service.png";
import checklistIcon from "../../../assets/checklist.png";

import Title from "../../../components/ui/Title";

const features: string[] = [
  "Sewa Mobil Dengan Supir di Denpasar 12 Jam",
  "Sewa Mobil Lepas Kunci di Denpasar 24 Jam",
  "Sewa Mobil Jangka Panjang Bulanan",
  "Gratis Antar - Jemput Mobil di Bandara",
  "Layanan Airport Transfer / Drop In Out",
];

export default function Features() {
  return (
    <>
      {/* Features */}
      <section id="features">
        <div className="grid grid-cols-2">
          <div className="flex justify-center items-center">
            <img src={serviceImage} alt="" />
          </div>
          <div className="flex items-center p-5">
            <div className="space-y-3">
              <Title title="Best Car Rental for any kind of trip in Denpasar!" />
              <p>
                Sewa mobil di Denpasar bersama Binar Car Rental jaminan harga
                lebih murah dibandingkan yang lain, kondisi mobil baru, serta
                kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
                wedding, meeting, dll.
              </p>
              <ul className="space-y-3">
                {features.map((feature, index) => {
                  return (
                    <li key={index} className="flex items-center space-x-3">
                      <img src={checklistIcon} alt="" />
                      <p>{feature}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
