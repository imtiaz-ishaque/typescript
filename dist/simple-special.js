"use strict";
let v = true;
console.log("TYPE ANY:", v);
v = "String";
console.log("TYPE ANY:", v);
Math.round(v);
let w = 1;
console.log("TYPE UNKNOWN:", w);
w = "String";
console.log("TYPE UNKNOWN:", w);
w = {
    myFunction: () => {
        console.log("TYPE UNKNOWN:", "I think therefore I am");
    },
};
console.log("TYPE UNKNOWN:", w);
if (typeof w === 'object' && w !== null) {
    w.myFunction();
}
//# sourceMappingURL=simple-special.js.map