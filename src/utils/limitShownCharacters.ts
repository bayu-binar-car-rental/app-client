export default function limitShownCharacters(text: string, limit: number) {
  return text.slice(0, limit) + "...";
}
