const readMoreBtn = document.querySelector(".read-more-btn");
const text = document.querySelector(".text");

readMoreBtn.addEventListener("click",(e)=>{
    text.classList.toggle("show-more");
    if(readMoreBtn.innerText === "Mostrar más") {
        readMoreBtn.innerText = "Mostrar menos";
    } else {
        readMoreBtn.innerText = "Mostrar más";
    }
})



