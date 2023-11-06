import { createModal } from "./createModal.js";

let img = document.createElement("img");
let modal = document.createElement("div");

createModal(img,modal);

img.addEventListener("mouseover",()=>{
    modal.style.display = "flex";
})

window.addEventListener("click",(e)=>{
    if (e.target==modal) {
        modal.style.display = "none";
      }
})

