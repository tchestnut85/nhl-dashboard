export default function getImageUrl(id, base, textToReplace) {
  const url = base.replace(textToReplace, String(id));
  return url;
}
