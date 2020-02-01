function calculateInsurance() {
	var x = parseInt(document.getElementById("myAge").value);
	var y = document.getElementById("horsepower").value;
	var z = document.getElementById("country").value;
	var name = document.getElementById("myName").value;
	if(z=='Austria'){
	document.getElementById("demo").innerHTML =name +", your insurance costs "  + Math.round((y*100/ x + 50)) + "€" ;
}	else if (z=='Hungaria') {
	document.getElementById("demo").innerHTML =name +", your insurance costs "  + Math.round((y*120/ x + 100)) + "€"
}
	else{
		document.getElementById("demo").innerHTML =name +", your insurance costs "  + Math.round((y*150/ (x+3) + 50)) + "€"
}
}
