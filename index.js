const containerEl = document.querySelector(".container");

const btnEl = document.querySelector(".btn");

const popupcontainerEl = document.querySelector(".popup-container");

const closeIconEl = document.querySelector(".close-icon");

btnEl.addEventListener("click", ()=>{
    containerEl.classList.add("active");
    popupcontainerEl.classList.remove("active");
})

closeIconEl.addEventListener("click",()=>{
    containerEl.classList.remove("active");
    popupcontainerEl.classList.add("active");
})