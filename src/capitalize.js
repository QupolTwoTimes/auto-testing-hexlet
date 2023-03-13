import readlineSync from 'readline-sync';

const capitalize = () => {
  const text = readlineSync.question();
  if (text === '') {
    return '';
  }
  const firstChar = text[0].toUpperCase();
  const restSubstring = text.slice(1);
  return `${firstChar}${restSubstring}`;
};
export default capitalize;

console.log(capitalize());
