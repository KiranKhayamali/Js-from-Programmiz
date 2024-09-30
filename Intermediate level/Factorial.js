function calculateFactorial(n) {
    if (n !== 1) {
      // call calculateFactorial() with appropriate argument
      return n * calculateFactorial(n-1);
    }
    return n;
  }
  
  let number = parseInt(prompt("Enter a number:"));
  let result = calculateFactorial(number);
  console.log(result);