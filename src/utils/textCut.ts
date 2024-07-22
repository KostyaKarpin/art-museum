export const textCut = (text: string, length: number) => {
  if (text && text.length > length) {
    return text.slice(0, length) + "...";
  }
  return text;
};
