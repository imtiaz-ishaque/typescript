"use strict";
var Directions;
(function (Directions) {
    Directions[Directions["North"] = 0] = "North";
    Directions[Directions["East"] = 1] = "East";
    Directions[Directions["South"] = 2] = "South";
    Directions[Directions["West"] = 3] = "West";
})(Directions || (Directions = {}));
let currentDirection = Directions.North;
console.log(currentDirection);
var Directions2;
(function (Directions2) {
    Directions2[Directions2["North"] = 1] = "North";
    Directions2[Directions2["East"] = 2] = "East";
    Directions2[Directions2["South"] = 3] = "South";
    Directions2[Directions2["West"] = 4] = "West";
})(Directions2 || (Directions2 = {}));
console.log(Directions2.North);
console.log(Directions2.South);
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
console.log(StatusCodes.NotFound);
console.log(StatusCodes.BadRequest);
var DirectionName;
(function (DirectionName) {
    DirectionName["North"] = "North";
    DirectionName["East"] = "East";
    DirectionName["South"] = "South";
    DirectionName["West"] = "West";
})(DirectionName || (DirectionName = {}));
console.log(DirectionName.North);
console.log(DirectionName.South);
//# sourceMappingURL=enums.js.map