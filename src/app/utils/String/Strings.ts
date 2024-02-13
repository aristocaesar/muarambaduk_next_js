export const Ucword = (value: string): string =>
  value
    .toLowerCase()
    .split(' ')
    .map((val) => val[0].toLocaleUpperCase() + val.slice(1).toString())
    .toString()
    .replace(/-/g, ' ');
