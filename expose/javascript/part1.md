1. values added:  20
2. final result:  20
3. values added:  20
4. ReferenceError: result is not defined. This happens because let is block scoped meaning result is not defined in the next block and cannot be accessed 
5. TypeError: Assignment to constant variable. Since result is a constant variable you cannot have it changed from what it was initially which is zero.
6. This is never reached because there was already an error but if you removed the error with a comment from #5 you would get ReferenceError: result is not defined since it is also block scoped and is being reached out of scope.
