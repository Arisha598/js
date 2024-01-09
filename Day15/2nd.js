//Promises
new ans=new Promise((res,rej)=>{
    if(true){
        return res;
    }
    else{ 
        return rej;
    }
})
ans
.then(function(){
    console.log("resolve hogaya no tension");
})
.catch(function(){
    console.log("reject hogaya tension occured");
})