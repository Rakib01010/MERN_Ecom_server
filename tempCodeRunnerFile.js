

var r=false;
const promise= new Promise((req,res)=>{
    console.log(r);
    setTimeout(() => {
        console.log(r);
    }, 1000);
})
promise
      .then((re)=>{
       console.log("this is muy promise is working");
      })
      .catch((rez)=>{
        console.log(rez)
      })