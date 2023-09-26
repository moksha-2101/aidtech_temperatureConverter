function convertTemperature() {
    // Get user input
    const temperature = parseFloat(document.getElementById('temperature').value);
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;

    // Perform temperature conversion
    let result;

    if (inputUnit === 'celsius' && outputUnit === 'fahrenheit') {
        result = (temperature * 9/5) + 32;
    } else if (inputUnit === 'fahrenheit' && outputUnit === 'celsius') {
        result = (temperature - 32) * 5/9;
    } else if (inputUnit === 'celsius' && outputUnit === 'kelvin') {
        result = temperature + 273.15;
    }
    // Add more conversion cases as needed

    // Display the result
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Result: ${result.toFixed(2)} ${outputUnit}`;
}
