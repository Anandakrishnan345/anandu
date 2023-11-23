var a;//variable declaration
a=10;//initailise
console.log("a :",a);

//datatypes
var str = "this is a string"
console.log("str :", str)
console.log("str type is:", typeof(str))

var num = 25;
console.log("the num is:", num);
console.log("type of num:",typeof(num))

var bool1 = true;
console.log("the bool is:", bool1)
console.log("type of bool1:", typeof(bool1))


//global object
var bike = "hero"
console.log("bike is:", bike)

//variable scopes

//var
/*
    -adds to global object
    -can be redeclared and modified anytime
    -function scoped
 */
//example
//{ inside the braces are block scoped } but var can be used outside block too!
{
var car = "BMW"
console.log("car is :", car)
 
car = "audi"
 console.log("new car is :", car)
}
console.log("can be used outside the block:", car)

//let
/* does not add to global object
    -block scoped
    -can't redeclared
    -can update value later
     */
{
let fruit="mango"
console.log("the fruit is :", fruit)
  
fruit ="orange"
 console.log("fruit :", fruit)

 let food="rice"
 console.log("food is", food)

}