import { CiImageOn } from "react-icons/ci";
import useUploadImage from "../../hooks/useUploadImage";
import { useAppDispatch, useAppSelector } from "../../states/hooks";
import { setIsLoading } from "../../states/slices/loadingSlice";

interface IUploadFileAreaProps {
  image: string;
  uploaded: boolean;
  setImage: (state: string) => void;
}

export default function UploadFileArea({
  image,
  setImage,
  uploaded,
}: IUploadFileAreaProps) {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.loading.isLoading);

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    try {
      dispatch(setIsLoading(true));
      const data = await useUploadImage(files as FileList);
      setImage(data.data.secure_url);
    } catch (e) {
      console.log(e);
    } finally {
      dispatch(setIsLoading(false));
    }
  };

  return (
    <div
      className={`relative flex justify-center items-center h-40 w-full bg-gray-200 border-2 border-dashed border-gray-400 rounded-sm ${
        !uploaded && "hover:cursor-pointer"
      }`}
    >
      <input
        type="file"
        onChange={handleChange}
        disabled={uploaded}
        className="absolute inset-0 w-full h-full opacity-0 z-50 hover:cursor-pointer"
      />
      {isLoading ? (
        <p>Loading...</p>
      ) : image ? (
        <img className="max-h-full" src={image} />
      ) : (
        <CiImageOn className="text-3xl" />
      )}
    </div>
  );
}
