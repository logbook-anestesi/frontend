export const getCurrentMonth = (): string => {
  const date = new Date();
  const options: Intl.DateTimeFormatOptions = {
    month: "long",
    year: "numeric",
  };
  return date.toLocaleString("id-ID", options);
};

export const getMonthYearString = (): string => {
  const date = new Date();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = String(date.getFullYear());

  const monthYearString = month + year;

  return monthYearString;
};
