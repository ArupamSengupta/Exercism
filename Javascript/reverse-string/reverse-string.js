var reverseString = function(str){
	var revStr = '';
	if (str.length === 1)
		revStr = str;
	else{
		for (var j=str.length-1;j>=0;j--)
			revStr += str[j];
	}
	
	return revStr;	
}

module.exports = reverseString;