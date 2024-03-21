import Title from "../../../ui/Title";

import rating from "../../../../assets/Rate.png";
import userOne from "../../../../assets/img_photo.png";
import userTwo from "../../../../assets/img_photo_2.png";
import chevronLeft from "../../../../assets/fi_chevron-left.png";
import chevronRight from "../../../../assets/fi_chevron-right.png";
import { useState } from "react";

interface ITestimoni {
  image: string;
  testimoni: string;
  user: string;
}

const testimonies: ITestimoni[] = [
  {
    image: userOne,
    testimoni:
      "Binar Car Rental made our road trip unforgettable! The booking process was seamless, and the car was in pristine condition when we picked it up. We explored stunning landscapes hassle-free, thanks to their reliable service. Highly recommend!",
    user: "Bayu, 23, Bali",
  },
  {
    image: userTwo,
    testimoni:
      "Exceptional service from start to finish! Binar Car Rental provided us with a wide selection of vehicles to choose from, accommodating our needs perfectly. Their friendly staff ensured we had all the information we needed, making our vacation smooth sailing. Will definitely use them again!",
    user: "Beber, 23, Jogja",
  },
  {
    image: userOne,
    testimoni:
      "Binar Car Rental exceeded our expectations! The convenience of online booking combined with their competitive prices made it an easy choice for our family vacation. The vehicle was clean and well-maintained, offering both comfort and safety throughout our trip. Five-star experience!",
    user: "Ifen 24, Jakarta",
  },
  {
    image: userTwo,
    testimoni:
      "I can't praise Binar Car Rental enough! Their customer service is top-notch, with prompt responses to any queries we had. Renting with them was a breeze, and the car surpassed our expectations. Whether it's for business or leisure, Binar Car Rental is the way to go for a stress-free journey!",
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
    <div className="p-10 px-10 sm:px-20 bg-[#F1F3FF] rounded-lg max-w-3xl space-y-7">
      <div className="sm:flex space-y-3 items-center justify-center md:space-x-7">
        <div className="basis-1/4 md:basis-1/2 lg:basis-1/3 flex items-center justify-center">
          <img src={image} alt="" />
        </div>
        <div className="space-y-2 flex flex-col items-center md:items-start">
          <div className="mb-3 md:mb-0">
            <img src={rating} alt="" />
          </div>
          <p className="text-left">{testimoni}</p>
          <p className="text-left font-bold text-md">{user}</p>
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
