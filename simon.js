let start=false;
let h4=document.querySelector('h2');
let h1=document.querySelector('h1');
 let level=0;
 let user=[];
 let game=[];
 let arrofcolor=["red","green","blue","orange"];

 document.addEventListener("keypress",function(){
    if(start==false){
        start=true;
        levelup();
    }
 })

 function btnflash(btn){
  
    btn.classList.add('flash');
    setTimeout(function(){
        btn.classList.remove('flash');
    },250);
 }

 function levelup(){
    user=[];
    level++;
   
    h4.innerText=`level ${level}`;
   let index=Math.floor(Math.random()*4);
   let  randcolor=arrofcolor[index];
   game.push(randcolor);
   console.log(game);
   let randbtn=document.querySelector(`.${randcolor}`);
    btnflash(randbtn);
 }
 function checkans(index){
  
    if(user[index]===game[index]){
    if(user.length==game.length){
        setTimeout(levelup,1000);
    }
    }else{
        h4.innerHTML=`Game Over !<b>Your score was ${level}</b> <br>
        press any key to start`;
        reset();
    }
   
 }
 function btnpress(){
    let btn=this;
    btnflash(btn)
    let randcolor=btn.getAttribute("id");
    user.push(randcolor);
    checkans(user.length-1);
 }
 let btns=document.querySelectorAll('button');
 for(let btn of btns){
    btn.addEventListener("click",btnpress);
 }
 function reset(){
    start=false;
    user=[];
    game=[];
    level=0;
 }
 let body=document.querySelector('body');
 body.style.backgroundImage="url(https://images.unsplash.com/photo-1487088678257-3a541e6e3922?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z2FtZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D)";

 h4.style.color="white";
 setInterval(()=>{
   let index=Math.floor(Math.random()*4);
    h1.style.color=`${arrofcolor[index]}`;
 },1000);