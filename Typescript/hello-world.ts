class HelloWorld {
    static hello(name?:string) {
        // Your code here
		if (name){
			return "Hello, "+ name +"!";
		}else{
			return "Hello, World!";
		}
    }
}
export default HelloWorld