# [Comments [7 of 51] | Beginner's Series to JavaScript](https://youtu.be/Wm89TVXGflk?list=PLlrxD0HtieHhW0NCG7M536uHGOtJ95Ut2)

[![Comments [7 of 51] | Beginner's Series to JavaScript](http://img.youtube.com/vi/Wm89TVXGflk/0.jpg)](http://www.youtube.com/watch?v=Wm89TVXGflk "Comments [7 of 51] | Beginner's Series to JavaScript")

What are code comments?
* Comments are lines in your code that you can see, but that do not get executed

* Single line comments
    + Add two // to the beginning of a line
    + Most editors will change the color of the line to grey
    + only applies to the current line - Any subsequent lines will not be commeneted out.
    + For example:
    ```javascript
    // console.log(I am commented out");
    console.log("But I'm not!")
    ```
* Multi-line comments
    + Designed to comment out multiple lines
        - Does not require comment slashes on every line add a "/*" to the start of the comment and a */ to the end of it
        - Any text within those characters will be commented out
    + for example:
    ```javascript
    /*
    console.log("I am commented out.")
	console.log("Me to!)
    */
    console.log("Not I")
    ```
* Comments in VS Code
    + Automatically comments out lines with a special keyboard shortcut.
        - Linux/Windows: ctrl+/
        - macOS: cmd+/
        - toggles comments off/on
* Words from the wise
    + "If your code needs a comment to explain what it does, it's probably too complicated." - Burke Holland, who once put comments on literally everything.
    + Take it easy with comments: To keep your code clean, try to steer clear of comments and instead make your code easier to read.