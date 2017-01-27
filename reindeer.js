var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];


var hohohoElement = document.getElementById("coloredReindeer");

// Your task is to loop through all the reindeer in the array
var list = hohohoElement.innerHTML;
list += "<ul>";
for (var i = 0; i < reindeer.length; i++) {
	list += "<li>" + colors[i] + " " + reindeer[i] +"</li>";
}
list += "</ul>";
hohohoElement.innerHTML = list;
console.log()
//add the name of the reindeer to the single HTML <div> element provided. 
// The name of the reindeer should be prepended with the corresponding color from the other array.

