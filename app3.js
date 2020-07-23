

// e

/* var colorname = [ 'A', 'B', 'D', 'E' ];
colorname.insert(2, 'C');

 var fLen = colorname.length;

 var i;
text = "<ul>";
for (i = 0; i < fLen; i++) {
  text += "<li>" + colorname[i] + "</li>";
}
text += "</ul>";

document.write(text); 
 

var list = ["foo", "bar"];
list[2] = "baz"; // add element "baz" to the index position 2 in the array
list[3] = "qux";



var i;
text = "<ul>";
for (i = 0; i < fLen; i++) {
 text += "<li>" + list[i] + "</li>";
}
text += "</ul>";  


//Task # 11
var cities = ["Karachi", "Lahore", "Islamabad", "peshawar", "Quetta "];

var fLen = cities.length;

var i;
text = "student Score is <br/>  <ul>";
for (i = 0; i < fLen; i++) {
 text += "<li> " + cities[i] + "</li>";
}
text += "</ul>";

document.write(text);



//Task # 13
// check

//var a = prompt("Enter your username : ")


//Task # 14
var a = prompt("enter the number");
var str = ['The', 'best', 'things', 'in', 'life', 'are free'];
var patt = a;
var res = patt.test(str);
document.write("User fond");
*/
/*
  //Task # 6
  //check
  var x = new Date();
  var d = x.getDate();
  var z = d.getMilliseconds();
  var m = new Date("July 01, 1970 00:01:00:526");
  var n = m.getMilliseconds();
  var curmi = (z -n);
  var o = new Date("July 01, 1970 00:01:00:526");
  var p = o.getMinutes();
  var f = (z*60);
  var curm = (f-p);
  document.write("Current Date is : "+x+"<br/>");
  document.write("Elapsed Millisecond since  Jan. 1, 1970 is : "+ curmi  +"<br/>");
  document.write("Elapsed Miniute since  Jan. 1, 1970 is : "+curm+"<br/>");
*/



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