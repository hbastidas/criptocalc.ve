#!/usr/bin/env node
const CalveCripto = require('../src/index');
const calvecripto = new CalveCripto();



calvecripto.price().then(function(data){
  console.log(data)
})
