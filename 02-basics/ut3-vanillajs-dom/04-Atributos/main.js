const body = document.querySelector("body");
const div = document.createElement("div");
const a = document.createElement("a");

let arr_attrribute = [
  "default",
  "primary",
  "secondary",
  "success",
  "danger",
  "warning",
  "info",
  "light",
  "dark",
];

body.setAttribute("class", "p-3 m-0 border 0 bd-example");

body.appendChild(div);
div.classList.add("list-group");

for (const text of arr_attrribute) {
    let a2 = a.cloneNode();
  a2.textContent = "A simple " + text + " list group item";
  a2.setAttribute("href", "#");
  text == "default"
    ? a2.classList.add("list-group-item", "list-group-item-action")
    : a2.classList.add("list-group-item", "list-group-item-action","list-group-item-"+text);
  div.appendChild(a2);
}
