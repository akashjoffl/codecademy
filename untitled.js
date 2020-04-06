// Write your function here:

const tipCalculator = (quality, total) => {
  let tip;
  switch (quality) {
    case 'bad':
      tip = Math.round(total*0.05);
      return tip;
      break;
    case 'ok':
      tip = Math.round(total*0.15);
      return tip;
      break;
    case 'good':
      tip = Math.round(total*0.20);
      return tip;
      break;
    case 'excellent':
      tip = Math.round(total*0.30);
      return tip;
      break;
    default:
      tip = Math.round(total*0.18);
      return tip;
      break;
  }
}




// Uncomment the line below when you're ready to try out your function
console.log(tipCalculator('bad', 1000)) //should return 20

// We encourage you to add more function calls of your own to test your code!


// *********** Codecademy Version ///


const tipCalculator = (quality, total) => {
    switch (quality) {
        case 'bad':
            return total * .05;
        case 'ok':
            return total * .15;
        case 'good':
            return total * .20;
        case 'excellent':
            return total * .30;
        default:
            return total * .18;

    }
}
/*
// As a function declaration:
function tipCalculator(quality, total) {
    switch (quality) {
        case 'bad':
            return total * .05;
        case 'ok':
            return total * .15;
        case 'good':
            return total * .20;
        case 'excellent':
            return total * .30;
        default:
            return total * .18;

    }
}
*/
console.log(tipCalculator('good', 100))