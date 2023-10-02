//your JS code here. If required.
// Get references to the input elements and the result span
        const n1Input = document.getElementById("n1");
        const n2Input = document.getElementById("n2");
        const sumButton = document.getElementById("sum_btn");
        const sumSpan = document.getElementById("sum");

        // Add a click event listener to the "Calculate" button
        sumButton.addEventListener("click", function () {
            // Get the values from the input fields and calculate the sum
            const num1 = parseFloat(n1Input.value);
            const num2 = parseFloat(n2Input.value);
            const result = num1 + num2;

            // Display the result in the "sum" span
            sumSpan.textContent = result;
        });
