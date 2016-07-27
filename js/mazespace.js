"use strict";

function MazeSpace(directions) {
	for (var i = 0; i < directions.length; i++) {
		this[directions[i]] = false; 
	}
}

MazeSpace.prototype.setWall = function(direction) {
	//Have the name of a property in a variable so have
	//to use this syntax. 
	this[direction] = true; 
}