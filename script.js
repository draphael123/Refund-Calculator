// State management
const state = {
    calculations: [],
    currentCalculation: null
};

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    initializeTheme();
    initializeTooltips();
    initializeValidation();
    initializeForm();
    initializeHistory();
    loadFromURL();
    loadHistory();
});

// Theme Management
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
    
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    const icon = document.querySelector('.theme-icon');
    icon.textContent = theme === 'dark' ? '☀️' : '🌙';
}

// Tooltip Management
function initializeTooltips() {
    const tooltipIcons = document.querySelectorAll('.tooltip-icon');
    const tooltip = document.getElementById('tooltip');
    
    tooltipIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function(e) {
            const text = this.getAttribute('data-tooltip');
            showTooltip(e, text);
        });
        
        icon.addEventListener('mouseleave', function() {
            hideTooltip();
        });
        
        icon.addEventListener('mousemove', function(e) {
            updateTooltipPosition(e);
        });
    });
}

function showTooltip(event, text) {
    const tooltip = document.getElementById('tooltip');
    tooltip.textContent = text;
    tooltip.classList.remove('hidden');
    tooltip.classList.add('show');
    updateTooltipPosition(event);
}

function updateTooltipPosition(event) {
    const tooltip = document.getElementById('tooltip');
    tooltip.style.left = (event.pageX + 10) + 'px';
    tooltip.style.top = (event.pageY - 40) + 'px';
}

function hideTooltip() {
    const tooltip = document.getElementById('tooltip');
    tooltip.classList.remove('show');
    setTimeout(() => tooltip.classList.add('hidden'), 300);
}

// Input Validation
function initializeValidation() {
    const inputs = document.querySelectorAll('input[required]');
    
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateInput(this);
        });
        
        input.addEventListener('input', function() {
            clearError(this);
            if (this.value.trim() !== '') {
                validateInput(this);
            }
        });
    });
}

function validateInput(input) {
    const inputGroup = input.closest('.input-group');
    const errorElement = inputGroup.querySelector('.error-message');
    let isValid = true;
    let errorMessage = '';
    
    // Remove previous validation classes
    inputGroup.classList.remove('valid', 'invalid');
    
    if (input.hasAttribute('required') && input.value.trim() === '') {
        isValid = false;
        errorMessage = 'This field is required';
    } else if (input.id === 'amountPaid') {
        const value = parseFloat(input.value);
        if (isNaN(value) || value < 0) {
            isValid = false;
            errorMessage = 'Please enter a valid positive number';
        }
    } else if (input.id === 'medicationDispensed') {
        const value = extractNumber(input.value);
        if (isNaN(value) || value <= 0) {
            isValid = false;
            errorMessage = 'Please enter a valid medication amount (e.g., 100mg or 100)';
        }
    } else if (input.id === 'weeksPaid') {
        const value = extractNumber(input.value);
        if (isNaN(value) || value <= 0) {
            isValid = false;
            errorMessage = 'Please enter a valid number of weeks (e.g., 4 weeks or 4)';
        }
    }
    
    if (isValid) {
        inputGroup.classList.add('valid');
        input.setAttribute('aria-invalid', 'false');
        clearError(input);
    } else {
        inputGroup.classList.add('invalid');
        input.setAttribute('aria-invalid', 'true');
        showError(input, errorMessage);
    }
    
    return isValid;
}

function showError(input, message) {
    const inputGroup = input.closest('.input-group');
    const errorElement = inputGroup.querySelector('.error-message');
    errorElement.textContent = message;
    errorElement.classList.add('show');
}

function clearError(input) {
    const inputGroup = input.closest('.input-group');
    const errorElement = inputGroup.querySelector('.error-message');
    errorElement.textContent = '';
    errorElement.classList.remove('show');
    inputGroup.classList.remove('invalid');
}

// Form Handling
function initializeForm() {
    const form = document.getElementById('calculatorForm');
    const clearBtn = document.getElementById('clearBtn');
    
    form.addEventListener('submit', handleSubmit);
    clearBtn.addEventListener('click', clearForm);
}

function handleSubmit(e) {
    e.preventDefault();
    
    // Validate all inputs
    const inputs = document.querySelectorAll('input[required]');
    let allValid = true;
    
    inputs.forEach(input => {
        if (!validateInput(input)) {
            allValid = false;
        }
    });
    
    if (!allValid) {
        showToast('Please fix the errors before calculating', 'error');
        return;
    }
    
    // Show loading state
    const calculateBtn = document.getElementById('calculateBtn');
    const btnText = calculateBtn.querySelector('.btn-text');
    const btnLoader = calculateBtn.querySelector('.btn-loader');
    
    calculateBtn.disabled = true;
    btnText.classList.add('hidden');
    btnLoader.classList.remove('hidden');
    
    // Simulate calculation delay for better UX
    setTimeout(() => {
        performCalculation();
        calculateBtn.disabled = false;
        btnText.classList.remove('hidden');
        btnLoader.classList.add('hidden');
    }, 300);
}

function performCalculation() {
    // Get input values
    const amountPaid = parseFloat(document.getElementById('amountPaid').value);
    const medicationDispensedText = document.getElementById('medicationDispensed').value;
    const medicationUnit = document.getElementById('medicationUnit').value;
    const weeksPaidText = document.getElementById('weeksPaid').value;
    
    // Extract and convert numeric values
    let medicationDispensed = extractNumber(medicationDispensedText);
    const weeksPaid = extractNumber(weeksPaidText);
    
    // Unit conversion if needed
    if (medicationUnit) {
        medicationDispensed = convertUnit(medicationDispensed, medicationUnit);
    }
    
    // Perform calculations
    const costPerWeek = amountPaid / weeksPaid;
    const costPerUnit = amountPaid / medicationDispensed;
    const medicationPerWeek = medicationDispensed / weeksPaid;
    const weeklyCostPerUnit = costPerWeek / medicationPerWeek;
    
    // Projections
    const costOneMonth = costPerWeek * 4;
    const costThreeMonths = costPerWeek * 12;
    const costSixMonths = costPerWeek * 24;
    const costOneYear = costPerWeek * 52;
    
    // Store calculation
    const calculation = {
        id: Date.now(),
        timestamp: new Date().toISOString(),
        inputs: {
            amountPaid,
            medicationDispensed,
            medicationUnit: medicationUnit || 'auto',
            weeksPaid
        },
        results: {
            costPerWeek,
            costPerUnit,
            medicationPerWeek,
            weeklyCostPerUnit,
            costOneMonth,
            costThreeMonths,
            costSixMonths,
            costOneYear
        }
    };
    
    state.currentCalculation = calculation;
    state.calculations.unshift(calculation);
    
    // Keep only last 10 calculations
    if (state.calculations.length > 10) {
        state.calculations = state.calculations.slice(0, 10);
    }
    
    // Display results
    displayResults(calculation.results);
    
    // Save to localStorage
    saveHistory();
    
    // Update URL
    updateURL(calculation);
    
    showToast('Calculation completed!', 'success');
}

function displayResults(results) {
    document.getElementById('costPerWeek').textContent = formatCurrency(results.costPerWeek);
    document.getElementById('costPerUnit').textContent = formatCurrency(results.costPerUnit);
    document.getElementById('medicationPerWeek').textContent = formatNumber(results.medicationPerWeek);
    document.getElementById('weeklyCostPerUnit').textContent = formatCurrency(results.weeklyCostPerUnit);
    document.getElementById('costOneMonth').textContent = formatCurrency(results.costOneMonth);
    document.getElementById('costThreeMonths').textContent = formatCurrency(results.costThreeMonths);
    document.getElementById('costSixMonths').textContent = formatCurrency(results.costSixMonths);
    document.getElementById('costOneYear').textContent = formatCurrency(results.costOneYear);
    
    // Show results section
    const resultsSection = document.getElementById('results');
    resultsSection.classList.remove('hidden');
    
    // Scroll to results smoothly
    setTimeout(() => {
        resultsSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
}

function clearForm() {
    document.getElementById('calculatorForm').reset();
    document.getElementById('results').classList.add('hidden');
    document.getElementById('calculationHistory').classList.add('hidden');
    
    // Clear validation states
    document.querySelectorAll('.input-group').forEach(group => {
        group.classList.remove('valid', 'invalid');
    });
    
    document.querySelectorAll('.error-message').forEach(error => {
        error.textContent = '';
        error.classList.remove('show');
    });
    
    state.currentCalculation = null;
    updateURL(null);
    showToast('Form cleared', 'success');
}

// Utility Functions
function extractNumber(text) {
    const match = text.match(/[\d]+\.?[\d]*/);
    return match ? parseFloat(match[0]) : NaN;
}

function convertUnit(value, unit) {
    // Convert to base unit (mg for weight, ml for volume)
    const conversions = {
        'g': (v) => v * 1000,  // grams to mg
        'l': (v) => v * 1000,  // liters to ml
        'mg': (v) => v,
        'ml': (v) => v,
        'units': (v) => v
    };
    
    return conversions[unit.toLowerCase()] ? conversions[unit.toLowerCase()](value) : value;
}

function formatCurrency(value) {
    return '$' + value.toFixed(2);
}

function formatNumber(value) {
    return value.toFixed(2);
}

// Copy Results
document.getElementById('copyBtn').addEventListener('click', function() {
    if (!state.currentCalculation) return;
    
    const results = state.currentCalculation.results;
    const text = `Medication Payment Calculator Results

Inputs:
- Amount Paid: ${formatCurrency(state.currentCalculation.inputs.amountPaid)}
- Medication Dispensed: ${state.currentCalculation.inputs.medicationDispensed}${state.currentCalculation.inputs.medicationUnit !== 'auto' ? state.currentCalculation.inputs.medicationUnit : ''}
- Weeks Paid: ${state.currentCalculation.inputs.weeksPaid}

Results:
- Cost per Week: ${formatCurrency(results.costPerWeek)}
- Cost per Unit: ${formatCurrency(results.costPerUnit)}
- Medication per Week: ${formatNumber(results.medicationPerWeek)}
- Weekly Cost per Unit: ${formatCurrency(results.weeklyCostPerUnit)}

Projections:
- 1 Month (4 weeks): ${formatCurrency(results.costOneMonth)}
- 3 Months (12 weeks): ${formatCurrency(results.costThreeMonths)}
- 6 Months (24 weeks): ${formatCurrency(results.costSixMonths)}
- 1 Year (52 weeks): ${formatCurrency(results.costOneYear)}

Calculated on: ${new Date(state.currentCalculation.timestamp).toLocaleString()}`;
    
    navigator.clipboard.writeText(text).then(() => {
        showToast('Results copied to clipboard!', 'success');
    }).catch(() => {
        showToast('Failed to copy results', 'error');
    });
});

// Print Results
document.getElementById('printBtn').addEventListener('click', function() {
    window.print();
});

// Share Results
document.getElementById('shareBtn').addEventListener('click', function() {
    if (!state.currentCalculation) return;
    
    const shareData = {
        title: 'Medication Payment Calculator Results',
        text: `Check out my medication cost calculation!`,
        url: window.location.href
    };
    
    if (navigator.share) {
        navigator.share(shareData).then(() => {
            showToast('Shared successfully!', 'success');
        }).catch(() => {
            fallbackShare();
        });
    } else {
        fallbackShare();
    }
});

function fallbackShare() {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
        showToast('Link copied to clipboard!', 'success');
    }).catch(() => {
        showToast('Share not available', 'error');
    });
}

// History Management
function initializeHistory() {
    const clearHistoryBtn = document.getElementById('clearHistoryBtn');
    clearHistoryBtn.addEventListener('click', clearHistory);
}

function loadHistory() {
    const saved = localStorage.getItem('calculationHistory');
    if (saved) {
        try {
            state.calculations = JSON.parse(saved);
            renderHistory();
        } catch (e) {
            console.error('Error loading history:', e);
        }
    }
}

function saveHistory() {
    try {
        localStorage.setItem('calculationHistory', JSON.stringify(state.calculations));
        renderHistory();
    } catch (e) {
        console.error('Error saving history:', e);
    }
}

function renderHistory() {
    const historyList = document.getElementById('historyList');
    const historySection = document.getElementById('calculationHistory');
    
    if (state.calculations.length === 0) {
        historySection.classList.add('hidden');
        return;
    }
    
    historySection.classList.remove('hidden');
    historyList.innerHTML = '';
    
    state.calculations.slice(0, 5).forEach(calc => {
        const item = document.createElement('div');
        item.className = 'history-item';
        item.setAttribute('tabindex', '0');
        item.setAttribute('role', 'button');
        item.setAttribute('aria-label', 'Load calculation from history');
        
        const date = new Date(calc.timestamp);
        item.innerHTML = `
            <div class="history-item-header">
                <span>${formatCurrency(calc.inputs.amountPaid)} for ${calc.inputs.weeksPaid} weeks</span>
                <span class="history-item-date">${date.toLocaleDateString()} ${date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
            </div>
            <div class="history-item-summary">
                Cost per Week: ${formatCurrency(calc.results.costPerWeek)} | 
                Cost per Unit: ${formatCurrency(calc.results.costPerUnit)}
            </div>
        `;
        
        item.addEventListener('click', () => loadFromHistory(calc));
        item.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                loadFromHistory(calc);
            }
        });
        
        historyList.appendChild(item);
    });
}

function loadFromHistory(calculation) {
    document.getElementById('amountPaid').value = calculation.inputs.amountPaid;
    document.getElementById('medicationDispensed').value = calculation.inputs.medicationDispensed;
    document.getElementById('medicationUnit').value = calculation.inputs.medicationUnit;
    document.getElementById('weeksPaid').value = calculation.inputs.weeksPaid;
    
    // Validate and display
    document.querySelectorAll('input[required]').forEach(input => validateInput(input));
    displayResults(calculation.results);
    state.currentCalculation = calculation;
    
    showToast('Calculation loaded from history', 'success');
}

function clearHistory() {
    if (confirm('Are you sure you want to clear all calculation history?')) {
        state.calculations = [];
        localStorage.removeItem('calculationHistory');
        document.getElementById('calculationHistory').classList.add('hidden');
        showToast('History cleared', 'success');
    }
}

// URL Management
function updateURL(calculation) {
    if (!calculation) {
        window.history.pushState({}, '', window.location.pathname);
        return;
    }
    
    const params = new URLSearchParams({
        amount: calculation.inputs.amountPaid,
        medication: calculation.inputs.medicationDispensed,
        unit: calculation.inputs.medicationUnit,
        weeks: calculation.inputs.weeksPaid
    });
    
    window.history.pushState({}, '', `?${params.toString()}`);
}

function loadFromURL() {
    const params = new URLSearchParams(window.location.search);
    if (params.has('amount') && params.has('medication') && params.has('weeks')) {
        document.getElementById('amountPaid').value = params.get('amount');
        document.getElementById('medicationDispensed').value = params.get('medication');
        document.getElementById('medicationUnit').value = params.get('unit') || '';
        document.getElementById('weeksPaid').value = params.get('weeks');
        
        // Auto-calculate if all fields are filled
        setTimeout(() => {
            document.getElementById('calculatorForm').dispatchEvent(new Event('submit', { cancelable: true }));
        }, 500);
    }
}

// Toast Notifications
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast ${type} show`;
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Keyboard Navigation
document.addEventListener('keydown', function(e) {
    // Escape to clear
    if (e.key === 'Escape') {
        const activeElement = document.activeElement;
        if (activeElement.tagName === 'INPUT') {
            activeElement.blur();
        }
    }
    
    // Enter to submit (if form is valid)
    if (e.key === 'Enter' && e.target.tagName === 'INPUT') {
        const form = document.getElementById('calculatorForm');
        if (form.checkValidity()) {
            form.dispatchEvent(new Event('submit', { cancelable: true }));
        }
    }
});

// Accessibility: Focus management
document.querySelectorAll('input, button, select').forEach(element => {
    element.addEventListener('focus', function() {
        this.style.outline = '2px solid #667eea';
        this.style.outlineOffset = '2px';
    });
    
    element.addEventListener('blur', function() {
        this.style.outline = '';
        this.style.outlineOffset = '';
    });
});
