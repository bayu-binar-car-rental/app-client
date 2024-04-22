export default function CarImage({ src }: { src: string }) {
  return (
    <div className="flex justify-center h-40 bg-gray-500">
      <img className="max-w-full" src={src} alt="" />
    </div>
  );
}
