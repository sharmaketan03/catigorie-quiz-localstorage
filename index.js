let startquiz = document.querySelector("#startquiz");
let main = document.querySelector(".main");
let head = document.querySelector(".head");
let head1 = document.querySelector(".head1");
let notification = document.querySelector(".notifictaionmain");
let main2 = document.querySelector(".main2");
let quizend = document.querySelector(".quizend1");
let  resultscore= document.querySelector(".resultscore");

let form = document.querySelector(".form");
let UserName = document.querySelector("#id");
let input = document.querySelector(".form input");
let formbutton1 = document.querySelector(".button1");
let formbutton2 = document.querySelector(".button2");
let nextbtn = document.querySelector(".nextbtn");
let quitbtn = document.querySelector(".quitbtn");
let username;

let i = 0;
let timer = 5;
let arrayquestions = [];
let correct_answer;
let buttonstocheck;
let score=0;
UserName.addEventListener("click", () => {
  form.classList.remove("hidden");
});
formbutton1.addEventListener("click", () => {
  username = input.value;
  UserName.innerHTML = input.value;
  form.classList.add("hidden");
  if (input.value != "") {
    notification.classList.remove("hidden");
    let setinter = setTimeout(() => {
      notification.classList.add("hidden");
    }, 2000);
  }
});
formbutton2.addEventListener("click", () => {
  form.classList.add("hidden");
});

startquiz.addEventListener("click", () => {
  if (username === input.value) {
    main.classList.add("hidden");
    head.classList.add("hidden");
    main2.classList.remove("hidden");
    head1.classList.remove("hidden");
    UserName.innerHTML = username;
  } else {
    alert("enter user number");
  }
});
let music = document.querySelector(".music");
let modern = document.querySelector(".modern");
let coding = document.querySelector(".coding");
let main2btn = document.querySelector(".main2start");
let main3 = document.querySelector(".main3");
music.addEventListener("click", (e) => {
  console.log(e.target.innerHTML);
  modern.disabled = true;
  coding.disabled = true;
  let API =
    "https://opentdb.com/api.php?amount=5&category=12&difficulty=easy&type=multiple";

  fetchAPI(API);
});
modern.addEventListener("click", (e) => {
  console.log(e.target.innerHTML);
  music.disabled = true;
  coding.disabled = true;
});
coding.addEventListener("click", (e) => {
  console.log(e.target.innerHTML);
  modern.disabled = true;
  music.disabled = true;
});
main2btn.addEventListener("click", () => {
  main2.classList.add("hidden");
  main.classList.add("hidden");
  main3.classList.remove("hidden");
});

let options = document.querySelectorAll(".flex2 p");
let maindiv = document.querySelector(".flex2");
let time = document.querySelector(".timer");

async function fetchAPI(API) {
  const response = await fetch(API);
  console.log(response);
 let  result = await response.json();
  console.log(result.results);
  arrayquestions = result.results;
  getdata(arrayquestions);

  let settime = setInterval(() => {
   

    

    if (timer === 0) {
      i++;
      if (i < arrayquestions.length) {
        //   maindiv.innerHTML=" "
        time.innerHTML = timer;
        timer = 5;
        getdata(arrayquestions);
      } else {
        clearInterval(settime);
        quizend.classList.remove("hidden");
        main3.classList.add("hidden");
       
        resultscore.innerHTML="Your Score"+ " " +score
      }
    } else {
      timer--;
    
      
    }
    time.innerHTML = timer;
   

  }, 1000);

  
}

function getdata(arr) {
  maindiv.innerHTML = " ";

  let div = document.createElement("div");
  //  div.classList.add("buttonsAll")
  div.innerHTML = `
    <h1>${arr[i].question}</h1>
    <button>${arr[i].correct_answer}</button>
    <button>${arr[i].incorrect_answers[0]}</button>
    <button>${arr[i].incorrect_answers[1]}</button>
    <button>${arr[i].incorrect_answers[2]}</button>
  `;
   correct_answer = arr[i].correct_answer
   console.log(correct_answer)
  maindiv.append(div);

  buttonstocheck=document.querySelectorAll(".flex2 button")
  for(let i=0;i<buttonstocheck.length;i++){
    buttonstocheck[i].addEventListener("click",(e)=>{
      if(correct_answer===e.target.innerHTML){
          score+=1
         
      }
     
  })
 
  }
  
}

nextbtn.addEventListener("click", () => {

    if (i < arrayquestions.length-1) {
        i++;
        timer = 5;
        time.innerHTML = timer;
        getdata(arrayquestions);    
  }
});
quitbtn.addEventListener("click", () => {});

