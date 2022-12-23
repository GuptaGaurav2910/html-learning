/*console.log("hello world")
alert("me")
typeof 23;  //number
typeof "foo"//string
typeof null //null

typeof {} //object
typeof [] //object
typeof function() {} //function(which inherits from objects)
true;            //true
!! "hello";   //true
!! -1;   //true
!! [];   //true
!! {};   //true

false;              //false
!! null;//false
!! undefined;//false
!! 0;//false
!! "";//false

fun();
functiom fun() */

function outer() {
   let count = 0;
   function inner() {
      count++;
      return count;
   }
   return inner;
}
 const addone = outer();

 addone();
 addone();
 addone();

 function addnumbers(a,b)
 {
   return a+b;
 }

 const result = addnumbers(5,7);

 function makeBreakfast(main,side,drink){
   console.log(arguments);
   return 'Breakfast is ${main},${side},and ${drink}.';
 }

 function makeLunch(opts){
   const { main,side,drink } = opts;
   return 'Lunch is ${main}, {side}, and ${drink}.';
 }

 function makeDinner(main, ...args){
   console.log(main, args)
   return 'Dinner includes $(main) and $(args.join('')}.';

 }

 print(makeBreakfast('🍕','🍔','🍟'));
 print(makeLunch({main: '🍞',side: '🫔',drink: '🥛' }));
 print(makeDinner('🧀','🥗','🥪','🌮'));