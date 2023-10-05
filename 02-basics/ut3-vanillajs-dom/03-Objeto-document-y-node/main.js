const br =document.createElement("br");

const div = document.createElement("div");
document.body.appendChild(div);

const h1 = document.createElement("h1");
h1.textContent="The input min and max attributes";

const p= document.createElement("p");
p.textContent="The min and max attributes specify the minimum and maximum values for an input element";

const form = document.createElement("form");
form.setAttribute("action","/action_page.php");

const label1= document.createElement("label");
label1.textContent="Enter date before 1980-01-01";
label1.setAttribute("for","datemax");

const  input1= document.createElement("input");
input1.setAttribute("type","date");
input1.setAttribute("id","datemax");
input1.setAttribute("name","datemax");
input1.setAttribute("max","1979-12-31");

const label2= document.createElement("label");
label2.textContent="Enter date before 2000-01-01";
label2.setAttribute("for","datemin");

const  input2= document.createElement("input");
input2.setAttribute("type","date");
input2.setAttribute("id","datemin");
input2.setAttribute("name","datemin");
input2.setAttribute("min","2000-01-02");

const label3= document.createElement("label");
label3.textContent="Quantity (between 1 and 5)";
label3.setAttribute("for","quantity");

const  input3= document.createElement("input");
input3.setAttribute("type","number");
input3.setAttribute("id","quantity");
input3.setAttribute("min","1");
input3.setAttribute("max","5");

const  input4= document.createElement("input");
input4.setAttribute("type","submit");
input4.setAttribute("value","Submit");

div.append(h1,br,p,br.cloneNode(),form);
form.append(label1,input1,br.cloneNode(),br.cloneNode(),label2,input2,br.cloneNode(),br.cloneNode(),label3,input3,br.cloneNode(),br.cloneNode(),input4);
