/*

You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.


*/
//P : array of numbers
//R : the max profit of selling stock from day arr[i]
//E: Input: prices = [7,1,5,3,6,4] output 5
//P: condition 1 is that we can't sell before we buy, so Math.max has to come after we buy at index i,
//   condition 2 is that payment price has to be higher than selling price
//   so we can say if indexOf(math.max) < indexOf(math.mix) return 0
//   then find the indexOf(math.min) start a loop there and reassign it to a max value after i, look at next one, if bigger, if loop done we return the max number minus the min

let maxProfit = function (prices) {
  let buy = prices[0];
  let profit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < buy) {
      buy = prices[i];
    } else {
      profit = Math.max(prices[i] - buy, profit);
    }
  }
  return profit;
};

maxProfit([7, 1, 5, 3, 6, 4]);
