//var beers = 99;

function printVerse(num) {

	var name = "bottles";
	if (num === 1) { name = "bottles"; }


	console.log(num + " " + name + " of beer on the wall");
	console.log(num + " " + name + " bottles of beer");
	console.log("you take one down and pass it around");
	num--;
	console.log(num + " bottles of beer on the wall\n");
	return num;

}

for (var x=99;x>0;x--) {
	printVerse(x);
}

// //repeat the section 99 times
// while(beers > 0) {
// 	//console.log(beers + " No more bottles of beer on the wall!  Now, lets do it with shots!!\n");
// 	beers = printVerse(beers);
}                      

var printVerse = function (num) {

	var name = "bottles";
	if (num === 1) { name = "bottles"; }

	console.log(num + " " + name + " of beer on the wall");
	console.log(num + " " + name + " bottles of beer");
	console.log("you take one down and pass it around");
	num--;
	console.log(num + " bottles of beer on the wall\n");
}

for (var x = 99; x > 0; x--) {
	printVerse(x);
}
