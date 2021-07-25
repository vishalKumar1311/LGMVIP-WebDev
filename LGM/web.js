const prev=document.getElementById("prev");
const next=document.getElementById("next");
const i1=document.getElementById("1");
const i2=document.getElementById("2");
const i3=document.getElementById("3");
const mi=document.getElementById("mi");
const menu=document.querySelectorAll(".menu-div");

const head=document.querySelector(".header");
const navshow=document.querySelector(".nav");
const navbtn=document.querySelector(".menu-nav");
navbtn.addEventListener("click",function(){
  navshow.classList.toggle("hide-nav");
  head.classList.toggle("index");
})

const mypictures=['./images/hfood.png','./images/food2.png','./images/food7.png',];
const image=document.getElementById("intro-image");
setInterval(function(){
  let ran=Math.floor(Math.random()*mypictures.length);
  image.src= mypictures[ran];
},4000);



next.addEventListener("click",function(e){
  for(let i=0;i<menu.length;i++)
  {
    menu[i].classList.add("slide2");
    menu[i].classList.remove("slide");  
  } 
});

prev.addEventListener("click",function(e){
  for(let i=0;i<menu.length;i++)
  {
    menu[i].classList.add("slide");
    menu[i].classList.remove("slide2");
  
  } 
});



i1.addEventListener("click",function(){
  mi.src="./images/food/rp.jpg";
});
i2.addEventListener("click",function(){
  mi.src="./images/food/rp2.jpg";
});
i3.addEventListener("click",function(){
  mi.src="./images/food/rp.jpg";
});