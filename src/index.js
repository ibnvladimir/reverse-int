module.exports = function reverse (num) {
  	if (num < 0){
		num *= - 1;
	}
	
	let result = String(num);
	result = Array.from(result);
	result = result.reverse().join('');
	
	return parseInt(result);
}
