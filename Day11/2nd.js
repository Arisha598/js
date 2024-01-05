//when array contain an another array itself

let another_array = [1,2,3,[4,5],[7,8,9,[12,34]]]
let new_another_array = another_array.flat(Infinity)
console.log(new_another_array); 


//conversion string into array

console.log(Array.from("arisha caudhary"))
console.log (Array.from({name:"arisha chaudhary"})) //-->intresting Topic it give an empty array

//conversion of array

let score1 = 100
let score2 =200
let score3 = 300 

console.log(Array.of(score1,score2,score3))