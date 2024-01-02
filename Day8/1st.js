//Number in Maths

const score = 400
console.log(score);

const newscore = new Number(1200)
console.log(newscore)

//conversion
console.log(newscore.toString())
console.log(newscore.toFixed(4)) //1200.000


//Precision
const balance = 123.987
console.log(balance.toPrecision(4))

const newbalance = 1000000000000000
console.log(newbalance.toLocaleString())  //--> us eto find the no of zeroes    