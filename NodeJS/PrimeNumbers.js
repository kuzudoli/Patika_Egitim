//process global değişkendir, argv elemanı ile komut satırında girilen değerler ele alınabilir
//slice metodu ile sayı parametreleri fonksiyonda kullanılmak için depolanıyor
const arguments = process.argv.slice(2);//string Array
function showPrimeNumbers(lowNumber,highNumber){
    for(let i=lowNumber;i<=highNumber;i++){
        let isPrime = true;
        for(let j=2;j<=i;j++){//i sayısı, i sayısına kadar olan sayılara bölünür
            if(i%j==0 && j !== i)//Mod ile kontrol edilir
                isPrime = false;
        }
        if(isPrime)
            console.log(i);
    }
}

showPrimeNumbers(parseInt(arguments[0]),parseInt(arguments[1]));

//console.log(process.argv);