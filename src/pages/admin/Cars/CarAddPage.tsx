import Input from "../../../components/ui/Input";
import Select from "../../../components/ui/Select";
import ToggleButton from "../../../components/ui/ToggleButton";
import rightChevron from "../../../assets/chevron-right.svg";

import { ICars } from "../../../types/cars";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CarAddPage() {
  const navigate = useNavigate();

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const [model, setModel] = useState<string>("");
  const [manufacture, setManufacture] = useState<string>("");
  const [plate, setPlate] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [rentPerDay, setRentPerDay] = useState<string>("");
  const [capacity, setCapacity] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [availableAt, setAvailableAt] = useState<string>("");
  const [transmission, setTransmission] = useState<string>("Manual");
  const [available, setAvailable] = useState<boolean>(true);
  const [type, setType] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [options, setOptions] = useState<string>("");
  const [specs, setSpecs] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload: ICars = {
      plate: plate,
      manufacture: manufacture,
      model: model,
      image: image,
      rentPerDay: parseInt(rentPerDay),
      capacity: parseInt(capacity),
      description: description,
      availableAt: availableAt,
      transmission: transmission,
      available: available,
      type: type,
      year: parseInt(year),
      options: options.split(";"),
      specs: specs.split(";"),
      //   updated_at: new Date().toString(),
    };

    setIsSubmitting(true);
    try {
      console.log("Submitting...");
      const insertCar = async () => {
        const response = await fetch(
          //   "http://localhost:3000/api/v1/cars",
          "https://binar-car-rental-api-bayu.fly.dev/api/v1/cars",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          }
        );

        console.log(await response.json());

        setIsSubmitting(false);
        navigate(-1);
      };

      insertCar();
    } catch (e) {
      console.log(e);
    } finally {
      console.log("Proses submit selesai");
    }
  };

  return (
    <>
      {/* Breadcrumbs */}
      <div className="flex space-x-2">
        <span className="font-bold hover:cursor-pointer">Cars</span>
        <img src={rightChevron} alt="" />
        <span
          onClick={() => navigate(-1)}
          className="font-bold hover:cursor-pointer"
        >
          List Car
        </span>
        <img src={rightChevron} alt="" />
        <span className="hover:cursor-pointer">Add New Car</span>
      </div>

      <h1 className="text-2xl font-bold my-3">Add New Car</h1>

      {/* Form */}
      <div className="bg-white rounded-md p-5 shadow-lg h-full">
        <form onSubmit={handleSubmit} className="grid grid-cols-2 space-x-5">
          {/* Left */}
          <div className="space-y-3">
            <Input
              type="text"
              title="Model"
              placeholder="Avanza"
              input={model}
              setInput={setModel}
            />
            <Input
              type="text"
              title="Manufacture"
              placeholder="Toyota"
              input={manufacture}
              setInput={setManufacture}
            />
            <Input
              type="text"
              title="Plate"
              placeholder="B 1010 XX"
              input={plate}
              setInput={setPlate}
            />
            <Select
              title="Transmission"
              options={["Manual", "Automatic"]}
              inputValue={transmission}
              setInput={setTransmission}
            />
            <Input
              type="text"
              title="Type"
              placeholder="SUV"
              input={type}
              setInput={setType}
            />
            <Input
              type="text"
              title="Description"
              placeholder="XM satellite radio receiver -inc: 90 day trial subscription. Dual front illuminated visor vanity mirrors."
              input={description}
              setInput={setDescription}
            />
            <Input
              type="file"
              title="Image"
              placeholder="Image"
              input=""
              setInput={setImage}
            />
            {image !== "" && (
              <div className="border border-slate-300 rounded-sm p-1">
                <img src={image} alt="" />
              </div>
            )}
          </div>

          {/* Right */}
          <div className="space-y-3">
            <Input
              type="number"
              title="Rent Per Day"
              placeholder={100000}
              input={rentPerDay}
              setInput={setRentPerDay}
            />
            <Input
              type="number"
              title="Capacity"
              placeholder={2}
              input={capacity}
              setInput={setCapacity}
            />
            <Input
              type="datetime-local"
              title="Available At"
              placeholder=""
              input={availableAt}
              setInput={setAvailableAt}
            />
            <Input
              type="number"
              title="Year"
              placeholder={2024}
              input={year}
              setInput={setYear}
            />
            <Input
              type="text"
              title="Options"
              placeholder="Separate options by ';'"
              input={options}
              setInput={setOptions}
            />
            <Input
              type="text"
              title="Specs"
              input={specs}
              placeholder="Separate specs by ';'"
              setInput={setSpecs}
            />
            <div className=" flex items-center justify-end space-x-5">
              <p className="">
                Available
                <span className="text-red-500">*</span>
              </p>
              <div className=" basis-1/6">
                <ToggleButton toggle={available} setToggle={setAvailable} />
              </div>
            </div>
          </div>
          <div className="flex space-x-3 mt-3">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="py-1 px-3 bg-white border border-blue-700 text-blue-700 hover:bg-slate-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="py-1 px-3 bg-blue-700 text-white hover:bg-blue-800"
            >
              {isSubmitting ? "Saving..." : "Save"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
