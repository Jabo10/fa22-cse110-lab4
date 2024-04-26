1. the bug was that instead of adding the numbers it was concatonating the characters as a string so 1 + 2 was "12"
2. I fixed this by changing line let result = num1 + num2; to  let result = parseFloat(num1) + parseFloat(num2); this way it ensures both num1 and num2 are numbers. 
