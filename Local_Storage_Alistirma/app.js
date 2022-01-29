const form = document.querySelector("form");
const ul = document.querySelector("ul");
const button = document.querySelector("button");
const input = document.getElementById("item");
//localStorage'da items key'i mevcutsa altındaki değerler getiriliyor.
let itemsArray = localStorage.getItem("items") ? 
JSON.parse(localStorage.getItem("items")) : [];

//veri JSON formatından dizi tipine dönüştürülüyor
const data = JSON.parse(localStorage.getItem("items"));

const liMaker = (text) =>{
    const li = document.createElement("li");
    li.textContent = text;
    ul.appendChild(li);
}

//Ekle
form.addEventListener("submit", function(e){
    e.preventDefault();

    itemsArray.push(input.value);//Girilen veri diziye ekleniyor
    localStorage.setItem("items",JSON.stringify(itemsArray));//dizi tekrar localStorage a gönderiliyor
    liMaker(input.value);//Veriye ait liste elemanı oluşturuluyor
    input.value = "";
});

//Varsa veriler yükleniyor
localStorage.length !=0 ? data.forEach(item => {
    liMaker(item);
}) : []

//Temizle
button.addEventListener("click", function(){
    localStorage.clear();
    while(ul.firstChild){
        ul.removeChild(ul.firstChild);
    }
    itemsArray = [];
});