function getRandomPercentage() {
  return `${(Math.random() * 100).toFixed(2)}%`;
}

const func = () => {
  // Refactor this to be its own function
  const randomPercentage = getRandomPercentage();
  console.log(randomPercentage);
};
