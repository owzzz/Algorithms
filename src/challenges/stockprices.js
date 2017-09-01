/*Suppose we could access yesterday's stock prices as an array, where:

  The indices are the time in minutes past trade opening time, which was 9:30am local time.
  The values are the price in dollars of Apple stock at that time.
  So if the stock cost $500 at 10:30am, stockPricesYesterday[60] = 500.

Write an efficient function that takes stockPricesYesterday and returns the best profit I could have made from 1 purchase and 1 sale of 1 Apple stock yesterday.

For example:

  var stockPricesYesterday = [10, 7, 5, 8, 11, 9];

  getMaxProfit(stockPricesYesterday);
  // returns 6 (buying for $5 and selling for $11)

No "shorting"—you must buy before you sell. You may not buy and sell in the same time step (at least 1 minute must pass).
*/

let stockPricesYesterday = [10, 7, 5, 8, 11, 9];

function getMaxProfitV1(stockPrices) {
	let sortedList = stockPrices.sort((a,b) => (b - a));

	console.log(sortedList[0] - sortedList[sortedList.length - 1]);

	return (sortedList[0] - sortedList[sortedList.length - 1]);
}

// Wrong
// You need to buy before you sell and so it needs to be done in a sequence

getMaxProfitV1(stockPricesYesterday);

function getMaxProfitV2(stockPrices) {

	let maxProfit = 0;

	for(var outerTime = 0; outerTime < stockPricesYesterday.length; outerTime++) {
		for(var innerTime = 0; innerTime < stockPricesYesterday.length; innerTime++) {

			let earlierTime = Math.min(innerTime, outerTime);
			let laterTime = Math.max(outerTime, innerTime);

			let earlierPrice = stockPricesYesterday[earlierTime];
			let laterPrice = stockPricesYesterday[laterTime];


			let potentialProfit = (earlierPrice - laterPrice);

			maxProfit = Math.max(maxProfit, potentialProfit);
		}
	}

	return maxProfit;
}

getMaxProfitV2(stockPricesYesterday);

function getMaxProfitV3(stockPrices) {

	let maxProfit = 0;

	for(var outerTime = 0; outerTime < stockPricesYesterday.length; outerTime++) {
		let earlierPrice = stockPricesYesterday[outerTime];

		for(var innerTime = outerTime + 1; innerTime < stockPricesYesterday.length; innerTime++) {
			let laterPrice = stockPricesYesterday[innerTime];

			let potentialProfit = (earlierPrice - laterPrice);

			maxProfit = Math.max(maxProfit, potentialProfit);
		}
	}

	return maxProfit;
}

getMaxProfitV3(stockPricesYesterday);