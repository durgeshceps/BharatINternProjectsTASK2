



document.getElementById('convertBtn').addEventListener('click', function() {
    const celsiusInput = document.getElementById('celsius');
    const resultElement = document.getElementById('result');
    
    const celsius = parseFloat(celsiusInput.value);
    if (isNaN(celsius)) {
      resultElement.textContent = 'Please enter a valid number';
      return;
    }
    
    const fahrenheit = (celsius * 9/5) + 32;
    resultElement.textContent = `${celsius}°C is ${fahrenheit.toFixed(2)}°F`;
  });
  