var DnaTranscriber = function (){};

DnaTranscriber.prototype.toRna = function(str){
	if (!str)
		return '';
	else{
		for (var j=0;j<str.length;j++){
			switch (str[j]){
				case "G":
					str[j] = "C";
					break;
				case "C":
					str[j] = "G";
					break;
				case "T":
					str[j] = "A";
					break;
				case "A":
					str[j] = "U";
					break;
				default:
					throw new Error('Invalid input');
			}
		}
		
		return str;
	}
}