//8125 

// reverse an array

//create new array
// use length of array to take last element and add it to new array.
//return new/reversed array, or 

// const reverseArr = (arr) => {
//    let reversed = [];
// 
//    for (let i= arr.length ; i === 0 < ; i-- ) {
// 
//    }
// }


// while(n > 0){
//   n = fib(n-1) + fib(n-2);
// }
// return n;


const fib = (n) => {
  
}

console.log(fib(89))



//////////////////////////////////////
//////////// Warmup Day 2 ////////////
/////////// Factorial ////////////////
//////////////////////////////////////


// Ruby Versions

  // def factorial(n)
  //   return 1 if n < 2
  //   n * factorial(n-1)
  // end
  
  
// To Memoize (in Ruby)
  // put function inside of a class, otherwise data gets garbage collected
  
  class Factorial
    @@fac = []
    
    def self.f(n)
      @@fac[n] ||= n < 2 ? 1 : n * f(n-1)
    end
  end