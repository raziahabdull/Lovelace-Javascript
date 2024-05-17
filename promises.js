const internship = false;
const ourPromise = new Promise((resolve, reject)=>{
    if (internship){
        resolve('I made it');
    }else{
        reject('pray for me')
    }
    
})
ourPromise.then(() =>{
    console.log('I will continue applying for jobs');
})
.finally(() =>{
    console.log("I will still be successful");
});
console.log({ourPromise});
try{
    await ourPromise;
    console.log('my successful wish');

}
catch{
    console.log('my wish is not successful');
}


successfulWish();