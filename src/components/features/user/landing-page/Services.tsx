import priceIcon from "../../../../assets/icon_price.png";
import hoursIcon from "../../../../assets/icon_24hrs.png";
import completeIcon from "../../../../assets/icon_complete.png";
import professionalIcon from "../../../../assets/icon_professional.png";

import Title from "../../../ui/Title";

interface ICard {
  image: string;
  title: string;
  content: string;
}

function Card({ image, title, content }: ICard) {
  return (
    <div className="py-3 px-5 border rounded-md space-y-3">
      <img src={image} alt="" />
      <h3 className="font-bold text-xl">{title}</h3>
      <p>{content}</p>
    </div>
  );
}

const cards: ICard[] = [
  {
    image: completeIcon,
    title: "Mobil Lengkap",
    content:
      "Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat",
  },
  {
    image: priceIcon,
    title: "Harga Murah",
    content:
      "Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain",
  },
  {
    image: hoursIcon,
    title: "Layanan 24 Jam",
    content:
      "Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu",
  },
  {
    image: professionalIcon,
    title: "Sopir Profesional",
    content:
      "Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu",
  },
];

export default function Services() {
  return (
    <>
      {/* Why Us */}
      <section id="services">
        <div className="space-y-5">
          <Title title="Why Us?" sx={["text-center", "md:text-left"]} />
          <p className="text-center md:text-left">
            Mengapa harus pilih Binar Car Rental?
          </p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {cards.map((card, index) => {
              return <Card key={index} {...card} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}
