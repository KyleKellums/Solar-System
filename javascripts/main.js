"use strict";
console.log("hello main.js");

var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

//Use the forEach method to add the name of each planet to a div element in your HTML with an id of "planets".

$.each(planets, function (index, planetList){
	console.log(planetList);
	var el = document.getElementById("planets");
	el.innerHTML += `${planetList}, `;
})


// Use the MAP method to create a new array where the first letter of each planet is capitalized
let capitaLized = $.map(planets, function(value){
	// console.log(value);
	return value.charAt(0).toUpperCase() + value.slice(1, value.length);
})

console.log("capitaLized", capitaLized);
let capitalizedP = document.getElementById("capital");
capitalizedP.innerHTML += `${capitaLized.join(", ")}, `;



// Use the FILTER method to create a new array that contains planets with the letter 'e'
function includesE(thisPlanet){
	return thisPlanet.includes("e");
}

let onlyEplanets = planets.filter(includesE);
console.log("ePlanets", onlyEplanets);
let ePlanetOutput = document.getElementById("withE");
ePlanetOutput.innerHTML += `${onlyEplanets.join(", ")}, `;


// Use the REDUCE method to create a sentence from the words in the following array
var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];

let sentence = words.reduce(() =>
	words.join(" "));


console.log(sentence);
let sentenceOutput = document.getElementById("reduce");
sentenceOutput.innerHTML += sentence;













