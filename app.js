//  Assingment # 1
// Chapter # 1
// Task # 1

//alert("Hello User");

// Task # 2

//alert("Error! Please enter a valid Password");

// Task # 3

//alert("Welcome to JS land... \n Happy coading");

// Task # 4

//alert("Welcome to JS land... ");
//alert("Happy coading");


// Task # 5

console.log("Hello...!I can run javascript through my web browser console");

//Task 6 & 7 in index file


// Chapter # 2
// Task # 1

var username;

// Task # 2

var myName;
var first= "Muhammad";
var last = "arsalan";
var fullName = first + last; 
myName = fullName;

// Task # 3

var message;
message = "hello World";
//alert(message);

// Task # 4

var name = "john Doe";
var age = "15 year old";
var course = "Certified Mobile Application Developer";
//alert(name);
//alert(age);
//alert(course);

//Task # 5

/* var text = "PIZZA";
var x = "";
for (x of txt) {
    document.write(x + "<br >");
  }
  alert(x);
 */

   //Task 6 
   var email = "Example@gmail.com";
   //alert("My email address is " + email);

  //Task 7
    
   var book = "“A smarter way to learn JavaScript”. ";
  // alert("I am Trying to learn from the Book " + book);

  //Task 8

  //document.write("Yeah..! I can write HTML content through JavaScript <br>");

  //Task 9
  
  var sing ="“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬“";
  //alert(sing);



  
// Chapter # 3
// Task # 1

var age = 15;
//alert("I am " + age + " years old");


// Task # 2
  var visit =0;
  if (visit === null)
  {
        visit=0
  }   
  visit++
  
  //alert("You visit our website " + visit + " times");

  //Task # 3
  myBirthYear = 1991;
 // document.write("My Birth year is "+ myBirthYear + "<br> Date type of my Declared no is number" );

  //Task # 4
   var website = "xyzcloatingstore.com";
   /* var visitorName = prompt("Please enter your name:");
   var productType = prompt("Please enter the product you want:");
   var quantity = prompt("Please enter your Desired quantity:"); */
   var visitorName = "John Doe";
   var productType = "T-Shirts";
   var quantity = 5;
   document.write(visitorName + " ordered " +quantity +" "+ productType + " on "+ website);
   

    
// Chapter # 4
// Task # 1
  // var person = "John Doe", carName = "toyta", price = $20000;
   

   // Task # 2
   // Legal Variable
   var abc;
   var _xyz;
   var asd123;
   var abc_xyz;
   var $kil_1;

   //Illegal Variable
//   var 1abc;
//   var @abc;
//   var 2_asd;
//   var !addEventListener;
//   var visit#1;

  //Task # 3

    document.writeln("<h2> A heading stating Rules for naming JS variables </h2><br><br>");
    document.write("Variable names can only contain number, $, and _ . For example $my_1stVariable<br>");
    document.write("Variables must begin with a letter, $ or _. For example $name, _name or name <br>");
    document.write("Variable names are case sensitive <br>"); 
    document.write("Variable names should not be JS keywords<br>"); 
  
  
    // Chapter # 5
    // Task # 1
    var a =5;
    var b = 3;
    var add = a + b;
    document.write("The sum of "+ a + " & " + b + " is " + add + "<br>");

        // Task # 2
        //Subtract
        var a =5;
        var b = 3;
        var sub = a - b;
        document.write("The subtract of "+ a + " & " + b + " is " + sub + "<br>");
    
                //Multiply
                var a =5;
                var b = 3;
                var mul = a * b;
                document.write("The multiply of "+ a + " & " + b + " is " + mul + "<br>");

                //Divison
                var a =5;
                var b = 3;
                var div = a/b;
                document.write("The divison of "+ a + " & " + b + " is " + div + "<br>");

            //Modulus
            var a =5;
            var b = 3;
            var mod = a%b;
            document.write("The modulus of "+ a + " & " + b + " is " + mod + "<br>");

            //Task # 3
            var d;
            document.write("The Value after variable declaration is Undefined <br>");
            d = 5;
            document.write("The Value after intialized is " + d + "<br>");
            d++;
            document.write("The Value after increment is " + d + "<br>");
            var e = d + 7;
            document.write("The Value after addition is " + e + "<br>");
            e--;
            document.write("The Value after decrement is " + e + "<br>");
            var f= e%3;    
            document.write("The reminder is " + f + "<br>");

              //Task # 4
              
              var ticket = 600;
              var pur = prompt("Enter the no of ticket you want");
              var cost = ticket * pur ;
              document.write("the total cost to buy "+ pur +" Movie ticket is "+ cost + " PKR<br>");


              //Task # 5
              document.write("<h2> Table of 4 </h2>");
                var i;
                var g=4;

              for (i=1; i<=10; i++) 
              {
                document.write(g +" * "+ i +" = " + g*i + "<br/>");
              }

              //Task # 6

              var c = prompt("enter the temp you want to convert in `F :");
              var f = (c * 9/5) + 32;
              document.write(c +"`C is "+ f +"`F <br>");
            
              var f = prompt("enter the temp you want to convert in `C :");
              var c = (f-32) * (5/9);
              document.write(f +"`F is "+ c +"`C <br>");

              //Task # 7
              var item1 = 3;
              var item2 = 7;
              var orqt1 = 650;
              var orqt2 = 100;    
              var shipping_charge= 100;

              var total= item1 + item2 +orqt1 +orqt2 +shipping_charge;

              document.write("Price of item 1  is" + item1 + "<br>");
             document.write("Price of item 2 is" + item2 + "<br>");
             document.write("Ordered quantity of item 1 is" + orqt1 + "<br>");
             document.write("Ordered Quantity of item 2 is" + orqt2 + "<br>");
             document.write("Shipping charges " + shipping_charge + "<br><br>");

              document.write("<h3>Total cost of your order is " + total + "<br><br><br></h3>")

              //Task # 8
              var obt= 804;
              var total = 980;
              var per = (obt/total) * 100;
             document.write("<h2>Marks Sheet</h2>");
             document.write("Obtain marks are " + obt + "<br>");
             document.write("total marks are " + total + "<br>");
             document.write("total per is " + per + "<br><br><br>");


            //Task # 9 
            var usd= 10;
            var rad=  25;
             var con1 = usd * 104.80;
             var con2 = rad * 28;

            var pkr = con1 + con2 ;
            document.write("Currency <br>")
            document.write("Total Currency in PKR is " + pkr + "<br><br>");

              //Task # 10
              var a = 5;
              var q =  (a + 5) * 10 / 2;
              document.write("Result is "+ q +"<br><br>");
              
              //Task # 11
              var cy= 2020;
              var by = 1992;
              var age = cy-by;
              
              document.write(" Current year is : "+ cy + "<br>");
              document.write(" Your Birth year is : "+ by + "<br>");
              document.write(" Your current age is : "+ age + "<br><br><br>");
              

              //Task  # 12
              var rad = 20;
              var cir = 2 * 3.142 * rad;
              var area = 3.142* rad * rad;
              document.write("Radius of circle is "+ rad + "<br>");
              document.write("Circumference of circle is "+ cir + "<br>");
              document.write("Area of circle is " + area + "<br><br><br>");

              //Task # 13

              var favsnk= "Choclate chip ";
              var currage = 15;
              var maxage = 65;
              var perday= 3;
              var total= maxage - currage * 3;
              document.write("Favourite Snack is : "+ favsnk + "<br>");
              document.write("Your Age is : "+ currage + "<br>");
              document.write("Maximun Age is : "+ maxage + "<br>");
              document.write("Average Snack per day "+ per + "<br>");
              document.write("You will need "+ total +" to last you until the ripe old age of" + maxage +"<br>");



              
