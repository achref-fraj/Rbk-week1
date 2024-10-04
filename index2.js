////////////////////-------P2-------///////////////////


function square(number){
    return number**2
}
square(2)


//////////////////////////////////////////

function cube(number){
    return number**3
}
cube(2)
////////////////////////////////


function charAtIndex(string, number) {
    return string.charAt(number)
 }

 charAtIndex("Hello", 2)

 /////////////////////////////////////////

 function addFourNums(num1, num2, num3, num4) {
    return num1+ num2+ num3+ num4
 }  
 addFourNums(1,2,3,4)
 ////////////////////////////////////////////
 
 
 function  perimeterRect(width,length) {
    return 2*(width+length)
}
perimeterRect(5,5)

/////////////////////////////////////////


function   areaRect(width,length) {
    return width*length
}
areaRect(2,2)

////////////////////////////////////////

function perimeterTriangle(a,b,c) {
    return a+b+c
}
perimeterTriangle(1,3,2)

//////////////////////////////////////////




function areaTriangle(a,b) {
    return 0,5*a*b
}

areaTriangle(1,5)

//////////////////////////////////////////


function  tripleArea(width,length) {
    return width*length*3
}

tripleArea(5,5)
 ////////////////Q2 Advanced /////////////////////




 function areaOfCircle(radius) {
    return Math.PI*radius**2
 } 

 areaOfCircle(3)

  /////////////////////////////////////




 /////////////////////////Question5:///////////////////////
 function totalSecondsConverter(hours, minutes, seconds) {
    return hours*3600+minutes*60+seconds*1
  }
  totalSecondsConverter(0, 3, 4)
///////////////////////////////////////////////////////////

function convertToKilometers(miles) {
    return miles*1.60934
 }  

 convertToKilometers(5)

 //////////////////////////////////////////////////////////


 function square1(x) {
    return x * x
}
square1(1)

function square2(x) {
    return x * x
}

square1(2)

function square3(x) {
    return x * x
}

square1(3)

 //////////////////////////////////////////////////////////


 function capitalize(name) {
    return name.toUpperCase()
   }
   capitalize("achref")



//////////////////Methode 1 /////////////////

function largest(number1, number2) {
   return Math.max(number1, number2)
}

largest(4, 16)
/////////////////Methode 2///////////////
function largest(number1 , number2) {
    if (number1>number2)   
       return number1
    else  
    return number2
 }
    
 largest(1,2)


 
///////////////////////////////////////////////////////
