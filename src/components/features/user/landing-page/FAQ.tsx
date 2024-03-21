import Title from "../../../ui/Title";
import chevronDown from "../../../../assets/fi_chevron-down.svg";
import { useState } from "react";

interface IAccordion {
  title: string;
  selected: boolean;
  onClick: () => void;
}

function Accordion({ title, selected, onClick }: IAccordion) {
  return (
    <div className="p-3 border space-y-5">
      <div
        className="flex justify-between items-center hover:cursor-pointer"
        onClick={onClick}
      >
        <p>{title}</p>
        <img
          className={`transition duration-150 ${selected && "rotate-180"}`}
          src={chevronDown}
          alt=""
        />
      </div>
      <p className={`transition duration-150 ${!selected && "hidden"}`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
        praesentium qui at sint fuga optio voluptatem expedita assumenda!
        Doloribus totam fugit ullam unde officiis consectetur amet facere itaque
        harum omnis!
      </p>
    </div>
  );
}

const accordionTitles: string[] = [
  "Apa saja syarat yang dibutuhkan?",
  "Berapa hari minimal sewa mobil lepas kunci?",
  "Berapa hari sebelumnya sabaiknya booking sewa mobil?",
  "Apakah Ada biaya antar-jemput?",
  "Bagaimana jika terjadi kecelakaan",
];

export default function FAQ() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
  const [selected, setSelected] = useState<number | null>(null);

  const handleClick = async (e: number) => {
    if (e === selected) {
      setOpenAccordion(null);
      setSelected(null);
    } else {
      setSelected(e);
      setOpenAccordion(e);
    }
  };

  return (
    <>
      {/* FAQ */}
      <section id="faq">
        <div className="sm:grid grid-cols-2 space-y-3 lg:space-y-0">
          <div className="space-y-4">
            <Title title="Frequently Asked Question" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
          <div className="flex flex-col space-y-3">
            {accordionTitles.map((title, index) =>
              openAccordion === index ? (
                <Accordion
                  key={index}
                  title={title}
                  selected={true}
                  onClick={() => {
                    handleClick(index);
                  }}
                />
              ) : (
                <Accordion
                  key={index}
                  title={title}
                  selected={false}
                  onClick={() => {
                    handleClick(index);
                  }}
                />
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
}
