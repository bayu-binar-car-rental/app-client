import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../../states/hooks";
import { selectLoading } from "../../states/slices/loadingSlice";

import { FaArrowLeftLong } from "react-icons/fa6";
import { IoChevronDownOutline } from "react-icons/io5";

import CarFilter from "../../components/ui/CarFilter";
import convertRupiah from "../../utils/convertRupiah";
import useFetchCar from "../../hooks/cars/useFetchCar";
import Button from "../../components/ui/Button";
import CarSpecs from "../../components/ui/CarCard/CarSpecs";
import { ICar } from "../../types/cars";
import CarImage from "../../components/ui/CarCard/CarImage";

export default function CarDetailPage() {
  const { id } = useParams();
  const { car } = useFetchCar(id as string);
  const [openDropdown, setOpenDropdown] = useState<boolean>(true);

  const navigate = useNavigate();
  const isLoading = useAppSelector(selectLoading);

  return (
    <>
      {/* Filters */}
      <div className="py-28 md:py-32 lg:py-1 "></div>
      <div className="mx-5 space-y-5 lg:mx-20 xl:mx-32 absolute -top-[13rem] right-0 left-0 z-20">
        <div className="flex items-center space-x-2">
          <FaArrowLeftLong
            className="text-xl hover:cursor-pointer"
            onClick={() => navigate(-1)}
          />
          <p className="text-lg font-bold">Detail</p>
        </div>
        <CarFilter title="Detail Pesananmu" />
      </div>

      {/* Content */}
      <div className="md:py-1 grid md:grid-cols-2 gap-6">
        <div>
          <div className="p-4 border rounded-md space-y-3">
            <h3 className="text-lg font-bold">Tentang Paket</h3>
            <p>Include</p>
            <ul className="list-disc ps-8 space-y-2">
              <li>
                Apa saja yang termasuk dalam paket misal durasi max 12 jam
              </li>
              <li>Sudah termasuk bensin selama 12 jam</li>
              <li>Sudah termasuk Tiket Wisata</li>
              <li>Sudah termasuk pajak</li>
            </ul>
            <p>Exclude</p>
            <ul className="list-disc ps-8 space-y-2">
              <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
              <li>
                Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                20.000/jam
              </li>
              <li>Tidak termasuk akomodasi penginapan</li>
            </ul>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold">
                Refund, Reschedule, Overtime
              </h3>
              <IoChevronDownOutline
                className={`translate ease-in-out duration-100 hover:cursor-pointer ${
                  openDropdown && "rotate-180"
                }`}
                onClick={() => setOpenDropdown(!openDropdown)}
              />
            </div>
            {openDropdown && (
              <ul className="list-disc ps-8 space-y-2">
                <li>Tidak termasuk biaya makan makan sopir Rp 75.000/hari</li>
                <li>
                  Jika overtime lebih dari jam 12 jam akan ada tambahan biaya Rp
                  20.000/jam
                </li>
                <li>Tidak termasuk akomodasi penginapan</li>
              </ul>
            )}
          </div>
          <div className="hidden md:flex justify-end mt-4">
            <Button onclick={() => navigate("/checkout", { state: car })}>
              Lanjutkan Pembayaran
            </Button>
          </div>
        </div>
        <div className="border rounded-md h-fit overflow-hidden">
          {isLoading ? (
            <h1>Loading....</h1>
          ) : (
            <>
              <CarImage src={car?.image as string} />
              <div className="p-4 space-y-2">
                <h3 className="font-bold text-lg">
                  {car?.manufacture}/{car?.model}
                </h3>
                <CarSpecs car={{ ...car } as ICar} />
                <div className="flex justify-between pt-10">
                  <p>Total</p>
                  <h3 className="font-bold text-xl">
                    Rp {convertRupiah(car?.rentPerDay as number)}
                  </h3>
                </div>
                <div className="mt-4">
                  <Button
                    fullWidth
                    onclick={() => navigate("/checkout", { state: car })}
                  >
                    Lanjutkan Pembayaran
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
