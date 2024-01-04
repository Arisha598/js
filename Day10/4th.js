//Slice ans Splice

let myarray= [12,3,5,6,7,8,9]
console.log("A ", myarray)


//slice
const myn1 = myarray.slice(1,3)
console.log(myn1)
console.log("B ", myarray);

//splice
const myn2 = myarray.splice(1,3)
console.log("C ", myarray);
console.log(myn2)

/*
slice can't manipulate the original array but 
splice can maniulate the original array */
