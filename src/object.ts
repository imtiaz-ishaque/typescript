/* 
TypeScript Object Types
TypeScript has a specific syntax for typing objects.
Read more about objects in our JavaScript Objects chapter.
*/

const car: { type: string, model: string, year: number } = {
    type: "Toyota",
    model: "Corolla",
    year: 2023,
};
console.log(car);

/* 
Type Inference
TypeScript can infer the types of properties based on their values.
*/

const car1 = {
    type: "Toyota"
}
car1.type = "BMW"; //no error
//car1.type = 3; // Error: Type 'number' is not assignable to type 'string'.
console.log(car1);


/* 
Optional Properties
Optional properties are properties that don't have to be defined in the object definition.

Example without an optional property
*/

/* 
const car2: {
  type: string;
  mileage: number;
} = {
  Error: Property 'mileage' is missing in type '{ type: string; }' but required in type '{ type: string; mileage: number; }'.
  type: "Toyota",
};
car2.mileage = 2000;
*/

/* 
Example with an optional property
*/

const car2: { type: string, mileage?: number } = {
    type: "Toyota"
}

car2.mileage = 2000;
console.log(car2);

/* 
Index Signatures
Index signatures can be used for objects without a defined list of properties.
*/

const nameAgeMap: { [index: string]: number } = {};
nameAgeMap.Jack = 25; //no error
nameAgeMap.Mark = 100; //no error
//nameAgeMap.Mark = "Fifty"; //Error: Type 'string' is not assignable to type 'number'.
console.log(nameAgeMap);