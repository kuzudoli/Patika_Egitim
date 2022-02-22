const visitorName=prompt("Adınız");
let date;

var containerDOM = document.getElementById("container");

//Name header tag creating
var nameHeader = document.createElement("div");
nameHeader.classList.add("textCenter");
nameHeader.textContent = `Merhaba ${visitorName.toUpperCase()}, Hoşgeldin!`;
containerDOM.appendChild(nameHeader);//adding

//Time tag creating
var timeTag = document.createElement("div");
timeTag.classList.add("textCenter");
containerDOM.appendChild(timeTag)
setInterval(()=>{
    date = new Date();
    timeTag.textContent = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} - ${date.toLocaleDateString("tr-tr", {weekday:"long"})}`;
},1000)

//Message tag creating
var msgTag = document.createElement("div");
msgTag.classList.add("textCenter");
msgTag.innerHTML = `Bu sayfa <span class="newColor">Patika</span> kapsamında Javascript alıştırması olarak yapılmıştır.`;
msgTag.style.fontSize = "25px";
msgTag.style.marginTop = "40px";
containerDOM.appendChild(msgTag);

