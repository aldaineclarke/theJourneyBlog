"use strict;"

// gets the full copyright year
let year = document.querySelector("#year");
year.innerHTML = new Date().getFullYear();
let hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", ()=>{
    let dashboard = document.querySelector(".dashboard__list")
    if(dashboard.classList.contains("active")){
        dashboard.classList.remove("active");
    }else dashboard.classList.add("active");
});
let commentInput = document.querySelector("#comment-input");

commentInput.addEventListener("focus",()=>{
    showElement(document.querySelector(".comment__form .cta"));
});
document.querySelector(".cancel-comment").addEventListener("click",(event)=>{
    hideElement(document.querySelector(".comment__form .cta"));
    event.preventDefault();
})
function showElement(target){
    if(target.classList.contains("hide")){
        target.classList.remove("hide");
    }
}
function hideElement(target){
    if(!target.classList.contains("hide")){
        target.classList.add("hide");
    }
}
