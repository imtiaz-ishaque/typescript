/* 
There are three main primitives in JavaScript and TypeScript.

boolean - true or false values
number - whole numbers and floating point values
string - text values like "TypeScript Rocks"
There are also 2 less common primitives used in later versions of Javascript and TypeScript.

bigint - whole numbers and floating point values, but allows larger negative and positive numbers than the number type.
symbol are used to create a globally unique identifier. 
*/

//type assignment

//ExplicitType
let firstName: string = "Imtiaz";
console.log(firstName);

//ImplicitType
let lastName = "Ahmed";
console.log(lastName);


/* 
Error In Type Assignment
TypeScript will throw an error if data types do not match.


firstName = 33;

lastName = 33;

*/

