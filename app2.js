 // Chapter 9 to 11
// Task # 1

var a = prompt("Enter your city :");
b= "karachi";
if (a== b )
{
    alert(" 'Welcome to the City of lights' ");

}
else
{
    alert("Welcome " + a);
}


// Task # 2

var a = prompt("Enter your gender : ");
b= "male";
c= "female";
if (a== b )
{
    alert(" Good Morning Sir ");

}
else if( a == c)
{
    alert(" Good Morning Sir ");

}
else
{
    alert("Kindly enter value again");
}

// Task # 3


var a = prompt("Enter your color : ");
b= "red";
c= "green";
d = "yellow";
if (a== b )
{
    alert(" must stop ");

}
else if( a == d)
{
    alert(" Ready to move ");

}

else if( a == c)
{
    alert(" Move Now ");

}
else
{
    alert("Kindly enter color again");
}

// Task # 4


var a =  prompt("Enter your Remaining Fuel in liters  : ");

b= 0.25;

if (a === b )
{
    alert(" Please Refill Fuel in your car ");

}
else
{
    alert("You have Enough Fuel");
}

// Task # 5
//a
 var a = 4; 
 if (++a === 5)
 { 
     alert("given condition for variable a is true"); 
 }
 

//b 
var b = 82; 
if (b++ === 83)
{ 
    alert("given condition for variable b is true"); 
}  
//c 
var c = 12; 
if (c++ === 13)
{ 
    alert("condition 1 is true"); 
} 
if (c === 13)
{ 
    alert("condition 2 is true"); 
} 
if (++c < 14)
{ 
    alert("condition 3 is true"); 
} 
if(c === 14)
{ 
    alert("condition 4 is true"); 
} 

//d. 
var materialCost = 20000; 
var laborCost = 2000; 
var totalCost = materialCost + laborCost; 
if (totalCost === laborCost + materialCost)
{ 
    alert("The cost equals"); 
}

//e. 
if (true)
{ alert("True"); } 
if (false)
{ alert("False"); } 


//f. 
if("car" < "cat")
{ 
    alert("car is smaller than cat");
 } 
 

 //Task # 6

var a = parseInt(prompt("Enter your Marks obtained in Urdu :"));
var b = parseInt(prompt("Enter your Marks obtained in English :"));
var c = parseInt(prompt("Enter your Marks obtained in  Maths :"));
var d = parseInt(prompt("Enter Total Marks :"));

var total = a + b + c ;
var per =  (total / d) * 100;

document.write("<h1>  Marks Sheet</h1> <br><br><br>");
document.write("  total Marks : " + d + "<br>");
document.write("  Marks Obtain : " + total + "<br>");
document.write("  Percentage : "+ per + "<br>");

if (per >= 80 || per >=100 )
{
   document.write("Grade: A-one <br/>");
   document.write("Remarks : Excellent");
} 
else if (per <= 79 || per >= 70)
{
   document.write("Grade: A <br/>");
   document.write("Remarks : Good");
}
else if (per <= 69  ||  per>= 60)
{
   document.write("Grade: B <br/>");
   document.write("Remarks : You Need to improve ");
}
else
{
   document.write("Grade: Fail <br/><br/>");
   document.write("Remarks : Sorry ");
}

// Task # 7

var a = parseInt(prompt("Enter Number to Guess the right answer"));
var b = 7;
if ( a === b)
{
    alert("Bingo ! 'Correct Answer' ");
}

else if ((a+1) == b )
{
    alert("Close Enough to Guess the right Answer");
}
else
{
    alert("Better Luck Next Time");
}


// Task # 8

var a = parseInt(prompt("Enter Your Number"));
b = a % 3;

if (b == 0 )
{
    alert("Your Number is divisible by 3");
}
else
{
    alert("Your Number is not divisible by 3 enter another number");
}


// Task # 9

var a = parseInt(prompt("Enter Your Number"));
b = a % 2;

if (b === 0 )
{
    alert("Your Number is Even");
}
else 
{
    alert("Your Number is Odd");
}


// Task # 3


var a = prompt("Enter your Temprature : ");

if (a >= 40 )
{
    alert(" Its to Hot Outside ");

}
else if( a >= 30 && a<=39)
{
    alert(" The Weather today is Normal ");

}

else if( a >=20  && a<= 29 )
{
    alert(" Today Weather is Cool! ");

}
else
{
    alert("OMG! 'The weather today is so Cool'");
}


// Task # 10


var a = parseInt(prompt("Enter your First Number : "));
var b = parseInt(prompt("Enter your Second Number : "));
var operator = prompt("Enter your Desired Operation : ");

if (operator == "+" )
{
    c= a+b
    alert(" Addition of 2 number is " + c );

}
else if (operator == "-" )
{
    c= a-b
    alert(" Subtraction of 2 number is " + c );

}
else if (operator == "*" )
{
    c= a*b
    alert(" Multiplication of 2 number is " + c );

}
else if (operator == "/" )
{
    c= a/b
    alert(" Division of 2 number is " + c );

}
else
{
    alert("Enter the Correct Operator from '+,-,/,*'");
}
    





//Chapter 12-13
//Task # 1


var a = toString(prompt("Enter your number or string to check :"));
var b = a.charCodeAt(a.length-1); 

if ((b >= 97) || (b <= 122) )
{
    alert("Enter string in Lower case");
}
else if ((b >= 65) || (b <= 90) )
{
    alert("Enter string in Upper case");
}

else if ((b >= 48) || (b <= 57) )
{
    alert("Enter string in Number");
}






//Task # 2
var a = parseInt(prompt("Enter First number :"));
var b = parseInt(prompt("Enter Second number :"));

if ( a==b)
{
    alert (" the Both number are equal");

}
else if ( a>b )
{
    alert ("First Number is greater than Second");

}
else 
{
    alert("First number is less than second");  
}

//Task # 3

var a = parseInt(prompt("Enter any number to check :"));


if ( a < 0 ) 
{
    alert("your Number is Negative");
}
else if (a > 0 )
{
    alert("Your Number is Positive");
}

else if (a == 0 )
{
    alert("Your Number is equal to zero");
}

//Task # 4

var a = prompt("Enter any Alphabat to check :" );
var b = toString(a);


if ( a === "a" || a ==="e" || a=== "i" || a === "o" || a==="u" ) 
{
    alert("Your ALPHABAT is wOVEL");
}
else
{
    alert("Your ENTER a normal Letter");
}

//Task # 5

var pass = "password"
var a = null; 
var a = prompt("Enter your Password : " );
var b = toString(a);


if ( a === pass ) 
{
    alert("“Correct! The password you entered matches the original password”");
}
else if (a == null)
{
    alert("“Incorrect password");

}

else    
{
    alert("Enter any password");
}


//Task # 6

var greeting; 
var hour = 13; 
if (hour < 18)
 { 
     greeting = "Good day";
     alert(greeting); 
}

     else 
     {
         greeting = "Good evening"; 
         alert(greeting);
     }   

     //Task # 7

var time = parseInt(prompt("Enter your time"));

// if (time = 1900 )
// {
//     alert("Good Moring");
// }
if ( time >= 0000 && time < 1200)
{
    alert("Good Moring")
}
else if ( time >= 1200 && time < 1700)
{
    alert("Good Afternoon")
}

else if ( time >= 1700 & time < 2100)
{
    alert("Good Evening")
}

else if ( time >= 2100 & time < 2359)
{
    alert("Good Night")
}




 //Chapter 14-16

//Task # 1
var student = {};

//Task # 2 
var student = new Object();

//Task # 3

var student = ["asad", "ahmer", "adnan"];

// Task # 4

var num = [1, 2, 3, 4];

//Task # 5

var boolArray = [true,false];

//Task # 6
var person = ["John", "Doe", 46];

//Task # 7

var qualification = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"];
var fLen =qualification.length;
var i;
text = "<ul>";
for (i = 0; i < fLen; i++) {
  text += "<li>" + qualification[i] + "</li>";
}
text += "</ul>";

document.write(text);


//Task # 8

var stud = ["asad", "adnan", "ahmer"];
var score = [350, 390, 400];
var total = 500;
var scr1 = score[0]/total *100 ;
var scr2 = score[1]/total *100 ;
var scr3 = score[2]/total *100 ;

document.write("Score of " + stud[0] + " is : " + score[0]+ " ,Percentage is : " + scr1 + "<br/>");   
document.write("Score of " + stud[1] + " is : " + score[1]+ " ,Percentage is : " + scr2 + "<br/>");   
document.write("Score of " + stud[2] + " is : " + score[2]+ " ,Percentage is : " + scr3 + "<br/>");   


//Task # 9

var colorname = ["red", "green"];
 var fLen = colorname.length;

 var i;
text = "<ul>";
for (i = 0; i < fLen; i++) {
  text += "<li>" + colorname[i] + "</li>";
}
text += "</ul>";

document.write(text); 

// a

var colorname = ["red", "green"];
var add = prompt("Enter the color you want to add in your array");
var v = add
colorname.unshift(v);

 var fLen = colorname.length;

 var i;
text = "<ul>";
for (i = 0; i < fLen; i++) {
  text += "<li>" + colorname[i] + "</li>";
}
text += "</ul>";

document.write(text);
 
//b

var colorname = ["red", "green"];
var add = prompt("Enter the color you want to add in your array");
var v = add
colorname.push(add);

 var fLen = colorname.length;

 var i;
text = "<ul>";
for (i = 0; i < fLen; i++) {
  text += "<li>" + colorname[i] + "</li>";
}
text += "</ul>";

document.write(text);



// c

var colorname = ["red", "green"];

colorname.unshift("brown", "Yellow");

 var fLen = colorname.length;

 var i;
text = "<ul>";
for (i = 0; i < fLen; i++) {
  text += "<li>" + colorname[i] + "</li>";
}
text += "</ul>";

document.write(text);


// d

var colorname = ["red", "green", "yellow"];
var fLen = colorname.length;

 var i;
text = "<ul>";
for (i = 0; i < fLen; i++) {
  text += "<li>" + colorname[i] + "</li>";
}
text += "</ul>";

document.write(text);

colorname.shift("red");

 var fLen = colorname.length;

 var i;
text = "<ul>";
for (i = 0; i < fLen; i++) {
  text += "<li>" + colorname[i] + "</li>";
}
text += "</ul>";

document.write(text);
 
// e

var colorname = ["red", "green", "yellow"];
var fLen = colorname.length;

 var i;
text = "<ul>";
for (i = 0; i < fLen; i++) {
  text += "<li>" + colorname[i] + "</li>";
}
text += "</ul>";

document.write(text);

colorname.pop();

 var fLen = colorname.length;

 var i;
text = "<ul>";
for (i = 0; i < fLen; i++) {
  text += "<li>" + colorname[i] + "</li>";
}
text += "</ul>";

document.write(text);

//Task # 10
var stdsc = [320, 230, 480, 120];

var fLen = stdsc.length;

var i;
text = "student Score is <br/>  <ul>";
for (i = 0; i < fLen; i++) {
 text += "<li> " + stdsc[i] + "</li>";
}
text += "</ul>";

document.write(text);

stdsc.sort();

var fLen = stdsc.length;

var i;
text = "Sorted Student Score is <br/>  <ul>";
for (i = 0; i < fLen; i++) {
text += "<li> " + stdsc[i] + "</li>";
}
text += "</ul>";

document.write(text);


//#Task 12

var arr = ["This", " is", " my", " cat"];
 arr.join();

 var fLen = arr.length;

 var i;
 
 for (i = 0; i < fLen; i++) {
  text = arr[i] ;
  document.write(text); 
}
 


//#Task 13

var comp = ["Keyboard", "Mouse", "Printer", "Monitor"];

var fLen = comp.length;

var i;

for (i = 0; i < fLen; i++) {
 text = " Out <br/> " + comp[i] +"<br/>" ;
 document.write(text);
}


//#Task 14

var comp = ["Keyboard", "Mouse", "Printer", "Monitor"];

var fLen = (comp.length-1);

var i;

for (i = fLen ; i >= 0; i--) {
 text = " Out <br/> " + comp[i] +"<br/>" ;
 document.write(text);
}

//#Task 14

var comp = ["Apple", "Samsung", "Motorola", "Nokia", "Sony",  "Haier"];
var fLen = comp.length;
var i;
text = "<select>";
for (i = 0; i < fLen; i++) {
 text += "<option>" + comp[i] + "</option>";
}
text += "</select>";  

document.write(text);

 //Chapter # 17-20
//#Task 1

var comp = [[],[]];

//Task 2

var multi = [[0, 1, 2, 3],[0,1,0,2], [2,1,0,1]];

//Task # 3

var cars = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var text = "";
var i;
for (i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}
document.write(text);
 

//Task # 4

var table = prompt("Enter the number you want to Table of");
var upto = prompt("Enter the number you want to Table upto ");
var text = "";
var i;
for (i = 1; i <= upto; i++) {
  text +=table + " * " + i + " = " + (table*i) +  "<br>";
}
document.write(text);


// Task # 5
var fruits = ["apple", "banana", "mango", "orange" , "strawberry"] ;
var fLen = fruits.length;
var text = "";
var i;
for (i = 0; i < fLen ; i++) {
  text += "Element at index " +  i + " is " + fruits[i] +  "<br>";
}
document.write(text);
 

//Task # 6
// a  


var text = " ";
var i;
for (i = 1; i <= 15 ; i++) {
  text +=   i + ", " ;
}
document.write("Counting :" + text +"<br/>");
 
// b  

var text = " ";
var i;
for (i = 10; i > 0 ; i--) {
  text +=   i + ", " ;
}
document.write("Reverse Counting :" + text +"<br/>");
 
// c  

var text = " ";
var i;
for (i = 0; i <= 20 ; i++) {
  if ( i % 2 == 0)
  {
  text +=   i + ", " ;
  }
}
document.write("Even : " + text +"<br/>");
 

// d  

var text = " ";
var i;
for (i = 0 ; i <= 20 ; i++) {
  if ( i % 2 !== 0)
  {
  text +=   i + ", " ;
  }
}
document.write("Odd : " + text +"<br/>");
 

// e  

var text = " ";
var i;
for (i = 1; i <= 20 ; i++) {
  if ( i % 2 == 0)
  {
  text +=   i + "k, " ;
  }
}
document.write("Series : " + text +"<br/>");
    


//Task # 7
var a = ["cake", "apple pie", "cookie", "chips", "patties"];
var b = prompt("Welcome to ABC Bakery. What do you want to order sir/Madam ? ");
var n = a.includes(b);

if ( a === n)
{
    alert(b  +" is preent at our bakery")

}
else 
{
  alert(" We are Sorry..! "+ b + " is not present at our bakery");
  
}

//Task # 8

var a = [24, 53, 78, 91, 12];
var largest= a[0];

for (i=0; i < a.length; i++){
    if ( largest < a[i]) {
       largest= a[i];
    }
}




document.write(largest + "<br/>");

//Task # 9



var a = [24, 53, 78, 91, 12];
var smallest= a[0];

for (i=0; i < a.length ;i++){
    if ( a[i] < smallest ) {
        var smallest=a[i];
    }
}


document.write(smallest + "<br/>");


// Task # 10

var x;
for (x=1; x <= 20; x++)

{
  
  document.write( 5*x + ",")
}


//chapter # 21-25
// Task # 1

var fname = prompt("Enter your first name : ");
var lname = prompt("Enter your last name : ");

var fullName = fname +" "+lname;
alert("Hello Mr/Mrs" +fullName);


//Task # 2
var mobile = prompt("Enter your fav mobile name : " );
document.write("My fav mobile phone is" + mobile +"<br/>");
document.write("Length of string is :" + mobile.length);




//Task # 3
var str = "Pakistan";
document.write("string is " +str +"<br/>");
document.write("Index of string  N is :" + str.indexOf("n") +"<br/><br/>");



//Task # 4
var str = "Hello World";
document.write("string is :" + str +"<br/>");
document.write("Last Index of string L is :" + str.lastIndexOf("l") +"<br/><br/>");



//Task # 5
var str = "Pakistani";
document.write("string is :" + str +"<br/>");
document.write("charter at Index 3 is :" + str.charAt(3) +"<br/><br/>");


// Task # 6

var fname = prompt("Enter your first name : ");
var lname = prompt("Enter your last name : ");

var fullName = fname.concat(lname);
document.write("Hello Mr/Mrs" +fullName);


// Task # 7

var str = "Hyderabad";
document.write("Capital is : " + str + "<br/>");
var res = str.replace("Hyder", "Islam");
document.write("After replacement Capital is :" + res+ "<br/>");


//Task # 8
var message = "Ali and Sami are best friends. They play cricket and football together.";
var res = message.replace( /and/g, "&");
document.write( message+ "<br/>");
document.write( res+ "<br/>");

//Task # 9

var str = "476";
var type = typeof(str);
document.write("valve is "+ str + "<br/> Type is " + type + "<br/>");
var con = parseInt(str);
var type1 = typeof(con);
document.write("valve is "+ str + "<br/> Type is " + type1 + "<br/>");

//Task # 10

var user = prompt("Enter your input in small letter : ");
var cap = user.toUpperCase();
document.write("user input "+ user + "<br/>");
document.write("Upper Case :" + cap + "<br/>" );



//Task # 11
//Check 

var user = prompt("Enter your input in small letter : ");
  var cap = user.charAt(0);
  var title = cap.toUpperCase();
  //var con = cap.concat
  var a = user.concat(title , user.slice(1,9) );

document.write("user input "+ user + "<br/>");
document.write("Upper Case :" + a + "<br/>" );


//Task # 12


var num = 35.36;
var b = num*100;
var c = b.toString() ;
document.write("Number is : " + num +"<br/>");
document.write("Result is : " + c +"<br/>");


// Chapter # 26-30
//Task # 1

var a = prompt("Enter any Number");
var b = Math.round(a);
var c = Math.floor(a);
var d = Math.ceil(a);
document.write("Number is : " + a +"<br/>");
document.write("Round is : "+ b +"<br/>");
document.write("Floor is : "+ c +"<br/>");
document.write("Ceil is : "+ d +"<br/>");


//Task # 2

var a = prompt("Enter any Number");
var b = Math.round(a);
var c = Math.floor(a);
var d = Math.ceil(a);
document.write("Number is : " + a +"<br/>");
document.write("Round is : "+ b +"<br/>");
document.write("Floor is : "+ c +"<br/>");
document.write("Ceil is : "+ d +"<br/>");



//Task # 3
var a = prompt("Enter any Number");
var b = Math.abs(a);
document.write("Absolute of " + a +" is : " + b + "<br/>" );

//Task # 4
var a = Math.floor((Math.random() * 6) + 1);
document.write("Random Dice Value is : " + a + "<br/>" );
  
//Task # 5
var a = Math.floor((Math.random() * 2) + 1);
if( a ==2 )
{
  document.write( a + "<br/>" );
document.write("Random Coin Value is : Head <br/>" );
}
else
{
  document.write( a + "<br/>" );
document.write("Random Coin Value is : Tail <br/>" );
}



//Task # 6
var a = Math.floor((Math.random() * 100) + 1);
document.write("Random Number Between 1 & 100 : " + a + "<br/>" );

//Task # 7
var a = prompt("Enter your Waight is kilogram :");
var b = a.toString();
document.write("The weight of user is : "+  b);

//Task # 8
var a = prompt("Enter your Numer to Guess :");
var b = Math.floor((Math.random() * 10) + 1);
if (a == b)
{
  alert("congratulate guess the right number : " + a + "<br/>" );
}
else
{
  alert("Try Again");
}


//Chapter # 31 to 34
//Task # 1
var d = Date();
document.write(d+"<br/>");

//Task # 2
var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var d = new Date();
var n = month[d.getMonth()];
document.write("Current Month is : " +n+ "<br/>");

//Task # 3
var d = new Date();
  var weekday = [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var n = weekday[d.getDay()];
  document.write("Current day is : " +n+ "<br/>");

  //Task # 4
  var d = new Date();
  var weekday = [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var n = weekday[d.getDay()];
  if ( n =="Sun" || n =="Sat")
  {
    document.write("Today is Funday <br/>");
  
  }
  else
  {
    
    document.write("Today is not Funday <br/>");
  }
  

  //Task # 5

  var d = new Date();
  var n = d.getDate();
  if ( n <=15 )
  {
    
      document.write("First Fifteen days of Month <br/>")
    
  }
  else
  {
    document.write("last Fifteen days of Month <br/>")
    
  }

  
  //Task # 6
  var d = new Date();
  var millsSince = d.getTime();
  var min = millsSince / 60 /60 /60 ;

  document.write("Current Date is : "+ d +"<br/>");
  document.write("Elapsed Millisecond since  Jan. 1, 1970 is : "+ millsSince  +"<br/>");
  document.write("Elapsed Miniute since  Jan. 1, 1970 is : "+ min +"<br/>");

  //Task # 7
  var d = new Date();
  var n = d.getHours();
  if ( n >= 0 && n <=12 )
  {
  document.write(" Its AM" + "<br/>");

  }
  else if ( n >= 13 && n <=23 )
  {
    
  document.write(" Its PM" +"<br/>");

  }

  //Task # 8
  var d = new Date("December 30, 2020 00:00:00");
  //var d = new Date();
   d.setDate(31);

  document.write("Later Date :" + d  +"<br/>");

  //Task # 9

    var current = new Date();
    var a = current.getTime();
    var previous = new Date("2020, 04, 23");
    var b = previous.getTime();
  
    var result =  Math.ceil((a - b) / 86400000);
  
  document.write("Current Date :"+ current   + "<br/>");
  document.write("Days Passed Since 1st Ramzan "+ result + "<br/>");
  

  //Task # 10

  var current = new Date();
  
  var previous = new Date("2020, 05, 23");
  
  var result =  Math.ceil(current - previous);

document.write("Current Date :"+ current   + "<br/>");
document.write("Days Passed Since the Given date : "+ result + "<br/>");

//Task # 11


var d = new Date();
d.setHours(d.getHours() - 1);
document.write("Time before one year ago is: "+ d+"<br/>");

//Task 12

var d = new Date();
d.setFullYear(d.getFullYear() - 100);
document.write(""+ d +"<br/>");

//Task # 13
var z = prompt("ENTER your age year");
var d = new Date();
  var n = d.getFullYear();
  var year = n-z; 
  document.write("You are :" +year +" old ");

  

  //Task # 14
  var cus = "Abc Company";
  var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var d = new Date();
  var n = month[d.getMonth()]; 
  var unit =410;
  var charge = 16;
  var bill = unit*charge;
  var late = 350;
  var sur = bill + late;

  document.write("<h1>K-Electric Bill</h1><br/><br/><br/> ");
    document.write("Customer Name is : " +cus+ "<br/>"); 
    document.write("Month is : " +n+ "<br/>"); 
    document.write("Number of unit is : " +unit+ "<br/>"); 
    document.write("Charg per unit is : " +charge+ "<br/><br/><br/>"); 
    document.write("Net Payment Payable : " +bill+ "<br/>"); 
    document.write("Late Payment Surcharge : " +late+ "<br/>"); 
    document.write("Gross Payment Payable (after dua date) : " +sur+ "<br/>");      


  //Chapter # 35-38
    //Task # 1
function tellTime() 
{  
  var now = new Date(); 
  var theHr = now.getHours(); 
  var theMin = now.getMinutes();   
  alert("Current time: "+ theHr + ":" + theMin); 
} 
tellTime();




  //Task # 2
  function fullname(a,b)
  {
    var a ;
    var b ;

    alert("Welcome "+ a +" "+ b);

  }

  fullname("arsalan","ansari");
  
  //Task # 3

  function sum(a,b)
  {
    var a ;
    var b ;
    var c = a+b;

    alert(c);

  }

  sum(3,4);

  //Task # 4

  
  function sum(a,b,c)
  {
    var a ;
    var b ;
    var c ;
    if (c == "+")
    {

    alert(a+b);
    }
    if (c == "/")
    {

    alert(a/b);
    }
    if (c == "-")
    {

    alert(a-b);
    }
    if (c == "*")
    {

    alert(a*b);
    }
  }

  var a = parseInt(prompt("Enter First Number :"));
  var b = parseInt(prompt("Enter Second Number :"));
  var c = prompt("Enter OPERATOR :");
  sum(a,b,c); 

  
  //Task # 5

  function square(a) 
  {
    var a ;
    var b = a*a;
    alert(b);

  }
  var b = parseInt(prompt("Enter Your Number :"));
  square(b);



  
  //Task # 6

  function factorialize(num) 
  {

    var i;  
    var num;
    for (i =1; i <= num; i++);
    {
        num = num *i;
        
    }
    document.write(num+"<br/>");

  }
  factorialize(5);
 //Task # 7

  function count(num1,num2) 
  {

   var num1;
   var num2;

   
  for (var i = 0; i < 9; i++) {
    document.write(i+"<br/> ");
 }
 
    for (var i = num1; i <= num2; i++);
    {
      document.write(i+",<br/> ");
    }
    

  }
  var d= parseInt(prompt("Enter Starting Number : "));
  var e= parseInt(prompt("Enter Starting Number : "));
  count(d,e);