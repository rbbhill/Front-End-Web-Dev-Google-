var room = "dining room";
var suspect = "Mr. Parkes";

var weapon = "";
var solved = false;

if (room === "ballroom") {
    weapon = "poison";
    if (suspect === "Mr. Kalehoff"){
        solved = true;
    }
} else if (room === "gallery") {
    weapon = "trophy";
    if (suspect === "Ms. Van Cleve"){
        solved = true;
    }
} else if (room === "billiards room") {
    weapon = "pool stick";
    if (suspect === "Mrs. Sparr"){
        solved = true;
    }
} else {room === "dining room"
    weapon = "knife";
    if (suspect === "Mr. Parkes"){
        solved = true;
    }
}

if (solved) {
	console.log(suspect + " did it in the " + room + " with the " + weapon +"!");
}
