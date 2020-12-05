const prompt = require('prompt-sync')({sigint: true});
let pinsStr = prompt('Input numbers of pins knocked down (comma separated): ');
const getBowlingScore = require('./bowling');
console.log(`Total Score: ${getBowlingScore(pinsStr)}`);
