var dizi = new Array();
//Rastgele uzunlukta(10<i<15), rastgele elemanlardan(<100) oluşturulmuş dizi
for (var i = 0; i < Math.floor(Math.random() * 15 + 10); i++) {
    dizi[i] = Math.floor(Math.random() * 100);
}
console.log("\nnon-sorted: " + dizi);

const merge = (leftArr , rightArr) =>{
    const output = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while(leftIndex < leftArr.length && rightIndex < rightArr.length){
        console.log("leftindex="+leftIndex);
        console.log("rightindex="+rightIndex);
        const leftEl = leftArr[leftIndex];
        const rightEl = rightArr[rightIndex];

        if(leftEl < rightEl){
            output.push(leftEl);
            leftIndex++;
        }else{
            output.push(rightEl);
            rightIndex++;
        }
    }

    return [...output, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)];
};

//recursive
const mergeSort = array =>{
    if(array.length <= 1){
        return array;
    }
    const middleIndex = Math.floor(array.length/2);
    const lefArr = array.slice(0,middleIndex);
    const rightArr = array.slice(middleIndex);

    return merge(
        mergeSort(lefArr),
        mergeSort(rightArr)
    );
};


console.log("sorted: " + mergeSort(dizi) + "\n");