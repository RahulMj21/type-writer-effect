console.log("hey I am Rahul Mondal");
const headlineEl=document.getElementById("headline");
const speedEl=document.getElementById("speed");

const headlineText="We Love Programming";

let currentIndex=1;
let speed=300/speedEl.value;


typewriter();

function typewriter(){
    headlineEl.innerText=headlineText.slice(0,currentIndex);
    currentIndex++;
    if(currentIndex>headlineText.length){
        currentIndex=1;
    }

    setTimeout(typewriter,speed)
}

speedEl.addEventListener("input",(e)=>speed=300/e.target.value)
console.log(speedEl.value)