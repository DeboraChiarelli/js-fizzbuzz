//# FizzBuzz
//- Stampo in console i numeri da 1 a 100:
for (let i = 0; i < 100; i++) {
    let n = i + 1;
 
        if (n % 15 === 0) {            //   - SE sono multipli sia di 3, sia di 5
         console.log(n, 'Fizz');      //      ALLORA stampo FizzBuzz al posto del numero 
        } else if  (n % 3 === 0) {    //    - SE sono multipli di 3
         console.log(n, 'Buzz');      //     ALLORA stampo Fizz al posto del numero
        } else if (n % 5 === 0) {     //    - SE sono multipli di 5
         console.log(n, 'FizzBuzz');  //      ALLORA stampo Buzz al posto del numero//
        } else {
         console.log(n);
        }                    
}    
       

        
        

        