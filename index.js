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
let getresult = document.querySelector(".endbtn1");
let resultscorepara = document.querySelector(".resultscore");
let playagain = document.querySelector(".endbtn2");
let Quitbtn= document.querySelector(".endbtn3");
let selectedlist= document.querySelectorAll("#headli li");
let username;

let i = 0;
let timer = 5;
let selectedvalue;
let arrayquestions = [];
let correct_answer;
let buttonstocheck;
let score=0;
let fourtype;
let incl=[]
let randomtypes=[]
let value;
let localarray=[]
let api=[ "https://opentdb.com/api.php?amount=5&category=12&difficulty=easy&type=multiple","https://opentdb.com/api.php?amount=4&category=23&difficulty=easy&type=multiple","https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple"]
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
let choosebtn = document.querySelectorAll(".choosebutton p");
let main2btn = document.querySelector(".main2start");
let main3 = document.querySelector(".main3");
callback()
function callback(){
for(let j=0;j<choosebtn.length;j++){
    choosebtn[j].addEventListener("click",(e)=>{
         value=j
    
    })
}
}

// localarray.append(obj)
playagain.addEventListener("click",()=>{
  i = 0;
 timer = 5;
 score=0
  main2.classList.add("hidden")
    main3.classList.remove("hidden")
    main.classList.add("hidden")
    head.classList.add("hidden")
    quizend.classList.add("hidden")

    fetchAPI(api[value])
  
})
let obj={
  Name:coding,
  Date:new Date().toLocaleString(),
  score:0
}

main2btn.addEventListener("click", () => {
  if(value!=""){
    
 
 
  }else{
    main2.classList.add("hidden");
    main.classList.add("hidden");
  
    main3.classList.remove("hidden");
    maindiv.classList.remove()
    fetchAPI(api[value]);
  
  }

  
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
      
        time.innerHTML = timer;
        timer = 5;
        getdata(arrayquestions);
      } else {
        clearInterval(settime);
        quizend.classList.remove("hidden");
        main3.classList.add("hidden");

       
        resultscore.innerHTML=`Your Score ${score} out of ${arrayquestions.length}`
       
        console.log(score)
        
      localarray.push(obj)
      localStorage.setItem("localarray",JSON.stringify(localarray))
      console.log(localarray)
      // localStorage.clear()
      }
    } else {
      timer--;
    
      
    }
    time.innerHTML = timer;
   

  }, 1000);

  quitbutton(settime)
  Quitbutton(settime)
 

}

function Quitbutton(settime){
  Quitbtn.addEventListener("click", () => {
    i = 0;
     timer = 5;
    main2.classList.remove("hidden")
    main3.classList.add("hidden")
    main.classList.add("hidden")
    head.classList.add("hidden")

   clearInterval(settime)  
});
}
function quitbutton(settime){
  quitbtn.addEventListener("click", () => {
    i = 0;
    timer = 5;
    main2.classList.remove("hidden")
    main3.classList.add("hidden")
    main.classList.add("hidden")
    head.classList.add("hidden")

   clearInterval(settime)  
});
}
let questions=document.querySelector(".questions")
let optins=document.querySelector(".opt")
function getdata(arr) {
  
 fourtype=[...arr[i].incorrect_answers,arr[i].correct_answer]
 fourtype.sort(()=>Math.random()-0.5)
  

  questions.innerHTML = `
    <h1>${arr[i].question}</h1>
    
  `
  optins.innerHTML=fourtype.map((opt)=>`
  <button>${opt}</button>
  `).join("")
 
   correct_answer = arr[i].correct_answer
   console.log(correct_answer)
  

  buttonstocheck=document.querySelectorAll(".flex2 button")
  for(let i=0;i<buttonstocheck.length;i++){
    buttonstocheck[i].addEventListener("click",(e)=>{
      if(correct_answer===e.target.innerHTML){
          score+=1
          obj.score=score
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
getresult.addEventListener("click",()=>{
  resultscorepara.classList.remove("hidden")
})

selectedlist.forEach((Element,index)=>{
  selectedlist[index].addEventListener("click",()=>{
            if(selectedlist[index].innerHTML===selectedlist[0].innerHTML){
                    window.location.reload()
            }else if(selectedlist[index].innerHTML===selectedlist[1].innerHTML){
              i = 0;
              timer = 5;
             main2.classList.remove("hidden")
             main3.classList.add("hidden")
             main.classList.add("hidden")
             head.classList.add("hidden")
         
            // clearInterval(settime)  
            }else if(selectedlist[index].innerHTML===selectedlist[2].innerHTML){
                       
            }
  })
})