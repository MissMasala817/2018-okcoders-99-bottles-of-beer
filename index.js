
var beers = 99;

//repeat the section 99 times
while(beers > 0) {

	if (beers === 1) {
		console.log(beers + " bottle of beer on the wall");
		console.log(beers + " bottle of beer");
		console.log("you take one down and pass it around");
		//beers = beers - 1;
		beers--;
		console.log(beers + " No more bottles of beer on the wall!  Now, lets do it with shots!!\n");
	} else {
		console.log(beers + " bottles of beer on the wall");
		console.log(beers + " bottles of beer");
		console.log("you take one down and pass it around");
		//beers = beers - 1;
		beers--;
		console.log(beers + " bottles of beer on the wall\n");
	}
}                      
