// Chapter 6 to 9
// Task # 1

var a =prompt("Enter any number");


document.write("<h3>Results:</h3>" +"<br>");
document.write("The value of a is "+ a +"<br><br>");

document.write("=================================<br><br><br>");

++a;

document.write("The value of ++a is : "+ a +"<br>");
document.write("Now the value of a is : "+ a +"<br><br><br>");


document.write("The value of a++ is : "+ a +"<br>");
a++;
document.write("Now the value of a is : "+ a +"<br><br><br>");

--a
document.write("The value of --a is : "+ a +"<br>");
document.write("Now the value of a is : "+ a +"<br><br><br>");


document.write("The value of a-- is : "+ a +"<br>");
a--;
document.write("Now the value of a is : "+ a +"<br><br><br>");


// Task # 2

var a = 2;
var b = 1;
var result= --a - --b + ++b + b--;

document.write("The value of a is : "+ a +"<br>");
document.write("The value of b is : "+ b +"<br>");
document.write("The result is : "+ result +"<br><br><br>");


// Task # 3

var name = prompt("Please Enter your Name");
alert("Hello Mr : " + name+"<br><br>");




            // Task # 5

                var i;
                var g= parseInt(prompt("Enter the no of table you want to print"));
                if (g == 0)
                {
                    g = 5;
                    document.write(" Print Table of : " + g +"<br><br>");

              for (i=1; i<=10; i++) 
              {
                document.write(g +" * "+ i +" = " + g*i + "<br/>");
                
              }
            
                }
        
                else{
            document.write(" Print Table of : " + g +"<br><br>");

              for (i=1; i<=10; i++) 
              {
                document.write(g +" * "+ i +" = " + g*i + "<br/>");
              }
            }
            document.write(""+"<br><br>");


            //Task # 6

            var sub1 = prompt("ENTER THE NAME OF FIRST SUBJECT");
            var sub2 = prompt("ENTER THE NAME OF SECOND SUBJECT");
            var sub3 = prompt("ENTER THE NAME OF THIRD SUBJECT");
            var total = 100;
            var obt1 = prompt("ENTER THE MARKS OBTAIN IN FIRST SUBJECT");
            var obt2 = prompt("ENTER THE MARKS OBTAIN IN SECOND SUBJECT");
            var obt3 = prompt("ENTER THE MARKS OBTAIN IN THIRD SUBJECT");
            var totobt = obt1+obt2+obt3;

            var per1 = (obt1/total)*100;
            var per2 = (obt2/total)*100;
            var per3 = (obt3/total)*100;
            var toper = per1+per2+per3;

            document.write("Subject"+"  "+"Total Marks"+ "   "+ "Obtain Marks"+"   "+" Percentage"+"<br><br>");
            document.write(sub1+ "            "+ total + "            "+ obt1 + "               " +"            "+ per1 +"<br>");
            document.write(sub2+ "            "+ total + "            "+ obt2 + "               " +"            "+ per2 +"<br>");
            document.write(sub3+ "            "+ total + "            "+ obt3 + "               " +"            "+ per3 +"<br>");
            document.write("          " + "             "+ total*3  + "              "+ totobt + "                        " +"          "+ toper +"<br>");
       
            document.write(""+"<br><br>");
            document.write(""+"<br><br>");
            
