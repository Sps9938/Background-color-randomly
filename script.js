const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
        //Hex is a 6-digit, 24 bit, hexidecimal number that represents 
        //Red, Green, and Blue.
    }
    return color;
}
//bit, hexidecimal number that
// represents Red, Green, and Blue.
/*
    The variable hex contains all the characters (digits 0-9 and letters A-F) used in the hexadecimal
     system, which is commonly used to represent colors in CSS. Hexadecimal colors are usually written 
     with a # followed by six characters, where each pair represents the intensity of red, green, and 
     blue in the color (using values from 00 to FF, which in decimal is 0 to 255).

Here's how it works:

1. hex[Math.floor(Math.random() * 16)]:

a. Math.random() generates a random number between 0 and 1.
b. Multiplying it by 16 gives a random number between 0 and 15 (not inclusive).
c. Math.floor() rounds it down to an integer between 0 and 15.
d. This integer is used to select a character from the hex string.

2. The for loop runs six times to generate a 6-character string, each character being randomly selected
from the hex string. The result is a string like BF8642, which forms part of the hex color code.

How does #BF8642 get generated?
1. Each time the loop runs, a random character from hex is selected and added to the color string.
2. Let's say the random numbers generated are 11 (B), 15 (F), 8, 6, 4, and 2. Each number corresponds to 
its respective
character from the hex string.
The final color string will be #BF8642.
So, the color variable builds a valid hex color code that can be used in HTML/CSS for random colors.
*/

//hex[Math.floor(Math.random() * 16)];working processs
/*
    The expression hex[Math.floor(Math.random() * 16)] works in a few steps to select a random character
     from the string hex = '0123456789ABCDEF'. Here's a breakdown:

1. Math.random():
This function generates a random decimal number between 0 (inclusive) and 1 (exclusive), e.g., 0.45312, 0.12345, etc.
2. Math.random() * 16:
Multiplying the random number by 16 stretches that random value range to between 0 (inclusive) and 16 (exclusive), 
e.g., 7.2509, 13.8756, etc.
3. Math.floor(Math.random() * 16):
Math.floor() rounds down the decimal number to the nearest integer. This ensures a result between 0 and 15 (inclusive).
 So, the possible output values are: 0, 1, 2, ..., 15.
4. Accessing hex using this number:
The string hex = '0123456789ABCDEF' contains 16 characters, where:
Index 0 corresponds to '0'
Index 1 corresponds to '1'
...
Index 10 corresponds to 'A'
Index 15 corresponds to 'F'
When Math.floor(Math.random() * 16) returns a number (say 11), it will pick the character at index 11 from the string, which is 'B'.

Example:
Suppose Math.random() generates 0.9. Multiplying by 16 gives 14.4, and rounding down gives 14. So, hex[14] will return 'E'.
Suppose Math.random() generates 0.3. Multiplying by 16 gives 4.8, and rounding down gives 4. So, hex[4] will return '4'.
This process repeats six times in your loop to create a random six-character hexadecimal color.
*/


let interval;
const startColorChanger = function () {
    if (!interval)//if we not give this condition then , start button doubles clinking time stop button not work
         {
        interval = setInterval(colorBgcolor, 1000);
        function colorBgcolor() {
            document.body.style.backgroundColor = randomColor();
        }
    }
}

const stopColorChanger = function () {
    clearInterval(interval);
    interval = null;

}
document.querySelector('#start').addEventListener('click', startColorChanger);
document.querySelector('#stop').addEventListener('click', stopColorChanger);
// console.log(Math.floor(Math.random() * 16));