// JavaScript source code
function validatefname()
{
var firstname=document.getElementById("fname").value;
var rel=/^[a-zA-Z\s\-]{2,20}$/;
if(rel.test(firstname))
{
document.getElementById("fnameprompt").style.color="green";
document.getElementById("fnameprompt").innerHTML="Valid";
}
else
{
document.getElementById("fnameprompt").style.color="red";
document.getElementById("fnameprompt").innerHTML="Please enter a valid name";
}
}
function validatelname()
{
var lastname=document.getElementById("lname").value;
var rel=/^[a-zA-Z\s\-]{1,20}$/;
if(rel.test(lastname))
{
document.getElementById("lnameprompt").style.color="green";
document.getElementById("lnameprompt").innerHTML="Valid";
}
else
{
document.getElementById("lnameprompt").style.color="red";
document.getElementById("lnameprompt").innerHTML="Please enter a valid name";
}
}
function validatepassword()
{
var password=document.getElementById("passw").value;
var rel=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
if(rel.test(password))
{
document.getElementById("passwordprompt").style.color="green";
document.getElementById("passwordprompt").innerHTML="Valid";
}
else
{
document.getElementById("passwordprompt").style.color="red";
document.getElementById("passwordprompt").innerHTML="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters";
}
}
function validatephone()
{
var phoneno=document.getElementById("phone").value;
var rel=/^\d{10}$/;

if(rel.test(phoneno))
{
document.getElementById("phoneprompt").style.color="green";
document.getElementById("phoneprompt").innerHTML="Valid";
}
else
{
document.getElementById("phoneprompt").style.color="red";
document.getElementById("phoneprompt").innerHTML="Please enter a valid phone number";
}
}
function validatestreet()
{
var sname=document.getElementById("street").value;
if(sname.length==0)
{
document.getElementById("streetprompt").style.color="red";
document.getElementById("streetprompt").innerHTML="Please enter your Street name";
}
else
{
document.getElementById("streetprompt").innerHTML=" ";
}
}
function validatecity()
{
var cname=document.getElementById("street").value;
if(cname.length==0)
{
document.getElementById("cityprompt").style.color="red";
document.getElementById("cityprompt").innerHTML="Please enter your City";
}
else
{
document.getElementById("cityprompt").innerHTML=" ";
}
}
function validatestate()
{
var stname=document.getElementById("state").value;
if(stname.length==0)
{
document.getElementById("stateprompt").style.color="red";
document.getElementById("stateprompt").innerHTML="Please enter your State";
}
else
{
document.getElementById("stateprompt").innerHTML=" ";
}
}
function calc()
{
var q1=document.getElementById("quantity1").value;

var q2=document.getElementById("quantity2").value;
var q3=document.getElementById("quantity3").value;
var sum=0;
var amnt1;
var amnt2;
var amnt3;
var price=500;
var cq1=document.getElementById("shirt");
var cq2=document.getElementById("sshirt");
var cq3=document.getElementById("sneakers");
if(cq1.checked==true)
{
amnt1=q1*price;
sum=sum+amnt1;
}
if(cq2.checked==true)
{
var amnt2=q2*price;
sum=sum+amnt2;
}
if(cq3.checked==true)
{
var amnt3=q3*price;
sum=sum+amnt3;
}
document.getElementById("summary").innerHTML="<h2><strong>ORDER SUMMARY:</strong></h2>";
document.getElementById("summary").innerHTML+="<strong>Total : Rs.</strong>"+sum;
}
