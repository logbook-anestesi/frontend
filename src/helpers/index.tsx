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

export const formatMonthYear = (inputString: string) => {
  // Ensure the input string is exactly 6 characters
  if (inputString.length !== 6) {
    throw new Error("Invalid input string. It should be exactly 6 characters.");
  }

  // Extract the month and year from the input string
  const month = inputString.substring(0, 2);
  const year = inputString.substring(2);

  // Convert the month number to a month name
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthName = monthNames[parseInt(month, 10) - 1];

  // Format the result as "Month Year" (e.g., "June 2023")
  const formattedString = `${monthName} ${year}`;

  return formattedString;
};

export const formatDateMonthYear = (date: Date) => {
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};
