
const prettyDate = function(d){

	let split = d.split(" ");
	let newDate = split[0].split("-")[1] + " " + split[0].split("-")[2] + " " + split[0].split("-")[0]

	return newDate;
}

export default prettyDate 