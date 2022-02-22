//Dairenin alanı
const arguments = process.argv.slice(2);
const pi = 3.14;

function calculateArea(radius){
    let area = 2*pi*Math.pow(parseInt(radius),2);
    console.log(`Area of circle: ${area}`);
}

calculateArea(arguments[0]);