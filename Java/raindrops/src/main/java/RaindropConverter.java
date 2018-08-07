class RaindropConverter {

    String convert(int number) {
		String result = "";
		
		//Finding the factors of the number.
        if (number%3 == 0){
			result += "Pling";
		}
		if (number%5 == 0){
			result += "Plang";
		}
		if (number%7 == 0){
			result += "Plong";
		}
		
		//Returning the string representation of the original number.
		if (result == "")
			result = String.valueOf(number);
		
		return result;
    }

}
