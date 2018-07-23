class ArmstrongNumbers {

	boolean isArmstrongNumber(int numberToCheck) {

		int temp = numberToCheck;
		int digitCount = 0;
		int sumOfPower = 0;
		
		while (temp>0){
			temp /=10;
			digitCount++;
		}
		
		temp = numberToCheck;
		
		while (temp>0){
			sumOfPower += Math.pow(temp%10,digitCount);
			temp /= 10;
		}

		return (numberToCheck == sumOfPower);
	}

}
