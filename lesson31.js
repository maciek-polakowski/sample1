
angular.module('finance2', []) .factory('currencyConverter', 
  function() { 
    var currencies = ['USD', 'EUR', 'CNY']; 
    var usdToForeignRates = { USD: 1, EUR: 0.74, CNY: 6.09 }; 
    var convert = function (amount, inCurr, outCurr) { 
	  var res = amount * usdToForeignRates[outCurr] / usdToForeignRates[inCurr];
	  console.log( "Amt = " +amount + " inCurr = " + inCurr + " outCurr = " + outCurr + " res = " + res);
      return  res;
    }; 
    return { currencies: currencies, convert: convert}; 
 });


angular.module('invoice2', ['finance2'])
  .controller('InvoiceController', ['currencyConverter', 
     function(currencyConverter) { 
       this.qty = 1; 
	   this.cost = 2; 
	   this.inCurr = 'EUR'; 
       this.currencies = currencyConverter.currencies; 
       this.total = function total(outCurr) { 
         return currencyConverter.convert(this.qty * this.cost, this.inCurr.trim(), outCurr.trim()); 
       }; 
       this.pay = function pay() { window.alert("Thanks 33!"); }; 
} ]);


