class Hamming {
	String leftStrand;
	String rightStrand;
    Hamming(String leftStrand, String rightStrand) {
		//Checking if the strand's length are unequal and throwing an exception.
		if(leftStrand.length() != rightStrand.length()){
			throw new IllegalArgumentException("leftStrand and rightStrand must be of equal length.");
		}else{
			this.leftStrand = leftStrand;
			this.rightStrand = rightStrand;
		}
    }

    int getHammingDistance() {
		int hammingDistance = 0;
		
		//Implementing Java Streams for a functional approach.
        
		
		return hammingDistance;
    }

}
