// Medication data structure from spreadsheet
// Format: { id, name, amountPaid (Total COGS 84-Day), medicationDispensed, weeksPaid (12 for 84-day), weeksReceived, unit, pharmacy }
let medicationsData = [
    // Section 1: Treatments/Medications
    { id: 1, name: "TRT - T CYPIONATE", amountPaid: 72.00, medicationDispensed: 1, weeksPaid: 12, weeksReceived: 0, unit: "vial", pharmacy: "Various" },
    { id: 2, name: "TRT - T CREAM", amountPaid: 80.61, medicationDispensed: 1, weeksPaid: 12, weeksReceived: 0, unit: "bottle", pharmacy: "Curexa" },
    { id: 3, name: "TRT - ENCLOMIPHENE", amountPaid: 108.20, medicationDispensed: 1, weeksPaid: 12, weeksReceived: 0, unit: "bottle", pharmacy: "TPH" },
    { id: 4, name: "HRT - TESTOSTERONE/ESTROGEN", amountPaid: 42.00, medicationDispensed: 1, weeksPaid: 12, weeksReceived: 0, unit: "bottle", pharmacy: "Belmar WI" },
    { id: 5, name: "HRT - TESTOSTERONE", amountPaid: 42.00, medicationDispensed: 1, weeksPaid: 12, weeksReceived: 0, unit: "bottle", pharmacy: "Belmar WI" },
    { id: 6, name: "HRT - PROGESTERONE", amountPaid: 62.40, medicationDispensed: 1, weeksPaid: 12, weeksReceived: 0, unit: "bottle", pharmacy: "Belmar WI" },
    { id: 7, name: "ED - TADALAFIL", amountPaid: 33.80, medicationDispensed: 1, weeksPaid: 12, weeksReceived: 0, unit: "bottle", pharmacy: "Curexa" },
    { id: 8, name: "THYROID", amountPaid: 75.00, medicationDispensed: 1, weeksPaid: 12, weeksReceived: 0, unit: "bottle", pharmacy: "Belmar WI" },
    { id: 9, name: "HAIR - MINOXIDIL", amountPaid: 35.31, medicationDispensed: 1, weeksPaid: 12, weeksReceived: 0, unit: "bottle", pharmacy: "Curexa" },
    { id: 10, name: "HAIR - FINASTERIDE", amountPaid: 38.00, medicationDispensed: 1, weeksPaid: 12, weeksReceived: 0, unit: "bottle", pharmacy: "Curexa" },
    { id: 11, name: "HAIR - DUTASTERIDE", amountPaid: 36.81, medicationDispensed: 1, weeksPaid: 12, weeksReceived: 0, unit: "bottle", pharmacy: "Curexa" },
    { id: 12, name: "ANASTROZOLE", amountPaid: 32.00, medicationDispensed: 1, weeksPaid: 12, weeksReceived: 0, unit: "bottle", pharmacy: "Curexa" },
    { id: 13, name: "HCG", amountPaid: 240.00, medicationDispensed: 1, weeksPaid: 12, weeksReceived: 0, unit: "vial", pharmacy: "Curexa" },
    { id: 14, name: "HCG x2", amountPaid: 468.00, medicationDispensed: 2, weeksPaid: 12, weeksReceived: 0, unit: "vial", pharmacy: "Curexa" },
    { id: 15, name: "ENC (ADD-ON) - ENCLOMIPHENE", amountPaid: 45.20, medicationDispensed: 1, weeksPaid: 12, weeksReceived: 0, unit: "bottle", pharmacy: "TPH" },
    { id: 16, name: "GLP - SEMAGLUTIDE", amountPaid: 476.00, medicationDispensed: 1, weeksPaid: 12, weeksReceived: 0, unit: "vial", pharmacy: "TPH" },
    { id: 17, name: "GLP - TIRZEPATIDE", amountPaid: 1133.00, medicationDispensed: 1, weeksPaid: 12, weeksReceived: 0, unit: "vial", pharmacy: "TPH" },
    
    // Section 2: Detailed Medications
    { id: 18, name: "Tadalafil", amountPaid: 33.80, medicationDispensed: 1, weeksPaid: 12, weeksReceived: 0, unit: "bottle", pharmacy: "Curexa" },
    { id: 19, name: "Sildenafil", amountPaid: 38.00, medicationDispensed: 1, weeksPaid: 12, weeksReceived: 0, unit: "bottle", pharmacy: "Curexa" },
    { id: 20, name: "Minoxidil 6%/Dutasteride 0.1%/Ketoconazole 1.7% Hair Loss Solution", amountPaid: 56.81, medicationDispensed: 1, weeksPaid: 12, weeksReceived: 0, unit: "bottle", pharmacy: "Curexa" },
    { id: 21, name: "HCG (Curexa)", amountPaid: 380.00, medicationDispensed: 1, weeksPaid: 12, weeksReceived: 0, unit: "vial", pharmacy: "Curexa" },
    { id: 22, name: "Enclomiphene 12.5/25mg daily", amountPaid: 108.20, medicationDispensed: 1, weeksPaid: 12, weeksReceived: 0, unit: "bottle", pharmacy: "TPH" },
    { id: 23, name: "Enclomiphene 25mg biw", amountPaid: 45.20, medicationDispensed: 1, weeksPaid: 12, weeksReceived: 0, unit: "bottle", pharmacy: "TPH" },
    { id: 24, name: "Testosterone Cypionate 2.5mL/5mL EMP", amountPaid: 72.00, medicationDispensed: 1, weeksPaid: 12, weeksReceived: 0, unit: "vial", pharmacy: "EMP" },
    { id: 25, name: "Testosterone Cypionate 10mL", amountPaid: 55.00, medicationDispensed: 1, weeksPaid: 12, weeksReceived: 0, unit: "vial", pharmacy: "Curexa" },
    { id: 26, name: "Testosterone Cream 200mg/mL", amountPaid: 80.61, medicationDispensed: 1, weeksPaid: 12, weeksReceived: 0, unit: "bottle", pharmacy: "Curexa" },
    { id: 27, name: "Testosterone Cream FEMALE", amountPaid: 42.00, medicationDispensed: 1, weeksPaid: 12, weeksReceived: 0, unit: "bottle", pharmacy: "Belmar WI" },
    { id: 28, name: "T/E2 Cream FEMALE", amountPaid: 42.00, medicationDispensed: 1, weeksPaid: 12, weeksReceived: 0, unit: "bottle", pharmacy: "Belmar WI" },
    { id: 29, name: "Progesterone", amountPaid: 62.40, medicationDispensed: 1, weeksPaid: 12, weeksReceived: 0, unit: "bottle", pharmacy: "Belmar WI" },
    { id: 30, name: "Semaglutide TPH", amountPaid: 476.00, medicationDispensed: 1, weeksPaid: 12, weeksReceived: 0, unit: "vial", pharmacy: "TPH" },
    { id: 31, name: "Semaglutide Absolute", amountPaid: 537.00, medicationDispensed: 1, weeksPaid: 12, weeksReceived: 0, unit: "vial", pharmacy: "Absolute" },
    { id: 32, name: "Tirzepatide Red Rock", amountPaid: 1125.00, medicationDispensed: 1, weeksPaid: 12, weeksReceived: 0, unit: "vial", pharmacy: "Red Rock" },
    { id: 33, name: "Tirzepatide TPH", amountPaid: 1133.00, medicationDispensed: 1, weeksPaid: 12, weeksReceived: 0, unit: "vial", pharmacy: "TPH" },
    { id: 34, name: "Anastrazole", amountPaid: 32.00, medicationDispensed: 1, weeksPaid: 12, weeksReceived: 0, unit: "bottle", pharmacy: "Curexa" },
    { id: 35, name: "Spironolactone", amountPaid: 31.76, medicationDispensed: 1, weeksPaid: 12, weeksReceived: 0, unit: "bottle", pharmacy: "Curexa" },
    { id: 36, name: "Estriol Face Cream", amountPaid: 42.16, medicationDispensed: 1, weeksPaid: 12, weeksReceived: 0, unit: "bottle", pharmacy: "Curexa" },
    { id: 37, name: "Blush Cream", amountPaid: 35.56, medicationDispensed: 1, weeksPaid: 12, weeksReceived: 0, unit: "bottle", pharmacy: "Curexa" },
    { id: 38, name: "Dessicated Thyroid", amountPaid: 75.00, medicationDispensed: 1, weeksPaid: 12, weeksReceived: 0, unit: "bottle", pharmacy: "Belmar WI" },
    { id: 39, name: "Progesterone Troche", amountPaid: 163.20, medicationDispensed: 1, weeksPaid: 12, weeksReceived: 0, unit: "bottle", pharmacy: "Belmar WI" }
];

// Load medications from localStorage if available
function loadMedicationsFromStorage() {
    const saved = localStorage.getItem('medicationsData');
    if (saved) {
        try {
            medicationsData = JSON.parse(saved);
        } catch (e) {
            console.error('Error loading medications:', e);
        }
    }
}

// Save medications to localStorage
function saveMedicationsToStorage() {
    try {
        localStorage.setItem('medicationsData', JSON.stringify(medicationsData));
    } catch (e) {
        console.error('Error saving medications:', e);
    }
}

// State management
const state = {
    calculations: [],
    currentCalculation: null,
    selectedMedications: []
};

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    loadMedicationsFromStorage();
    initializeTheme();
    initializeTooltips();
    initializeValidation();
    initializeForm();
    initializeMedications();
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
    } else if (input.id === 'weeksReceived') {
        const value = extractNumber(input.value);
        if (isNaN(value) || value < 0) {
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
    const weeksReceivedText = document.getElementById('weeksReceived').value;
    
    // Extract and convert numeric values
    let medicationDispensed = extractNumber(medicationDispensedText);
    const weeksPaid = extractNumber(weeksPaidText);
    const weeksReceived = extractNumber(weeksReceivedText) || 0;
    
    // Unit conversion if needed
    if (medicationUnit) {
        medicationDispensed = convertUnit(medicationDispensed, medicationUnit);
    }
    
    // Perform calculations
    const costPerWeek = amountPaid / weeksPaid;
    const costPerUnit = amountPaid / medicationDispensed;
    const medicationPerWeek = medicationDispensed / weeksPaid;
    const weeklyCostPerUnit = costPerWeek / medicationPerWeek;
    
    // Calculate refund: (Weeks Paid - Weeks Received) × Cost per Week
    // If weeks received >= weeks paid, refund is $0 (full medication received)
    const refund = weeksReceived < weeksPaid 
        ? (weeksPaid - weeksReceived) * costPerWeek 
        : 0;
    
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
            weeksPaid,
            weeksReceived
        },
        results: {
            refund,
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
    // Display main refund amount at the top
    const mainRefundItem = document.getElementById('mainRefundItem');
    const mainRefundAmount = document.getElementById('mainRefundAmount');
    
    if (mainRefundAmount) {
        mainRefundAmount.textContent = formatCurrency(results.refund || 0);
    }
    if (mainRefundItem) {
        mainRefundItem.style.display = 'flex';
    }
    
    // Display other results
    document.getElementById('costPerWeek').textContent = formatCurrency(results.costPerWeek);
    document.getElementById('costPerUnit').textContent = formatCurrency(results.costPerUnit);
    document.getElementById('medicationPerWeek').textContent = formatNumber(results.medicationPerWeek);
    document.getElementById('weeklyCostPerUnit').textContent = formatCurrency(results.weeklyCostPerUnit);
    document.getElementById('costOneMonth').textContent = formatCurrency(results.costOneMonth);
    document.getElementById('costThreeMonths').textContent = formatCurrency(results.costThreeMonths);
    document.getElementById('costSixMonths').textContent = formatCurrency(results.costSixMonths);
    document.getElementById('costOneYear').textContent = formatCurrency(results.costOneYear);
    
    // Calculate and display total intended refund from medications
    const totalRefund = calculateTotalRefund();
    const totalRefundItem = document.getElementById('totalRefundItem');
    const totalIntendedRefund = document.getElementById('totalIntendedRefund');
    
    // Combine main refund with medication refunds for total
    const combinedRefund = (results.refund || 0) + totalRefund;
    
    if (totalRefund > 0 && state.selectedMedications.length > 0) {
        if (totalIntendedRefund) {
            totalIntendedRefund.textContent = formatCurrency(combinedRefund);
        }
        if (totalRefundItem) {
            totalRefundItem.style.display = 'flex';
        }
    } else {
        if (totalRefundItem) {
            totalRefundItem.style.display = 'none';
        }
    }
    
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
    document.getElementById('refundSummary').style.display = 'none';
    document.getElementById('mainRefundItem').style.display = 'none';
    
    // Clear validation states
    document.querySelectorAll('.input-group').forEach(group => {
        group.classList.remove('valid', 'invalid');
    });
    
    document.querySelectorAll('.error-message').forEach(error => {
        error.textContent = '';
        error.classList.remove('show');
    });
    
    // Reset medications
    state.selectedMedications = [];
    const medicationsList = document.getElementById('medicationsList');
    medicationsList.innerHTML = '';
    addMedicationItem(0);
    
    state.currentCalculation = null;
    updateURL(null);
    showToast('Form cleared', 'success');
}

// Medication Management
function initializeMedications() {
    populateMedicationDropdowns();
    
    document.getElementById('addMedicationBtn').addEventListener('click', function() {
        const currentCount = document.querySelectorAll('.medication-item').length;
        addMedicationItem(currentCount);
    });
    
    // Initialize first medication item
    addMedicationItem(0);
}

function populateMedicationDropdowns() {
    const dropdowns = document.querySelectorAll('.medication-dropdown');
    dropdowns.forEach(dropdown => {
        // Clear existing options except the first one
        while (dropdown.options.length > 1) {
            dropdown.remove(1);
        }
        
        // Add medications from data, sorted by name
        const sortedMeds = [...medicationsData].sort((a, b) => a.name.localeCompare(b.name));
        sortedMeds.forEach(med => {
            const option = document.createElement('option');
            option.value = med.id;
            option.textContent = `${med.name} - ${formatCurrency(med.amountPaid)}${med.pharmacy ? ` (${med.pharmacy})` : ''}`;
            option.dataset.medication = JSON.stringify(med);
            dropdown.appendChild(option);
        });
    });
}

function addMedicationItem(index) {
    const medicationsList = document.getElementById('medicationsList');
    const medicationItem = document.createElement('div');
    medicationItem.className = 'medication-item';
    medicationItem.setAttribute('data-medication-index', index);
    
    medicationItem.innerHTML = `
        <div class="medication-selector">
            <select class="medication-dropdown" data-index="${index}" aria-label="Select medication">
                <option value="">-- Select Medication --</option>
            </select>
            <button type="button" class="remove-medication-btn" data-index="${index}" aria-label="Remove medication" ${index === 0 ? 'style="display: none;"' : ''}>
                <span>🗑️</span>
            </button>
        </div>
        <div class="medication-details hidden" data-details-index="${index}">
            <div class="medication-info">
                <div class="info-row">
                    <span class="info-label">Amount Paid:</span>
                    <span class="info-value" data-field="amountPaid">$0.00</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Medication Dispensed:</span>
                    <span class="info-value" data-field="medicationDispensed">0</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Weeks Paid:</span>
                    <span class="info-value" data-field="weeksPaid">0</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Weeks Received:</span>
                    <span class="info-value" data-field="weeksReceived">
                        <input type="number" class="weeks-received-input" min="0" step="0.1" value="0" style="width: 80px; padding: 4px 8px; border: 1px solid var(--border-color); border-radius: 4px; background: var(--input-bg); color: var(--text-primary);">
                    </span>
                </div>
                <div class="info-row highlight">
                    <span class="info-label">Refund:</span>
                    <span class="info-value" data-field="refund">$0.00</span>
                </div>
            </div>
        </div>
    `;
    
    medicationsList.appendChild(medicationItem);
    
    // Populate dropdown
    const dropdown = medicationItem.querySelector('.medication-dropdown');
    populateMedicationDropdowns();
    
    // Set up event listeners
    dropdown.addEventListener('change', function() {
        handleMedicationSelection(this, index);
    });
    
    const removeBtn = medicationItem.querySelector('.remove-medication-btn');
    removeBtn.addEventListener('click', function() {
        removeMedicationItem(index);
    });
    
    // Set up weeks received input listener
    const weeksReceivedInput = medicationItem.querySelector('input.weeks-received-input');
    if (weeksReceivedInput) {
        weeksReceivedInput.addEventListener('change', function() {
            const selectedMed = state.selectedMedications[index];
            if (selectedMed) {
                selectedMed.weeksReceived = parseFloat(this.value) || 0;
                calculateMedicationRefund(selectedMed, medicationItem);
                calculateTotalRefund();
            }
        });
    }
}

function handleMedicationSelection(dropdown, index) {
    const selectedValue = dropdown.value;
    const medicationItem = dropdown.closest('.medication-item');
    const detailsSection = medicationItem.querySelector('.medication-details');
    const removeBtn = medicationItem.querySelector('.remove-medication-btn');
    
    if (selectedValue) {
        const medication = medicationsData.find(m => m.id === parseInt(selectedValue));
        if (medication) {
            // Create a copy to avoid mutating original data
            const medCopy = { ...medication };
            
            // Update state
            state.selectedMedications[index] = medCopy;
            
            // Show details
            detailsSection.classList.remove('hidden');
            
            // Update details
            updateMedicationDetails(medicationItem, medCopy);
            
            // Show remove button if not first item
            if (index > 0) {
                removeBtn.style.display = 'block';
            }
            
            // Calculate refund
            calculateMedicationRefund(medCopy, medicationItem);
        }
    } else {
        // Clear selection
        delete state.selectedMedications[index];
        detailsSection.classList.add('hidden');
        if (index > 0) {
            removeBtn.style.display = 'none';
        }
    }
    
    // Recalculate total refund
    calculateTotalRefund();
}

function updateMedicationDetails(item, medication) {
    const amountPaid = item.querySelector('[data-field="amountPaid"]');
    const medicationDispensed = item.querySelector('[data-field="medicationDispensed"]');
    const weeksPaid = item.querySelector('[data-field="weeksPaid"]');
    const weeksReceivedInput = item.querySelector('input.weeks-received-input');
    
    if (amountPaid) amountPaid.textContent = formatCurrency(medication.amountPaid);
    if (medicationDispensed) medicationDispensed.textContent = `${medication.medicationDispensed} ${medication.unit || ''}`;
    if (weeksPaid) weeksPaid.textContent = medication.weeksPaid;
    
    // Update weeks received input
    if (weeksReceivedInput) {
        weeksReceivedInput.value = medication.weeksReceived || 0;
        // Remove existing event listeners and add new one
        const newInput = weeksReceivedInput.cloneNode(true);
        weeksReceivedInput.parentNode.replaceChild(newInput, weeksReceivedInput);
        newInput.addEventListener('change', function() {
            medication.weeksReceived = parseFloat(this.value) || 0;
            calculateMedicationRefund(medication, item);
            calculateTotalRefund();
        });
    }
}

function calculateMedicationRefund(medication, item) {
    const costPerWeek = medication.amountPaid / medication.weeksPaid;
    const weeksReceived = medication.weeksReceived || 0;
    const refund = weeksReceived < medication.weeksPaid 
        ? (medication.weeksPaid - weeksReceived) * costPerWeek 
        : 0;
    
    const refundElement = item.querySelector('[data-field="refund"]');
    if (refundElement) {
        refundElement.textContent = formatCurrency(refund);
    }
    
    // Store refund in medication object
    medication.refund = refund;
    
    return refund;
}

function calculateTotalRefund() {
    const totalRefund = state.selectedMedications.reduce((sum, med) => {
        if (med && med.refund) {
            return sum + med.refund;
        }
        return sum;
    }, 0);
    
    const refundSummary = document.getElementById('refundSummary');
    const totalRefundElement = document.getElementById('totalRefund');
    const medicationRefundsList = document.getElementById('medicationRefundsList');
    
    // Update main results display
    const totalRefundItem = document.getElementById('totalRefundItem');
    const totalIntendedRefund = document.getElementById('totalIntendedRefund');
    
    if (totalRefund > 0 && state.selectedMedications.length > 0) {
        refundSummary.style.display = 'block';
        if (totalRefundElement) {
            totalRefundElement.textContent = formatCurrency(totalRefund);
        }
        
        // Update main results total refund display
        if (totalIntendedRefund) {
            totalIntendedRefund.textContent = formatCurrency(totalRefund);
        }
        if (totalRefundItem) {
            totalRefundItem.style.display = 'flex';
        }
        
        // Update individual medication refunds list
        if (medicationRefundsList) {
            medicationRefundsList.innerHTML = '';
            state.selectedMedications.forEach(med => {
                if (med && med.refund && med.refund > 0) {
                    const refundItem = document.createElement('div');
                    refundItem.className = 'medication-refund-item';
                    refundItem.innerHTML = `
                        <span class="medication-name">${med.name}</span>
                        <span class="refund-amount">${formatCurrency(med.refund)}</span>
                    `;
                    medicationRefundsList.appendChild(refundItem);
                }
            });
        }
    } else {
        refundSummary.style.display = 'none';
        if (totalRefundItem) {
            totalRefundItem.style.display = 'none';
        }
    }
    
    return totalRefund;
}

function removeMedicationItem(index) {
    const medicationItem = document.querySelector(`[data-medication-index="${index}"]`);
    if (medicationItem) {
        medicationItem.remove();
        delete state.selectedMedications[index];
        
        // Reindex remaining items
        reindexMedicationItems();
        calculateTotalRefund();
    }
}

function reindexMedicationItems() {
    const items = document.querySelectorAll('.medication-item');
    items.forEach((item, newIndex) => {
        const oldIndex = item.getAttribute('data-medication-index');
        item.setAttribute('data-medication-index', newIndex);
        
        const dropdown = item.querySelector('.medication-dropdown');
        const removeBtn = item.querySelector('.remove-medication-btn');
        const detailsSection = item.querySelector('.medication-details');
        
        if (dropdown) {
            dropdown.setAttribute('data-index', newIndex);
            dropdown.addEventListener('change', function() {
                handleMedicationSelection(this, newIndex);
            });
        }
        
        if (removeBtn) {
            removeBtn.setAttribute('data-index', newIndex);
            removeBtn.addEventListener('click', function() {
                removeMedicationItem(newIndex);
            });
            removeBtn.style.display = newIndex === 0 ? 'none' : 'block';
        }
        
        if (detailsSection) {
            detailsSection.setAttribute('data-details-index', newIndex);
        }
        
        // Move medication data if it exists
        if (state.selectedMedications[oldIndex]) {
            state.selectedMedications[newIndex] = state.selectedMedications[oldIndex];
            delete state.selectedMedications[oldIndex];
        }
    });
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
- Weeks Received: ${state.currentCalculation.inputs.weeksReceived || 0}

Results:
- Refund Amount: ${formatCurrency(results.refund || 0)}
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
    if (calculation.inputs.weeksReceived !== undefined) {
        document.getElementById('weeksReceived').value = calculation.inputs.weeksReceived;
    }
    
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
    
    if (calculation.inputs.weeksReceived) {
        params.set('weeksReceived', calculation.inputs.weeksReceived);
    }
    
    window.history.pushState({}, '', `?${params.toString()}`);
}

function loadFromURL() {
    const params = new URLSearchParams(window.location.search);
    if (params.has('amount') && params.has('medication') && params.has('weeks')) {
        document.getElementById('amountPaid').value = params.get('amount');
        document.getElementById('medicationDispensed').value = params.get('medication');
        document.getElementById('medicationUnit').value = params.get('unit') || '';
        document.getElementById('weeksPaid').value = params.get('weeks');
        if (params.has('weeksReceived')) {
            document.getElementById('weeksReceived').value = params.get('weeksReceived');
        }
        
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
