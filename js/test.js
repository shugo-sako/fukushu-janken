//

// 画像をランダムに表示させたい。↓
//var startBtn =document.querySelector(".match_start")
// document.querySelector(".options").onclick=function(){
//     var random = Math.random()*3;
//     console.log(random);
//     if(random==0){
//     console.log("グー");
//     }else if(random==1){
//         console.log("パー");
//     }else if(random==2){
//         console.log("チョキ");
//     }

     £
// 0=グー、1＝パー、2＝チョキ

let num = $("#myscore");

let myGooBtn = document.querySelector(".rock");
myGooBtn.onclick = function(){
    const random = Math.floor(Math.random()*3);
    console.log(random);
    
  

if(random==0){
   console.log("あいこ");
    $("#result").html("あいこ");
    $("#computerhands").html(`<img src="https://www.silhouette-illust.com/wp-content/uploads/2016/11/17433-300x300.jpg" alt="">`);

 }else if(random==1){
    console.log("負け");
    var lose = 0;
    lose++;
    $("#comscore").text(lose);
  $("#result").html("負け");
  $("#computerhands").html(`<img src="https://www.silhouette-illust.com/wp-content/uploads/2016/11/17435-300x300.jpg" alt="">`);
 
 }else if(random==2){
    console.log("勝ち");
    
   $("#result").html("勝ち");
   $("#computerhands").html(`<img src="https://www.silhouette-illust.com/wp-content/uploads/2016/11/17434-300x300.jpg" alt="">`);
   num++;
   

 }
 }

let myChokiBtn = document.querySelector(".scissors");
myChokiBtn.onclick = function(){
    const random = Math.floor(Math.random()*3);

    if(random==0){
        console.log("負け");
        $("#result").html("負け");
        $("#computerhands").html(`<img src="https://www.silhouette-illust.com/wp-content/uploads/2016/11/17433-300x300.jpg" alt="">`);
    }else if(random==1){
        console.log("勝ち");
        $("#result").html("勝ち");
        $("#computerhands").html(`<img src="https://www.silhouette-illust.com/wp-content/uploads/2016/11/17435-300x300.jpg" alt="">`);
        var win = 0;
		win++;
		$("#myscore").text(win);
    }else if(random==2){
        console.log("あいこ");
        $("#result").html("あいこ");
        $("#computerhands").html(`<img src="https://www.silhouette-illust.com/wp-content/uploads/2016/11/17434-300x300.jpg" alt="">`);

    }
    }

let myPaaBtn = document.querySelector(".paper");
myPaaBtn.onclick = function(){
    const random = Math.floor(Math.random()*3);
    if(random==0){
        console.log("勝ち");
        $("#result").html("勝ち");
        $("#computerhands").html(`<img src="https://www.silhouette-illust.com/wp-content/uploads/2016/11/17433-300x300.jpg" alt="">`);
        var win = 0;
		win++;
		$("#myscore").text(win);
    }else if(random==1){
        console.log("あいこ");
        $("#result").html("あいこ");
        $("#computerhands").html(`<img src="https://www.silhouette-illust.com/wp-content/uploads/2016/11/17435-300x300.jpg" alt="">`);
    }else if(random==2){
        console.log("負け");
        $("#result").html("負け");
        $("#computerhands").html(`<img src="https://www.silhouette-illust.com/wp-content/uploads/2016/11/17434-300x300.jpg" alt="">`);
    }
    }
 

    


