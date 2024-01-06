//Singleton --> constreuctor always create singleton obj -->object.create always used to create singleton obj

//object literal 
//how to acess symbol in keys 

const mysym = Symbol("key1")


const user = {
    name:"arisha chaudhary",
    age:20,
    Profession : "Engineering",
    gender:"female",
    [mysym] : "mykeys"
}
console.log(user.Profession);
console.log(user["Profession"]); //--> Second Method to acess object
console.log(user[mysym])


//change value

user.name = "shifa chaudhary"

console.log(user.name)