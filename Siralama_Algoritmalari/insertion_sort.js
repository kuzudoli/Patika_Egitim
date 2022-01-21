var dizi = new Array();
//Rastgele uzunlukta(5<i<10), rastgele elemanlardan(<100) oluşturulmuş dizi
for (var i = 0; i < Math.floor(Math.random() * 10 + 5); i++) {
    dizi[i] = Math.floor(Math.random() * 100);
}
console.log("\nnon-sorted: " + dizi);

insertionSort(dizi);

function insertionSort(input) {
    //İleri
    for (var i = 1; i < input.length; i++) {
        //Geri
        for (var j = i; j > 0; j--) {
            if(input[j] < input[j-1]){
                const temp = input[j];
                input[j] = input[j-1];
                input[j-1] = temp;
            } else{
                break;
            }
        }
    }
    console.log("sorted: " + input + "\n");
}
