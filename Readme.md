Project Title: Simple Calculator
Overview
This project is a Simple Calculator built using HTML, CSS, and JavaScript. It provides a user-friendly interface for performing basic arithmetic operations such as addition, subtraction, multiplication, and division.
Features
Basic Operations: Supports addition, subtraction, multiplication, and division.
Clear Functionality: Allows users to reset the current calculation.
Responsive Design: Adjusts to different screen sizes for better usability.
File Structure
The project consists of three main files:
index.html: The main HTML file that structures the calculator interface.
style.css: The CSS file that styles the calculator for a pleasant user experience.
script.js: The JavaScript file that contains the logic for handling button clicks and performing calculations.
Installation
To run this project locally:
Download or clone the repository.
Open index.html in a web browser.
Usage
Click on the number buttons to input values.
Use the operation buttons (+, -, *, /) to perform calculations.
Press = to evaluate the expression.
Click C to clear the input.
Code Explanation
HTML (index.html)
The HTML file lays out the structure of the calculator, including buttons for numbers and operations, as well as an input field to display results.
CSS (style.css)
The CSS file styles the calculator with a modern look, including hover effects for buttons and responsive design elements.
JavaScript (script.js)
The JavaScript file manages user interactions:
Listens for button clicks.
Evaluates expressions using eval().
Updates the display based on user inputs.
javascript
let res = "";

let buttons = document.querySelectorAll('.bt');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.value == '=') {
            res = eval(res);
            document.getElementById('result').value = res;
        } else if (e.target.value == 'C') {
            res = "";
            document.getElementById('result').value = res;
        } else {
            res += e.target.value;
            document.getElementById('result').value = res;
        }
    });
});
Contributing
Contributions are welcome! If you have suggestions for improvements or new features, please submit a pull request or open an issue.
License
This project is licensed under the MIT License. See the LICENSE file for details.