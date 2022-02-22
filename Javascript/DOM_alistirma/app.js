document.getElementById("tikla").addEventListener("click",tikla);
document.getElementById("urunEkle").addEventListener("click",urunEkle);
var liste = document.getElementsByTagName("ul");
var testYazisi = document.getElementById("test");
function tikla(){
    const message = prompt("Mesajınızı giriniz...");
    var w = window.open();
    w.document.open();
    w.document.write(`<h1>${message}</h1>`);
    w.document.close();
}

function urunEkle(){
    var li = document.createElement("li");
    li.textContent = prompt("Ürün Adı");
    liste[0].appendChild(li);
}

function sinifEkle(){
    testYazisi.classList.add(prompt("sinif adi giriniz"));
}

function sinifSil(){
    testYazisi.classList.remove(testYazisi.classList.item((testYazisi.classList.length)-1))
}

function sinifGuncelle(){
    testYazisi.classList.replace(prompt("eski"),prompt("yeni"))
}

function sinifIncele(){
    alert(testYazisi.classList.item(0))
}

function sinifSorgula(){
    alert(testYazisi.classList.contains(prompt("sinif adi giriniz")).toString())
}