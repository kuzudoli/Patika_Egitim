function calculateArea(radius){

    const pi = 3.14;
    let area = 2*pi*Math.pow(parseInt(radius),2);
    console.log(`Area of circle: ${area}`);
}

function calculateCircumference(radius){
    //const arguments = process.argv.slice(2);
    const pi = 3.14;
    let circumference = 2*pi*parseInt(radius);
    console.log(`Circumference of circle: ${circumference}`);
}

module.exports = {
    calculateArea,
    calculateCircumference
}