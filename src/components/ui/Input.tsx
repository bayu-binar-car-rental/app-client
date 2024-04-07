import { Dispatch, SetStateAction } from "react";

interface IProps {
  type: string;
  title: string;
  placeholder: string | number;
  input: string | number;
  setInput: Dispatch<SetStateAction<string>>;
  setImageLoading?: (state: boolean) => void;
}

export default function Input({
  type,
  title,
  placeholder,
  input,
  setInput,
  setImageLoading,
}: IProps) {
  const handleUploadCover = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files && files.length > 0) {
      try {
        setImageLoading?.(true);
        const formData = new FormData();
        formData.append("image", files[0]);

        const response = await fetch(
          "http://localhost:3000/api/v1/cars/upload",
          {
            method: "POST",
            body: formData,
          }
        );

        const data = await response.json();
        setInput(data.data.secure_url);
      } catch (error) {
        console.log("error > ", error);
      } finally {
        setImageLoading?.(false);
      }
    }
  };

  return (
    <div className="flex justify-between items-center">
      <p>
        {title}
        <span className="text-red-500">*</span>
      </p>
      <input
        className="p-2 basis-3/4 border border-slate-300 focus:outline-none"
        type={type}
        value={input}
        onChange={(e) => {
          if (type !== "file") {
            setInput(e.target.value);
          } else {
            handleUploadCover(e);
          }
        }}
        inputMode="numeric"
        placeholder={placeholder.toString()}
      />
    </div>
  );
}
