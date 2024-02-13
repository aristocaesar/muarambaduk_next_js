const monthNamesIndonesian = [
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

const DateWFormat = (time: string) => {
  const current = new Date(time);
  const date = current.getDate().toString().padStart(2, '0');
  const month = monthNamesIndonesian[current.getMonth()];
  const year = current.getFullYear();
  return `${date} ${month} ${year}`;
};

export default DateWFormat;
