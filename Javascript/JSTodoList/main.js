const form = document.querySelector("form");
const ul = document.querySelector("ul");
const input = document.getElementById("item");
const closeButton = document.getElementById("close");
let itemIndex=0;

let itemsArray = localStorage.getItem("listItems") ? 
JSON.parse(localStorage.getItem("listItems")) : [];

const data = JSON.parse(localStorage.getItem("listItems"));

const itemMaker = (text) =>{
    const li = document.createElement("li");
    li.className = "listItem";
    li.id = `${itemIndex}`;
    li.textContent = text;
    li.innerHTML = `${text}<a href="#" id="close" onclick="deleteItem(${itemIndex})">&times;</a>`
    itemIndex++;

    li.addEventListener("click",(e)=>{
        li.style.backgroundColor="lightgreen";
        li.style.textDecoration="line-through";
    });

    li.addEventListener("dblclick",(e)=>{
        li.style.backgroundColor="#f1f1f1";
        li.style.textDecoration="none";
    });

    ul.appendChild(li);
}

form.addEventListener("submit", function(e){
    e.preventDefault();

    itemsArray.push(input.value);
    localStorage.setItem("listItems",JSON.stringify(itemsArray));
    itemMaker(input.value);
    input.value = "";
});

const deleteItem = (index) =>{
    let listItems = JSON.parse(localStorage.getItem("listItems"));
    listItems.splice(index,1);
    localStorage.setItem("listItems",JSON.stringify(listItems));
    location.reload();
}

localStorage.length !=0 ? data.forEach(item => {
    itemMaker(item);
}) : [];