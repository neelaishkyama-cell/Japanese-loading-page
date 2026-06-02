const particles = document.getElementById("particles");

for(let i=0;i<80;i++){

const p=document.createElement("div");

p.classList.add("particle");

let size=Math.random()*6+2;

p.style.width=size+"px";
p.style.height=size+"px";

p.style.left=Math.random()*100+"%";

p.style.animationDuration=
Math.random()*10+5+"s";

p.style.opacity=Math.random();

particles.appendChild(p);
}

document.addEventListener("mousemove",(e)=>{

let x=(window.innerWidth/2-e.pageX)/40;
let y=(window.innerHeight/2-e.pageY)/40;

document.body.style.backgroundPosition=
`${50+x}% ${50+y}%`;

});
