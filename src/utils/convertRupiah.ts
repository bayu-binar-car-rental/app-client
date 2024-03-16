export default function convertRupiah(price: number) {
  return new Intl.NumberFormat("en-DE").format(price);
}
