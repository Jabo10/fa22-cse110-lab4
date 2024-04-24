1. 3 is printed this is because even though i is out of loop it is a var so it can be used in the entire function.
2. 150 was printed I believe because of the environment I am on and it is treating it as if discountedPrice is outside of the for loop
3. 150 was printed because var finalPrice was declared in the function before the loop so it carries throughout the entire function.
4. Nothing is outputed I believe because we did not include consol.log anywhere so there is no output to the terminal if we did console.log(discountPrices([100, 200, 300], 0.5)) it would work as intended I think.
5. ReferenceError: i is not defined. i is declared with let meaning it goes out of scope when it is not in the for loop.
6. ReferenceError: discountedPrice is not defined. since it is declared let and should only be accessible in the for loop again block scope.
7. 150 is printed, finalPrice is a let and it is not declared in the for loop so it is fine to access within the function.
8. nothing is printed because there is no log.console with discountedPrices inside then it would print but no errors.
9. ReferenceError: i is not defined. i is declared let in the for loop meaning it is only usable in the for loop not outside of it in this case.
10. 3 is printed because length is a const and is declared in the function meaning it can be used in the function throughout as long as it is not changed.
11. nothing is printed because there is no console.log and there is no errors
12.  
      - A. let name = student['name'];
      - B. let gradYear = student['Grad Year'];
      - C. student.greeting();
      - D. let favoriteTeacherName = student['Favorite Teacher'].name;
      - E. let courseOne = student.courseLoad[0];
13.
      - A. '32' - 2 is converted to a string and concatenated with the string '3'.
      - B. 1   - '3' is converted to an integer then 2 gets subtracted.
      - C. 3   -  null is converted to 0 then 3 is added 
      - D. '3null'   - null is converted to a string 'null' and concatenated with string '3'.
      - E. 4   - true is converted to 1 then is added to 3.
      - F. 0   - false is converted to 0 and null is also converted to 0 then added 
      - G.'3undefined'  - undefined is converted to string 'undefined' and concatenated to '3'.
      - H. NaN   - undefined will not be a valid number which turns it to NaN which means Not a Number 
14.
      - A. true   -  '2' is converted to a number and then gets compared to 1 
      - B. false  -  the string '2' is compared to '1' and '2' is greater than '1'.
      - C. true   -  the string '2' is converted to a number then compared to 2 
      - D. false  - no conversion happens and they are not the same type so not equal.
      - E. false  - true is converted to 1 and 1 is not equal to 2.
      - F. true   - anything that isnt 0 I think is true so so boolean(2) is true
15. == is for checking if two values are unique and will convert one value to the same type before comparing in what is known as type coercion. === is also for the equality but does not allow for the type conversion so if they are different types then they will return false.
17. It first gets called by modifyArray([1, 2, 3], doSomething); which passes in an array and calls doSomething. First in modifyArray it will create a new empty array newArr then will enter a for loop that will go through the entire input array and for each element in the array it will call doSomething which will take the current element as its argument. In doSomething this will multiply it by 2 then the result will be pushed into this new array we established as newArr then when the loop is done it will return newArr. This will result in newArr[2,4,6] however nothing is printed so when you run the code nothing will output. 









