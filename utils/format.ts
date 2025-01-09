export const formatCurrency = (amount: number | null) => {
  if (amount === null) {
    return "N/A";
  }
  const value = amount || 0;
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
};
