let equal_pressed = 0; // Flag to track if the equal button was pressed
// Refer to all buttons excluding AC and DEL
let button_input = document.querySelectorAll(".input-button");  
// Refer to input field and control buttons
let input = document.getElementById("input");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let erase = document.getElementById("erase"); // Fixed typo from "earase" to "erase"

window.onload = () => {
    input.value = ""; // Initialize input field to empty on page load
};

// Access each button class using forEach
button_input.forEach((button_class) => {
    button_class.addEventListener("click", () => {
        // If equal was pressed previously, clear the input field
        if(equal_pressed == 1){
            input.value = "";
            equal_pressed = 0; // Reset the flag
        }
        // Display the value of the button clicked
        input.value += button_class.value;
    });
});

// Solve the user input when the equal button is clicked
equal.addEventListener("click", () => {
    equal_pressed = 1; // Set the flag indicating equal was pressed
    let inp_val = input.value; // Get the current input value
    try {
        // Evaluate the user input
        let solution = eval(inp_val);
        // Check if the solution is a natural number or a decimal
        if(Number.isInteger(solution)){
            input.value = solution; // Display the integer solution
        } else {
            input.value = solution.toFixed(2); // Display the decimal solution rounded to 2 decimal places
        }
    } catch (error) {
        // If the user entered invalid input, show an alert
        alert("Invalid input");
    }
});

// Clear the input field when the clear button is clicked
clear.addEventListener("click", () => {
    input.value = ""; // Set input value to empty
});

// Erase a single digit from the input field
erase.addEventListener("click", () => {
    input.value = input.value.substr(0, input.value.length - 1); // Remove the last character
});