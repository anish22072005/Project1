   /*let para1=document.createElement("p");
   para1.innerText="Hey I am red!";
   document.querySelector("body").append(para1);
   para1.classList.add("red");

   let h3=document.createElement("h3");
   h3.innerText="Hey I am blue!";
   document.querySelector("body").append(h3);
   h3.classList.add("blue");

   let div=document.createElement("div");
   let h1=document.createElement("h1");
   let para2=document.createElement("p");
   h1.innerText="I am in a div!";
   para2.innerText="ME TOO!";
   div.append(h1);
   div.append(para2);
   div.classList.add("box");
   document.querySelector("body").append(div);*/


  /*let btn=document.querySelector("button");
  btn.addEventListener("click", function(){
    let h2=document.querySelector("h2");
    let randomColors=getRandomColors();
    h2.innerText=randomColors;
    let div=document.querySelector("div");
    div.style.background=randomColors;
    console.log("The color is updated!");
    
  })
  function getRandomColors(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*256);
    let blue=Math.floor(Math.random()*256);
    let color=`rgb(${red}, ${green}, ${blue})`;
    return color;
  }*/


 /*let inp=document.querySelector("input");
 let btn=document.querySelector("button");
 let ul=document.querySelector("ul");
 btn.addEventListener("click", function(){
  let item=document.createElement("li");
  item.innerText=inp.value;
  let delBtn=document.createElement("button");
  delBtn.innerText="Remove your task";
  delBtn.classList.add("delete");
  item.append(delBtn);
  ul.append(item);
  console.log(inp.value);
  inp.value="";
 })
 ul.addEventListener("click", function(event){

  if(event.target.nodeName=="BUTTON"){
    let listItem=event.target.parentElement;
    listItem.remove();
    console.log("deleted");
  }

});*/

let gameSeq=[];
let userSeq=[];
let btns=["red", "purple", "green","yellow"];
let started=false;
let level=0;
let p=document.querySelector("p");
document.addEventListener("keypress", function(){
  if(started==false){
    console.log("game started");
    started=true;

    levelUp();
  }
});
function gameFlash(btn){
  btn.classList.add("flash");
  setTimeout(function(){
    btn.classList.remove("flash");
  },250);
}
function userFlash(btn){
  btn.classList.add("userflash");
  setTimeout(function(){
    btn.classList.remove("userflash");
  },250);
}

function levelUp(){
  userSeq=[];
  level++;
  p.innerText=`level ${level}`;
  let randIdx=Math.floor(Math.random()*4);
  let randColors=btns[randIdx];
  let randBtn=document.querySelector(`.${randColors}`);
  gameSeq.push(randColors);
  console.log(gameSeq);
  gameFlash(randBtn);
};
function checkAns(idx){
  //console.log("curr level :", level);
  
  if(userSeq[idx]==gameSeq[idx]){
    if(userSeq.length==gameSeq.length){
      setTimeout(levelUp, 250);
    }

  }else{
    p.innerHTML=`Game Over,Your score was <b>${level}</b><br> Press any key to restart`;
    document.querySelector("body").style.backgroundcolor="red";
    setTimeout(function(){
      document.querySelector("body").style.backgroundcolor="white";
    }, 150);
    reset();
  }
}

function btnPress(){
  let btn=this;
  userFlash(btn);
  userColor=btn.getAttribute("id");
  userSeq.push(userColor);
  checkAns(userSeq.length-1);
}
let allBtns=document.querySelectorAll(".btn");
for( btn of allBtns){
  btn.addEventListener("click", btnPress);

}
function reset(){
  started=false;
  gameSeq=[];
  userSeq=[];
  level=0; 
};











