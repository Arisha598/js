//array-02

const array_one = ["dream" , "morning","night"]
const array_two = ["modern","history","india"]
array_one.push(array_two)
console.log(array_one);

//concatenation
const allheroes = array_one.concat(array_two)
console.log(allheroes);

//SPread
const all_new = [...array_one,...array_two]
console.log(all_new)