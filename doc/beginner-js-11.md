# [Working with strings [11 of 51] | Beginner's Series to JavaScript](https://www.youtube.com/watch?v=dP1Er2BfVmo&list=PLlrxD0HtieHhW0NCG7M536uHGOtJ95Ut2&index=11)

[![Working with strings [11 of 51] | Beginner's Series to JavaScript](http://img.youtube.com/vi/dP1Er2BfVmo/0.jpg)](http://www.youtube.com/watch?v=dP1Er2BfVmo "Working with strings [11 of 51] | Beginner's Series to JavaScript")

Strings
* The data type that represents textual elements on the web
* Could be anything from the output of `console.log` to text on a web page

Concatenation
* Used to format text before it reaches its final destination

## What is String Concatenation?
Combining two or more strings
* Feature that makes it easier to format text
* Can join a combination of variables and/or actual strings (also known as _string literals_)
* Concatenating strings will make a new string

Done with a + operator
* The addition operator is not just for numbers...

### Using the + operator
```javascript
let str1 = "Hello";
let str2 = "World!";

console.log(str1 + str2);
console.log(str1 + "Big" + str2)
```
Output:
```
HelloWorld!
HelloBigWorld
```
Adding spaces:
```javascript
let str1 = "Hello ";
let str2 = "World!";

console.log(str1 + str2);
console.log(str1 + "Big " + str2)
```
Output:
```
Hello World!
Hello Big World!
```

### Be careful with numbers!
* Numbers and strings both use the _+_ operator
* Always keep everything the same data type

```javascript
let num1 = 1;
let num2 = "1";

console.log(num1 + num2);
console.log (num1 + 1)
```
Output:
```
11
2
```