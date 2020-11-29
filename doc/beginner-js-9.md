# [Declaring variable: 9 of 51](https://youtu.be/JNIXfGiDWM8?list=PLlrxD0HtieHhW0NCG7M536uHGOtJ95Ut2)

[![Declaring variables [9 of 51] | Beginner's Series to JavaScript](http://img.youtube.com/vi/JNIXfGiDWM8/0.jpg)](http://www.youtube.com/watch?v=JNIXfGiDWM8 "Declaring variables [9 of 51] | Beginner's Series to JavaScript")

* Three ways to declare variables in JavaScript:
    + _var_
    + _let_
    + _const_
    + For example:
    ```javascript
    var one = 1;
	let two = 2;
    const three = 3;
    ```
* Each Keyword has its own purpose!
    + _var_
        - Original way to declare variables in JavaScript
		- A function scoped variable declaration, meaning that the variable, when defined, is available anywhere within that function.
		- The variable is even available in the function before it was declared.
		- The variable can be changed within the scope, meaning it is a immutable variable type. It can be reassigned, its data type can be changed
    + _let_
        - Similar to var
        - A block scoped variable declaration, meaning that the variable is only available within a block that has been denoted with a set of open and closed curly brackets
        - can be changed in scope
        - only usable after the declaration of the variable
    + _const_
        - Block scoped, like let
        - cannot be chaned
        - when you have set a variable that you have defined as a _const_, meaning a constant value, you cannot change what that assignment is
        - only available after declaration
* What to use when?
    + _const_ by default
        - use as the "go-to" variable declaration
        - makes life easier for yourself and others when looking at your code, as it cannot be changed throughout the program and it will only have one value.
        - lower chance for bugs
    + _let_ in loops
        - still very useful
        - use inside of a block scope when it is desirable to create a new variable every time the loop happens.
    + _var_
        - partially obselete, as _let_ and _const_ basically cover all of its use cases, and _let_ and _const_ remove some of the issues with using a _var_ type variable declaration