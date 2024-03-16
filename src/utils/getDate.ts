export default function getDate(datetime: string) {
  return new Date(datetime).toLocaleString("en", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
