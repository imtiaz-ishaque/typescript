/* 
TypeScript Type Aliases and Interfaces

TypeScript allows types to be defined separately from the variables that use them.
Aliases and Interfaces allows types to be easily shared between different variables/objects.
*/

/* 
Type Aliases

Type Aliases allow defining types with a custom name (an Alias).
Type Aliases can be used for primitives like string or more complex types such as objects and arrays:
*/
type CarYear = number;
type CarType = string;
type CarModel = string;
type Car = {
  year: CarYear;
  type: CarType;
  model: CarModel;
};

const carYear: CarYear = 2023;
const carType: CarType = "Toyota";
const carModel: CarModel = "Corolla";

const mycar: Car = {
    year: carYear,
    type: carType,
  model: carModel,
};

console.log(mycar);
//log { year: 2023, type: 'Toyota', model: 'Corolla' }

/* 
Interfaces
Interfaces are similar to type aliases, except they only apply to object types.
*/

interface Rectangle { 
    height: number,
    width: number
}

const rectangle: Rectangle = {
    height: 20,
    width: 30
}

console.log(rectangle);
//log { height: 20, width: 30 }

/* 
Extending Interfaces
Interfaces can extend each other's definition.

Extending an interface means you are creating a new interface with the same properties as the original, plus something new.
*/

interface Rectangle1 { 
    height: number,
    width: number
}

interface ColoredRetangle1 extends Rectangle1 { 
    color: string
}

const coloredRectangle: ColoredRetangle1 = {
    height: 20,
    width: 10,
    color: "Red"
}

console.log(coloredRectangle);
//log { height: 20, width: 10, color: 'Red' }

