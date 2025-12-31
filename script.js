document.getElementById('calculatorForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get input values
    const amountPaid = parseFloat(document.getElementById('amountPaid').value);
    const medicationDispensedText = document.getElementById('medicationDispensed').value;
    const weeksPaidText = document.getElementById('weeksPaid').value;
    
    // Extract numeric values from text inputs (handles text like "100mg" or "4 weeks")
    const medicationDispensed = extractNumber(medicationDispensedText);
    const weeksPaid = extractNumber(weeksPaidText);
    
    // Validate inputs
    if (isNaN(amountPaid) || isNaN(medicationDispensed) || isNaN(weeksPaid) ||
        amountPaid < 0 || medicationDispensed <= 0 || weeksPaid <= 0) {
        alert('Please enter valid positive numbers. For medication and weeks, you can include text (e.g., "100mg" or "4 weeks").');
        return;
    }
    
    // Perform calculations
    const costPerWeek = amountPaid / weeksPaid;
    const costPerUnit = amountPaid / medicationDispensed;
    const medicationPerWeek = medicationDispensed / weeksPaid;
    const weeklyCostPerUnit = costPerWeek / medicationPerWeek;
    
    // Display results
    document.getElementById('costPerWeek').textContent = formatCurrency(costPerWeek);
    document.getElementById('costPerUnit').textContent = formatCurrency(costPerUnit);
    document.getElementById('medicationPerWeek').textContent = formatNumber(medicationPerWeek);
    document.getElementById('weeklyCostPerUnit').textContent = formatCurrency(weeklyCostPerUnit);
    
    // Show results section
    document.getElementById('results').classList.remove('hidden');
    
    // Scroll to results smoothly
    document.getElementById('results').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});

// Function to extract the first number from a text string
function extractNumber(text) {
    // Match the first number (including decimals) in the string
    const match = text.match(/[\d]+\.?[\d]*/);
    return match ? parseFloat(match[0]) : NaN;
}

function formatCurrency(value) {
    return '$' + value.toFixed(2);
}

function formatNumber(value) {
    return value.toFixed(2);
}

