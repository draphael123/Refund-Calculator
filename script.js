document.getElementById('calculatorForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get input values
    const amountPaid = parseFloat(document.getElementById('amountPaid').value);
    const medicationDispensed = parseFloat(document.getElementById('medicationDispensed').value);
    const weeksPaid = parseFloat(document.getElementById('weeksPaid').value);
    const weeksReceived = parseFloat(document.getElementById('weeksReceived').value);
    
    // Validate inputs
    if (isNaN(amountPaid) || isNaN(medicationDispensed) || isNaN(weeksPaid) || isNaN(weeksReceived) ||
        amountPaid < 0 || medicationDispensed < 0 || weeksPaid <= 0 || weeksReceived < 0) {
        alert('Please enter valid positive numbers for all fields.');
        return;
    }
    
    // Perform calculations
    const costPerWeek = amountPaid / weeksPaid;
    const costPerUnit = amountPaid / medicationDispensed;
    const medicationPerWeek = medicationDispensed / weeksPaid;
    const weeklyCostPerUnit = costPerWeek / medicationPerWeek;
    
    // Calculate refund: (weeksPaid - weeksReceived) * costPerWeek
    // Only refund if weeksReceived < weeksPaid
    const refundAmount = weeksReceived < weeksPaid 
        ? (weeksPaid - weeksReceived) * costPerWeek 
        : 0;
    
    // Display results
    document.getElementById('costPerWeek').textContent = formatCurrency(costPerWeek);
    document.getElementById('costPerUnit').textContent = formatCurrency(costPerUnit);
    document.getElementById('medicationPerWeek').textContent = formatNumber(medicationPerWeek);
    document.getElementById('weeklyCostPerUnit').textContent = formatCurrency(weeklyCostPerUnit);
    document.getElementById('refundAmount').textContent = formatCurrency(refundAmount);
    
    // Show results section
    document.getElementById('results').classList.remove('hidden');
    
    // Scroll to results smoothly
    document.getElementById('results').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});

function formatCurrency(value) {
    return '$' + value.toFixed(2);
}

function formatNumber(value) {
    return value.toFixed(2);
}

