var ul=document.createElement("ul")

var li=document.createElement("li")
li.innerText="hyderabad"

var li2=document.createElement("li")
li2.innerText="bangalore"

var li3=document.createElement("li")
li3.innerText="chennai"

var li4=document.createElement("li")
li4.innerText="mumbai"

var li5=document.createElement("li")
li5.innerText="delhi"

ul.append(li,li2,li3,li4,li5)

document.body.appendChild(ul)

// task2

var div1=document.createElement("div")
div1.className="div1"

var p=document.createElement("p")
p.innerText="DOM manipulation in JavaScript refers to the ability to dynamically modify the structure, content, and style of a web page using JavaScript code. The DOM (Document Object Model) is a tree-like representation of an HTML document, where each element, attribute, and text node is represented as a node in the tree."

div1.appendChild(p)

document.body.appendChild(div1)

// task3
var div2=document.createElement("div")
div2.className="div2"

var heading=document.createElement("h1")
heading.innerText="JavaScript" 

var p2=document.createElement("p")
p2.innerText="JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc. — you can bet that JavaScript is probably involved. It is the third layer of the layer cake of standard web technologies, two of which (HTML and CSS) we have covered in much more detail in other parts of the Learning Area."

div2.append(heading,p2)

document.body.appendChild(div2)

// task4
var table=document.createElement("table")

var tr=document.createElement("tr")

var td=document.createElement("td")
td.innerText="html"
var td2=document.createElement("td")
td2.innerText="css"
var td3=document.createElement("td")
td3.innerText="javascript"
 
tr.append(td,td2,td3)
table.appendChild(tr)

document.body.appendChild(table)

// task5

var div3=document.createElement("div")
div3.className="div3"

var btn1=document.createElement("button")
btn1.innerText="button1"
var btn2=document.createElement("button")
btn2.innerText="button2"
var btn3=document.createElement("button")
btn3.innerText="button3"
var btn4=document.createElement("button")
btn4.innerText="button4"
var btn5=document.createElement("button")
btn5.innerText="button5"
btn1.addEventListener("click",()=>{
    console.log("sfsdfd")
})

div3.append(btn1,btn2,btn3,btn4,btn5)

document.body.appendChild(div3)



