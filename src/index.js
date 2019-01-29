const CoinGecko = require('coingecko-api');

const CoinGeckoClient = new CoinGecko();


function CalveCripto(){
  this.currenciesdata=
  ["aed","ars","aud","bch","bdt","bhd","bmd","bnb",
  "brl","btc","cad","chf","clp","cny","czk","dkk",
  "eos","eth","eur","gbp","hkd","huf","idr","ils",
  "inr","jpy","krw","kwd","lkr","ltc","mmk","mxn",
  "myr","nok","nzd","php","pkr","pln","rub","sar",
  "sek","sgd","thb","try","twd","usd","vef","xag",
  "xau","xdr","xlm","xrp","zar"]
  this.symbols=['lkr-coin','arepacoin','bolivarcoin','onix','rilcoin']
}




CalveCripto.prototype.price= async function (){
  const self = this
  let data = await CoinGeckoClient.simple.price({
      ids: self.symbols,
      vs_currencies: self.currenciesdata,
  });
  return data.data
};



module.exports = CalveCripto;
