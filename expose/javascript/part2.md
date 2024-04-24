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
  - A. ```let name = student['name'] 
  - B. ```let gradYear = student['Grad Year'];
  - C. ```student.greeting();
  - D. ```let favoriteTeacherName = student['Favorite Teacher'].name;
  - E. ```let courseOne = student.courseLoad[0];





