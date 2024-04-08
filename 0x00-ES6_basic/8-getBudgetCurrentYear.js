export default function getBudgetForCurrentYear(income, gdp, capita) {
  const getCurrentYear = () => (new Date()).getFullYear();

  return {
    [`income-${getCurrentYear()}`]: income,
    [`gdp-${getCurrentYear()}`]: gdp,
    [`capita-${getCurrentYear()}`]: capita,
  };
}

