console.log(null > 0)
console.log(null == 0)
console.log(null >= 0)  
// true --> the reason of that an equality check == and comparsion > < <= >= work differently
// comparision convert null to a number , treating it as a 0 thats why (3) null >= 0 true or null > 0 is false.



//strickcheck
console.log(2 == "2")  //:in this it also check the datatype of the data