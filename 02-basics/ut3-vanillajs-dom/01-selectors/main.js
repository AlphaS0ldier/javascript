console.log(document.getElementById("titulo").textContent);


for(let i=0;i<(document.getElementsByClassName("parrafo")).length;i++){
    console.log(document.getElementsByClassName("parrafo")[i].textContent);
}


console.log(document.getElementsByName("nombre")[0].placeholder);

console.log(document.getElementsByName("apellido")[0].placeholder);



for(let i=0;i<(document.getElementsByTagName("li")).length;i++){
    console.log(document.getElementsByTagName("li")[i].textContent);
}

console.log(document.querySelectorAll("h1")[0].textContent);



for(let i=0;i<(document.querySelectorAll("p")).length;i++){
    console.log(document.querySelectorAll("p")[i].textContent);
}