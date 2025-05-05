let startquiz=document.querySelector("#startquiz")
let main=document.querySelector(".main")
let head=document.querySelector(".head")
let head1=document.querySelector(".head1")
let notification=document.querySelector(".notifictaionmain")


let form=document.querySelector(".form")
let UserName=document.querySelector("#id")
let input=document.querySelector(".form input")
let formbutton1=document.querySelector(".button1")
let formbutton2=document.querySelector(".button2")
let username;

UserName.addEventListener("click",()=>{

       form.classList.remove("hidden")
     
})
formbutton1.addEventListener("click",()=>{
    username=input.value
    UserName.innerHTML=input.value
    form.classList.add("hidden")
    if(input.value!=""){
        notification.classList.remove("hidden")
        let setinter=setTimeout(()=>{
            notification.classList.add("hidden")
               
              },2000)
    }
    
})
formbutton2.addEventListener("click",()=>{
    form.classList.add("hidden")
})

startquiz.addEventListener("click",()=>{
   
    if(username===input.value){
        main.classList.add("hidden")
        head.classList.add("hidden")
        head1.classList.remove("hidden")
       UserName.innerHTML=username
       
    }else{
        alert("enter user number") 

    }
 
 

})

 