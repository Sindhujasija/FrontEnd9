function isEven(num){
	return num%2 ===0;
}

function factorial(num){
	var result=1;
	for(var i=2; i<=num; i++){
		result*=1;
	}
	return result;
}

function kebabToSnake(str){
		var newStr = str.replace(/-/g,"_");
		return newStr;
}
