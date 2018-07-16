function prime() {
    num = input();
    flag = true;
    if(num < 2)
       flag = false;
    for(i = 2; i <= Math.sqrt(num); i++){
       if(num % i == 0){
          flag = false;
        break;
      }
    }
  if(flag){
    showresult("Given Number " +num+ " is prime");
  }
  else{
   showresult("Given Number " +num+ " is not prime");
  }
}

function input() {
    num = document.getElementById("number").value;
    return num;
}
function factorial() {
num = input();
    var res = 1;
    for(i = 2; i <= num; i++){
        res *= i;
    }
   showresult("Factorial of Number " +num+ " is: "+res); 
}
function factors() {
    num = input();
    var result=" ";
    for(i = 1; i <= num; i++){
        if(num % i == 0){
            result += +i+"  ";
        }
    }
   showresult("Factors of Number " +num+ " is: "+result); 
}
function fibonacci() {
  num = input();
  var res= ""; 
if(num < 1){
    res += "0";
}else if(num < 2){
    res +="0 1";
}else{
    var a=0; b=1;
    res += "0 1";
    for(i = 3; i<=num; i++){
       c = a + b;
        res += " "+c;
        a = b ;
        b = c;
    }
    }
  showresult("Fibonacci series of Number " +num+ " is: "+res); 
}
function showresult(message) {
    document.getElementById("result").innerHTML="<h4>" +message+ "</h4>";
}
function reverse(){
    num = input();
    var rev = 0;
   var r = 0;
    while(num != 0){
        
        rev = (rev * 10) + (num % 10);
        num = Math.floor(num /10);
    }
    showresult("reverse of a given number: " +rev);
}
function palindrome(){
    num = input();
    num2 = num;
    var rev = 0;
     var r = 0;
    while(num != 0){
       r = num % 10;
        rev = (rev * 10) + r;
        num = Math.floor(num /10); 
    }
    if(num2 == rev){
        showresult("Given number " +num2+ " is palindrome");
    }else{
        showresult("Given number " +num2+ " is not a palindrome");
    }
}
function sumdigit(){
    num = input();
    var sum = 0;
    while(num !=0){
        sum =sum + (num % 10);
        num = Math.floor(num /10); 
    }
    showresult("sum of digits of given number: " +sum);
}
function sumsingle(){
   var num = input();
    var sum1 = num;
    while(num > 9){
        sum1 = (Math.floor(num /10))+ (num % 10);
        num = sum1;
    }
   showresult("sum of digits until single digit: " +sum1);
}