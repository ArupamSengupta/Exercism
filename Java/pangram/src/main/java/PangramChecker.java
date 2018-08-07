public class PangramChecker {

    public boolean isPangram(String input) {
		
        int distinctletterCount = 0;
		
		for (int index=0;index<input.length();index++){
			char letter = input.charAt(index);
			int asciiCode = (int)letter;
			if ((asciiCode>=65 && asciiCode<=90) || (asciiCode>=97 && asciiCode<=122) 
				&& input.indexOf(letter) != -1){
					distinctletterCount++;
				}	
		}
		
		return (distinctletterCount == 26);
    }

}
