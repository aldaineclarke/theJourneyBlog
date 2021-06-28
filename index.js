"use strict;"

// gets the full copyright year
let year = document.querySelector("#year");
year.innerHTML = new Date().getFullYear();

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
