var maximumWealth = function (accounts) {
  // accounts = arr of arrs
  // max of the sum of arr
  return Math.max(
    accounts.map((account) => account.reduce((acc, curr) => acc + curr, 0))
  );
};
