////////////////////////P3/////////////////

function returnTrue(){

    
        return true
    
  }

  returnTrue()
///////////////////////////////////////////////

function returnfalse(){

    
        return false
    
  }

  returnfalse()

  ///////////////////////////////////////////////

  function isEven(number) { 
    if (number % 2 === 0)
     return true  
    
    return false
   }

   isEven(2)
///////////////////////////////////////////////

function isOdd(number) { 

    if (number % 2 !== 0)
        return true  
       
       return false
    
   }
   isOdd(3)

///////////////////////////////////////////////

function isGreaterThan10(number) { 
    if (number>10)   
        return true
     else  
     return false

   }

   isGreaterThan10(5)


   ///////////////////////////////////////////////
  
   function isLessThan30(number) {

    if (number<30)   
        return true
     else  
     return false
    
   }
   isLessThan30(5)


   ///////////////////////////////////////////////

   function isEqualTo10(number) {

    if (number==10)   
        return true
     else  
     return false
    
   } 
   isEqualTo10(1) 

    ///////////////////////////////////////////////

    function isGreaterOrEqualTo15(number) {

        if (number>=15)   
            return true
         else  
         return false

       
        
       }

       isGreaterOrEqualTo15(0)

        ///////////////////////////////////////////////

        function isLessOrEqualTo8(num1) { 
 
            if (number<=8)   
                return true
             else  
             return false
    
            
           } 
           isLessOrEqualTo8(2)

           ///////////////////////////////////////////////

                                                      /****More Practice****/
     ////////////////////////////////////////////// 

     function isLessThan(num1, num2) {
        if (num1<num2)
            return true
        return false

        
    
    }
    isLessThan(2, 3)
     //////////////////////////////////////////////

     function isEqualTo(num1, num2) { 

         if (num1==num2)
            return true 
        return false 
        
       }

       isEqualTo(3, 3)

    //////////////////////////////////////////////

    function isOldEnoughToDrive(age) {

        if (age>=18)
        return true 
    return false
        
       } 

       isOldEnoughToDrive(12)
        //////////////////////////////////////////////

        function isValidPassword(password) {

            if (password.length>=8)
                return true 
            return false
           
            }

            isValidPassword("hello")

         //////////////////////////////////////////////

         function longerString(string1, string2) {
          if (string1>string2)
            return string1
        return string2 
            

         }
         longerString("cat", "kitty")

          //////////////////////////////////////////////

          function opposite(boolean) {
            return !boolean
        }
        
             opposite(true)


             //////////////////////////////////////////////



             function rectAreaGreaterThan50(length, width) {
                if (length*width>=50)
                    return true 
                return false
                 }
                 rectAreaGreaterThan50(10, 6)


                 
             //////////////////////////////////////////////


             function budgetStatus(number) {  

                if(number>250)
                    return "over budget"
                return "under budget"

                  }

                  budgetStatus(260)



                       
             //////////////////////////////////////////////
             function isTriangle(side1, side2, side3) { 
                if (side1+side2>side3)
                    return true 
                return false
                
                 }
                 isTriangle(3, 4, 5)
//////////////////////////////////////////////


                 function getMax(number1 , number2 , number3) {
                    if (number1>number2 && number1>number3)
                        return number1 
                    else if (number2>number1 && number2>number3)
                        return number2
                    else (number3>number1 && number3>number2)
                    return number3
                       

                            
                 }  
                 getMax(11 , 5, 4)

//////////////////////////////////////////////
function isLeapYear(year) {


  }

             
             //////////////////////////////////////////////




         ////////////////////// KHati lhesba ////////////////////////
         function fc(nbr){
            if (!(nbr>10) && (nbr %2 ==0))
                return true 
            else 
            return false

         }

        fc(nbr)

        /////////////////////////&&Logical Operators & More conditionals&&///////////*P1*//////////
        console.log(true )
     // the answer  true

     console.log(!true)
      // the answer  false

      console.log(!false)
       // the answer  true
        
        //////////////////////////////////////////////
        
        console.log(true && true )
        // the answer  true

        console.log(true && false )
        // the answer  false

        console.log(false && true )
        // the answer  false

        console.log(false && false )
        // the answer  false



        
        //////////////////////////////////////////////



        console.log(true || true )
        // the answer  true

        console.log(true || false )
        // the answer  true

        console.log(false || true )
        // the answer  true

        console.log(false || false )

        // the answer  false






        
        //////////////////////////////////////////////
        console.log(3 > 4 )

        // the answer  false

        console.log(4 > 3 )

        // the answer  true

        console.log(!(4 > 3)  )

        // the answer  false


        console.log(4 <= 4 && 5 < 6)

        // the answer  true


        console.log(3 < 4 && 8 < 12 )

        // the answer  true

        console.log(3 === 3 || 4 === 4 )

        // the answer  true

         

         console.log(3 === 2 || 4 === 4 )

         // the answer  true


               
        //////////////////////////////////////////////

        console.log(true && (true || false))

        // the answer  true

        console.log(false && (true && true) )

        // the answer  false

        console.log((true || false) && (true || false) )

        // the answer  true

        console.log(3 > 2 || (false && true) )

        // the answer  true


        console.log( 4 > 5 || (2 < 3 || 3 > 5) )

          // the answer  true



        //////////////////////////////////////////////

        function opposite(boolean) {
            return (!boolean)
         }  
         opposite(true) 

         
          // the answer  false
      
        //////////////////////////////////////////////

        function greaterThan5(num1, num2) {
            if (num1>5 || num2>5) 
                return true
            return false
         }  
        greaterThan5(1, 6)  //true 
        greaterThan5(5, 5)  //false 
        greaterThan5(1, 4)  //false


        //////////////////////////////////////////////


        function allGreaterThan5(num1, num2) {
            if (num1>5 && num2>5) 
                return true
            return false
         }  
         allGreaterThan5(6, 7)  //true
         allGreaterThan5(2, 7)  //false



        //////////////////////////////////////////////


        function largerThan5AndLessThan20(number) {
            if (number>5 && number<20)
                return true
            return false
         }  

         largerThan5AndLessThan20(12) // true 
         largerThan5AndLessThan20(21)  //false 
         largerThan5AndLessThan20(5)  //false

        //////////////////////////////////////////////




        function not6AndLessThan10(number) {
            if(number!=6 && number<10)
                return true
            return false
            
         }  
         not6AndLessThan10(6) //false 
         not6AndLessThan10(7) //true 
         not6AndLessThan10(10) //false

        //////////////////////////////////////////////
        function largerThan3AndLessThan18(num1, num2, num3) {
            if (num1 >= 3 && num1 < 18 && num2 >= 3 && num2 < 18 && num3 >= 3 && num3 < 18) {
                return true
            }
            return false
        }
largerThan3AndLessThan18(2, 4, 20)  //false 
largerThan3AndLessThan18(5, 6, 7) //true 
largerThan3AndLessThan18(3, 6, 18) //false
         
        //////////////////////////////////////////////


        function cloudyAndRainy(string1, string2) {
          if(string1=="cloudy" && string2=="rainy")
            return true
        return false
         }  
         cloudyAndRainy("cloudy", "rainy") // true 
         cloudyAndRainy("clear", "rainy") //false

         //////////////////////////////////////////////

// that takes a type of weather (as a string) 

         function weatherActivities(weather) {
            if (weather === "rainy") {
                return "hot chocolate"

            } 
            else if (weather === "sunny") {
                return "running"
            }
             else if (weather === "snowy") {
                return "skiing"
            }
             else if (weather === "windy") {
                return "flying a kite"
            }
             else {
                return "indoor reading"
            }
        }


         weatherActivities("rainy") // “hot chocolate” 
         weatherActivities("sunny") // “running”




          //////////////////////////////////////////////


          function evenAndGreaterThan7(number) {
            if (number > 7 && number % 2 === 0) {
                return true
            }
            return false
        }
         evenAndGreaterThan7(6) //false 
         evenAndGreaterThan7(8) //true 
         evenAndGreaterThan7(9) //false




                    //////////////////////////P2P2P2P2P2P2P2P2P////////////////////

          function areValidCredentials(name, password) {
            if(name>3 && password>=8)
                return true 
            return false
            
                        
               } 

            areValidCredentials("hi", "password123")// -> false ;
            areValidCredentials("Nancy","123") //-> false ;
            areValidCredentials("Ahmed", "password") //-> true

            /////////////////////////I have a mistakes in Question number 2 in the P2/////////////////////

            function findMinLengthOfThreeWords(string1, string2, string3) {
              if (string1.length<string2.length && string1.length<string3.length )
                return string1.length

            else if (string2.length<string1.length  && string2.length<string3.length)
                return string2.length

            else if (string3.length<string1.length && string3.length<string2.length)
                return string3.length

             }  

             findMinLengthOfThreeWords("hi", "hello", "marhaba")//  2 

             findMinLengthOfThreeWords("1234", "5678", "12345678")//  4


            
            //////////////////////////////////////////////

            function findMinLengthOfThreeWords(string1, string2, string3) {
                if (string1.length>string2.length && string1.length>string3.length )
                  return string1.length

              else if (string2.length>string1.length && string2.length>string3.length)
                  return string2.length

              else if (string3.length>string1.length && string3.length>string2.length)
                  return string3.length
  
               }  
               findMinLengthOfThreeWords("hi", "hello", "marhaba")//  7 
               findMinLengthOfThreeWords("1234", "5678", "12345678")//  8




            
            ////////////////////////****** */ //////////////////////

            function guessMyNumber(number) {
               
                if (number === Math.floor(Math.random())) 
                    return "You guessed my number!"
                 else 
                    return "Nope! That wasn’t it!"
                
             }  
             guessMyNumber(5)   // -> “You guessed my number!” 
             guessMyNumber(5)   //-> “Nope! That wasn’t it!”



            
            //////////////////////////////////////////////

            function or(statement1, statement2) {
                return !(!statement1 && !statement2)
            }
             or(true, true) //-> true 
             or(true, false) //-> true 
             or(false, true) //-> true 
             or(false, false) //-> false 
             or(1 < 3, 5 > 7) //-> true




            //////////////////////////////////////////////

            function and(statement1, statement2) {
                return !(statement1 || statement2)
            }

            and(true, true) //-> true 
            and(true, false)// -> false 
            and(false, true)// -> false 
            and(false, false)// -> false 
            and(1 < 3, 5 > 7) //-> false
            and(1 < 3, 7 > 5) //-> true





            //////////////////////////////////////////////




            function shirtWidth(width) {
                if (width >= 20 && width < 30) 
                    return 'You should select a size S'
                 
                else if (width >= 30 && width < 40) 
                    return 'You should select a size M'
                 
                else if (width >= 40 && width < 50) 
                    return 'You should select a size L'
                
                 else 
                    return 'You should select a different shirt'
                
            }
            
             shirtWidth(25) //-> “You should select a size S” 
             shirtWidth(35) //-> “You should select a size M” 
             shirtWidth(45) //-> “You should select a size L” 
             shirtWidth(100) //-> “You should select a different shirt”






            //////////////////////////////////////////////


            function playerOneChoice(choice) {
                if (choice === "rock") 
                    return "Player 1 chose rock"
                
                 else if (choice === "paper") 
                    return "Player 1 chose paper"
                 
                else if (choice === "scissors") 
                    return "Player 1 chose scissors"
                
                 else 
                    return "Player 1 has chosen poorly!"
                
            }



            playerOneChoice("rock") //-> “Player 1 chose rock” 
            playerOneChoice("paper")// -> “Player 1 chose paper” 
            playerOneChoice("scissors") //-> “Player 1 chose scissors” 
            playerOneChoice("gun") //-> “Player 1 chose poorly”
            //////////////////////////////////////////////

            function convertScoreToGrade(score) {
                if (score > 100 || score < 0) 
                    
                    return 'Invalid Score'
                 else if (score >= 90)
                    return 'A'

                else if (score >= 80) 
                    return 'B'

                 else if (score >= 70) 
                    return 'C'

                 else if (score >= 60) 
                    return 'D'

                 else 
                    return 'F'
                
            }

            convertScoreToGrade(91) //-> “A” 
convertScoreToGrade(80) //-> “B” 
convertScoreToGrade(110)// -> “Invalid Score”








            //////////////////////////////////////////////


            function convertScoreToGradeWithPlusAndMinus(score) {
                if (score > 100 || score < 0) 
                    return 'Invalid Score';

                 else if (score >= 95) 
                    return 'A+'

                 else if (score >= 90) 
                    return 'A-'

                 else if (score >= 87) 
                    return 'B+'

                 else if (score >= 80) 
                    return 'B-'

                else if (score >= 77) 
                    return 'C+'

                 else if (score >= 70) 
                    return 'C-'

                 else if (score >= 67) 
                    return 'D+'

                 else if (score >= 60) 
                    return 'D-'

                 else 
                    return 'F'
                
            }
            






            //////////////////////////////////////////////

            function isItTruthy(value) {
                if (value) 
                    return 'Input is truthy'

                 else 
                    return 'Input is falsy'
                
            }
            isItTruthy("anything") //-> “Input is Truthy” 
            isItTruthy() //-> “Input is Falsy” 
            isItTruthy(0)// -> “Input is Falsy” 
            isItTruthy("") //-> “Input is Falsy” 
            isItTruthy(false)// -> “Input is Falsy”




            //////////////////////////////////////////////

            function checkArea(area) {
                return area > 48 && area < 100
            }

            checkArea(50)// -> true 
            checkArea(100)  // -> false



             //////////////////////////////////////////////
             function checkMultiply(num1, num2) {
               if (num1*num2>50 || num1*num2>150 )
                return true 
            return false
             }  
             checkMultiply(10, 6) //-> true 
             checkMultiply(7, 7) //-> false






              //////////////////////////////////////////////































  