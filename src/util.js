export const getRandomItem = (item) => Math.floor(Math.random() * (item));

export const getRandomNumber = () => {
  const number = 11;
  return getRandomItem(number);
};
