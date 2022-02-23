const arguments = process.argv.slice(2);
const {calculateArea, calculateCircumference} = require("./circle");

calculateArea(arguments[0]);
calculateCircumference(arguments[0]);