console.log("start "+ new Date().getTime());
console.log("start1 "+ new Date().getTime());
console.log("start2 "+ new Date().getTime());
setTimeout(() => {
  console.log("time out"+ new Date().getTime());
}, 0);
let startTime = new Date().getTime();
let endTime = startTime;
while(endTime < startTime+5000){
    endTime = new Date().getTime();
}
console.log('end'+ new Date().getTime());