function convertTemperature() {
  // Get input values
  let inputTemperature = parseFloat(document.getElementById("input-temperature").value);
  let inputUnit = document.getElementById("input-unit").value;
  let outputUnit = document.getElementById("output-unit").value;

  // Convert to Celsius
  if (inputUnit === "Fahrenheit") {
    inputTemperature = (inputTemperature - 32) * 5 / 9;
  } else if (inputUnit === "Kelvin") {
    inputTemperature = inputTemperature - 273.15;
  }

  // Convert to output unit
  let outputTemperature;
  if (outputUnit === "Fahrenheit") {
    outputTemperature = (inputTemperature * 9 / 5) + 32;
  } else if (outputUnit === "Kelvin") {
    outputTemperature = inputTemperature + 273.15;
  } else {
    outputTemperature = inputTemperature;
  }

  // Set output value
  document.getElementById("output-temperature").value = outputTemperature.toFixed(2);
}
