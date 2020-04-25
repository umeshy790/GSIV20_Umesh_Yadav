export const formateDate = (mins: number): string => {
  const hours = Math.round(mins / 60);
  const remainingMins = Math.round(mins % 60);
  return `${hours < 10 ? `0${hours}` : hours}:${
    remainingMins < 10 ? `0${remainingMins}` : remainingMins
  }`;
};
