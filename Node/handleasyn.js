let a = 10;
let b = 20;


let waitingData= new Promise((resolve,reject)=>{
    setTimeout(()=>{
    //   b=30;
      resolve(30)
    },2000) 
})

waitingData.then((data)=>{
    b=data
    console.log(a+b)
})