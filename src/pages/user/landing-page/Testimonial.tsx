import Title from "../../../components/ui/Title";

import rating from "../../../assets/Rate.png";
import userOne from "../../../assets/img_photo.png";
import userTwo from "../../../assets/img_photo_2.png";
import chevronLeft from "../../../assets/fi_chevron-left.png";
import chevronRight from "../../../assets/fi_chevron-right.png";
import { useEffect, useState } from "react";

interface ITestimoni {
  image: string;
  testimoni: string;
  user: string;
}

const testimonies: ITestimoni[] = [
  {
    image: userOne,
    testimoni:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, magni soluta aperiam explicabo repellat fuga quasi. Voluptates a et possimus, adipisci dignissimos eos suscipit, dolorum assumenda amet voluptatem excepturi nisi?",
    user: "Bayu, 23, Bali",
  },
  {
    image: userTwo,
    testimoni:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, magni soluta aperiam explicabo repellat fuga quasi. Voluptates a et possimus, adipisci dignissimos eos suscipit, dolorum assumenda amet voluptatem excepturi nisi?",
    user: "Beber, 23, Jogja",
  },
  {
    image: userOne,
    testimoni:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, magni soluta aperiam explicabo repellat fuga quasi. Voluptates a et possimus, adipisci dignissimos eos suscipit, dolorum assumenda amet voluptatem excepturi nisi?",
    user: "Ifen 24, Jakarta",
  },
  {
    image: userTwo,
    testimoni:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, magni soluta aperiam explicabo repellat fuga quasi. Voluptates a et possimus, adipisci dignissimos eos suscipit, dolorum assumenda amet voluptatem excepturi nisi?",
    user: "Fadil 23, Semarang",
  },
];

function TestimoniCard({
  image,
  testimoni,
  user,
  selectedTestimoni,
}: {
  image: string;
  testimoni: string;
  user: string;
  selectedTestimoni: number;
}) {
  return (
    <div className="p-10 px-20 bg-[#F1F3FF] rounded-lg max-w-3xl space-y-7">
      <div className="flex items-center justify-center space-x-5">
        <div className="basis-1/4 flex items-center justify-center">
          <img src={image} alt="" />
        </div>
        <div className="space-y-2">
          <img src={rating} alt="" />
          <p>{testimoni}</p>
          <p className="font-bold text-md">{user}</p>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-2">
        {testimonies.map((_, index) => (
          <div
            key={index}
            className={`px-4 py-1 bg-gray-700 rounded-full opacity-10 ${
              selectedTestimoni === index && "bg-gray-200 opacity-80"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default function Testimonial() {
  const [selectedTestimoni, setSelectedTestimoni] = useState<number>(1);

  const handleClick = (move: string) => {
    if (move === "next") {
      if (selectedTestimoni >= testimonies.length - 1) {
        setSelectedTestimoni(0);
      } else {
        setSelectedTestimoni(selectedTestimoni + 1);
      }
    } else if (move === "prev") {
      if (selectedTestimoni <= 0) {
        setSelectedTestimoni(testimonies.length - 1);
      } else {
        setSelectedTestimoni(selectedTestimoni - 1);
      }
    }
  };

  useEffect(() => {
    console.log(selectedTestimoni);
  }, [selectedTestimoni]);

  return (
    <>
      {/* Testimoni */}
      <section id="testimonial">
        <div className="space-y-5">
          <Title title="Testimonial" center />
          <p className="text-center">
            Berbagai review positif dari para pelanggan kami
          </p>
          <div className="flex justify-center">
            <TestimoniCard
              {...testimonies[selectedTestimoni]}
              selectedTestimoni={selectedTestimoni}
            />
          </div>
          <div className="flex justify-center space-x-5">
            <button
              onClick={() => handleClick("prev")}
              className="flex justify-center items-center border p-3 rounded-full"
            >
              <img src={chevronLeft} alt="" />
            </button>
            <button
              onClick={() => handleClick("next")}
              className="flex justify-center items-center p-3 rounded-full bg-[#5CB85F]"
            >
              <img src={chevronRight} alt="" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
