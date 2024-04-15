export default async function useUploadImage(files: FileList) {
  try {
    const formData = new FormData();
    formData.append("image", files[0]);

    const response = await fetch("http://localhost:3000/api/v1/cars/upload", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}
