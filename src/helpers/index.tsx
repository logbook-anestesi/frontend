export const getCurrentMonth = (): string => {
  const date = new Date();
  const options: Intl.DateTimeFormatOptions = {
    month: 'long',
    year: 'numeric',
  };
  return date.toLocaleString('id-ID', options);
};

export const getMonthYearString = (): string => {
  const date = new Date();
  const month = String(date.getUTCMonth() + 1).padStart(2, '0');
  const year = String(date.getFullYear());

  const monthYearString = month + year;

  return monthYearString;
};

export const formatMonthYear = (inputString: string) => {
  // Ensure the input string is exactly 6 characters
  if (inputString.length !== 6) {
    throw new Error('Invalid input string. It should be exactly 6 characters.');
  }

  // Extract the month and year from the input string
  const month = inputString.substring(0, 2);
  const year = inputString.substring(2);

  // Convert the month number to a month name
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const monthName = monthNames[parseInt(month, 10) - 1];

  // Format the result as "Month Year" (e.g., "June 2023")
  const formattedString = `${monthName} ${year}`;

  return formattedString;
};

export const formatDateMonthYear = (date: Date) => {
  return date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
};

export const convertDateForNotification = (dateString: string) => {
  const date = new Date(dateString);
  const day = String(date.getUTCDate()).padStart(2, '0');
  const month = String(date.getUTCMonth() + 1).padStart(2, '0');
  const hours = String(date.getUTCHours()).padStart(2, '0');
  const minutes = String(date.getUTCMinutes()).padStart(2, '0');

  return `${day}/${month} ${hours}:${minutes}`;
};

export const convertDateForIlmiah = (dateString: string) => {
  const date = new Date(dateString);
  const day = String(date.getUTCDate()).padStart(2, '0');
  const month = String(date.getUTCMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  const hours = String(date.getUTCHours()).padStart(2, '0');
  const minutes = String(date.getUTCMinutes()).padStart(2, '0');

  return `${day}/${month}/${year} ${hours}:${minutes}`;
};

export const convertDateForExam = (dateString: string) => {
  const date = new Date(dateString);
  const day = String(date.getUTCDate()).padStart(2, '0');
  const month = String(date.getUTCMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
};

export const bytesToMb = (bytes: number) => {
  const megabytes = bytes / (1024 * 1024);
  return megabytes.toFixed(2);
};

export const capitalizeFirstLetter = (inputString: string) => {
  if (inputString.length > 0) {
    return (
      inputString.charAt(0).toUpperCase() + inputString.slice(1).toLowerCase()
    );
  } else {
    return '';
  }
};

export const convertUnderscoresToSpaces = (inputText: string) => {
  return inputText
    .toLowerCase()
    .split('_')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

export const convertDateFormatIndonesia = (inputDate: string): string => {
  const indonesianMonths = [
    '',
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ];

  // Splitting the input date
  const splitDateTime = inputDate.split('T')[0].split('-');

  // Extracting day, month, and year
  const day = parseInt(splitDateTime[2]);
  const month = parseInt(splitDateTime[1]);
  const year = parseInt(splitDateTime[0]);

  // Formatted date
  return `${day} ${indonesianMonths[month]} ${year}`;
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    return false;
  }

  return true;
};
