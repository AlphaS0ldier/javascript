const arr_botones =document.body.querySelectorAll("button");

arr_botones[0].addEventListener("click",()=>alert("Click Event"));
arr_botones[1].addEventListener("mouseenter",()=>alert("Mouse Enter event"));
arr_botones[2].addEventListener("mouseup",()=>alert("Mouse Up event"));
arr_botones[3].addEventListener("mouseleave",()=>alert("Mouse Leave event"));

function cambiarColorBoton(clase){
const boton = arr_botones[4];
boton.setAttribute("class",clase)
}

arr_botones[4].addEventListener("mouseenter",()=>cambiarColorBoton("btn btn-danger"));
arr_botones[4].addEventListener("mouseleave",()=>cambiarColorBoton("btn btn-warning"));


function cambiarColorFondo(color){
    document.body.style.backgroundColor=color;
}

arr_botones[5].addEventListener("click",()=>cambiarColorFondo("red"));

arr_botones[6].addEventListener("click",()=>cambiarColorFondo("white"));


function cambiarColorTodosBotones(){
        arr_botones.forEach((boton) => boton.setAttribute("class","btn btn-dark"));
    }

arr_botones[7].addEventListener("click",()=>cambiarColorTodosBotones());
