/* 
TypeScript Tuples

Typed Arrays
A tuple is a typed array with a pre-defined length and types for each index.

Tuples are great because they allow each element in the array to be a known type of value.

To define a tuple, specify the type of each element in the array:
*/

//define our tuple
let ourTuple: [number, boolean, string];

//initialize correctly
ourTuple = [15, true, "Coding God was here"];
console.log(ourTuple[0]);

/* 
As you can see we have a number, boolean and a string. But what happens if we try to set them in the wrong order:
*/

//initialized incorrectly which throw error
//ourTuple = ["Testing code",15,true]; //Error

/* 
Even though we have a boolean, string, and number the order matters in our tuple and will throw an error.
*/

/* 
Readonly Tuple
A good practice is to make your tuple readonly.

Tuples only have strongly defined types for the initial values:
*/

//define tuple 2
let tuple2: [number, boolean, string];
//initialize correctly
tuple2 = [15, false, "Tuple 2 string test"];
// We have no type safety in our tuple for indexes 3+
tuple2.push("Something new and wrong");
console.log(tuple2);

// define our readonly tuple
const ourReadonlyTuple: readonly [number, boolean, string] = [
  15,
  false,
  "SOmething string here",
];
// throws error as it is readonly.
//ourReadonlyTuple.push("Something new string"); Error

/* 
If you have ever used React before you have worked with tuples more than likely.

useState returns a tuple of the value and a setter function.

const [firstName, setFirstName] = useState('Dylan') is a common example.

Because of the structure we know our first value in our list will be a certain value type in this case a string and the second value a function.
*/

/* 
Named Tuples
Named tuples allow us to provide context for our values at each index.
*/

const graph: [x: number, y: number] = [52.2, 41.3];

//Named tuples provide more context for what our index values represent.

/* 

Destructuring Tuples
Since tuples are arrays we can also destructure them.

*/

const graph1: [number, number] = [53.2, 56.1];
const [a, b] = graph1;
console.log("a:", a, "b:", b);
