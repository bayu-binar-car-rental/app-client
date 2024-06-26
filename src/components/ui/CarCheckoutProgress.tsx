import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

interface IProps {
  progress?: number;
  withBack?: boolean;
}

export default function CarCheckoutProgress({ progress, withBack }: IProps) {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col space-y-2 md:flex-row md:justify-between">
        <div className="flex items-center space-x-2">
          {withBack && (
            <FaArrowLeftLong
              className="text-xl hover:cursor-pointer"
              onClick={() => navigate(-1)}
            />
          )}
          <p className="text-lg font-bold">Pembayaran</p>
        </div>
        <div className="flex space-x-2 items-center justify-center">
          <div className="bg-biru px-[5px] rounded-full text-white text-[12px]">
            1
          </div>
          <p>Pilih Metode</p>
          <div className="border grow border-biru w-10" />
          <div
            className={`px-[5px] rounded-full text-[12px] ${
              progress && progress >= 2
                ? "bg-biru text-white"
                : "border border-biru text-biru"
            }`}
          >
            2
          </div>
          <p>Bayar</p>
          <div className="border grow border-biru w-10" />
          <div
            className={`px-[5px] rounded-full text-[12px] ${
              progress && progress >= 3
                ? "bg-biru text-white"
                : "border border-biru text-biru"
            }`}
          >
            3
          </div>
          <p>Tiket</p>
        </div>
      </div>
    </>
  );
}
