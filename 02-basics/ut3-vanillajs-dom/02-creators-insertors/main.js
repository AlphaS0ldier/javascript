
const image =document.createElement("img");

image.setAttribute("src","./img/img_la.jpg");

const header = document.createElement("h1");
header.textContent="This is a Heading";

const paragraph1 =document.createElement("p");
paragraph1.textContent="This is a paragraph";

const paragraph2 =document.createElement("p");
paragraph2.textContent="This is another paragraph";


document.body.appendChild(image);
document.body.appendChild(header);
document.body.appendChild(paragraph1);
document.body.appendChild(paragraph2);