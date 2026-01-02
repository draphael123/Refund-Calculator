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

// Extract category from medication name
function extractCategory(medicationName) {
    const name = medicationName.toUpperCase();
    if (name.startsWith('TRT -')) return 'TRT';
    if (name.startsWith('HRT -')) return 'HRT';
    if (name.startsWith('ED -')) return 'ED';
    if (name.startsWith('HAIR -')) return 'HAIR';
    if (name.startsWith('GLP -')) return 'GLP';
    if (name.includes('ENCLOMIPHENE') || name.includes('ENC')) return 'ENC';
    if (name.includes('HCG')) return 'HCG';
    if (name.includes('THYROID')) return 'THYROID';
    if (name.includes('PROGESTERONE')) return 'HRT';
    if (name.includes('TESTOSTERONE')) return name.includes('FEMALE') ? 'HRT' : 'TRT';
    return 'OTHER';
}

// Get unique categories from medications
function getCategories() {
    const categories = new Set();
    medicationsData.forEach(med => {
        categories.add(extractCategory(med.name));
    });
    return Array.from(categories).sort();
}

// Get unique pharmacies from medications
function getPharmacies() {
    const pharmacies = new Set();
    medicationsData.forEach(med => {
        if (med.pharmacy) pharmacies.add(med.pharmacy);
    });
    return Array.from(pharmacies).sort();
}

// Filter medications based on current filters
function getFilteredMedications() {
    let filtered = [...medicationsData];
    
    // Category filter
    if (state.filters.categories.length > 0) {
        filtered = filtered.filter(med => 
            state.filters.categories.includes(extractCategory(med.name))
        );
    }
    
    // Pharmacy filter
    if (state.filters.pharmacies.length > 0) {
        filtered = filtered.filter(med => 
            med.pharmacy && state.filters.pharmacies.includes(med.pharmacy)
        );
    }
    
    // Price range filter
    if (state.filters.priceRange.min > 0 || state.filters.priceRange.max < Infinity) {
        filtered = filtered.filter(med => 
            med.amountPaid >= state.filters.priceRange.min && 
            med.amountPaid <= state.filters.priceRange.max
        );
    }
    
    return filtered;
}

// Save favorites to localStorage
function saveFavorites() {
    try {
        localStorage.setItem('medicationFavorites', JSON.stringify(state.favorites));
    } catch (e) {
        console.error('Error saving favorites:', e);
    }
}

// Add to favorites
function addToFavorites(medicationId) {
    if (!state.favorites.includes(medicationId)) {
        state.favorites.push(medicationId);
        saveFavorites();
        return true;
    }
    return false;
}

// Remove from favorites
function removeFromFavorites(medicationId) {
    const index = state.favorites.indexOf(medicationId);
    if (index > -1) {
        state.favorites.splice(index, 1);
        saveFavorites();
        return true;
    }
    return false;
}

// Add to recently used
function addToRecentlyUsed(medicationId) {
    const index = state.recentlyUsed.indexOf(medicationId);
    if (index > -1) {
        state.recentlyUsed.splice(index, 1);
    }
    state.recentlyUsed.unshift(medicationId);
    // Keep only last 10
    if (state.recentlyUsed.length > 10) {
        state.recentlyUsed = state.recentlyUsed.slice(0, 10);
    }
    try {
        localStorage.setItem('recentlyUsedMedications', JSON.stringify(state.recentlyUsed));
    } catch (e) {
        console.error('Error saving recently used:', e);
    }
}

// Save draft form state
function saveDraft() {
    const formData = {
        amountPaid: document.getElementById('amountPaid').value,
        medicationDispensed: document.getElementById('medicationDispensed').value,
        medicationUnit: document.getElementById('medicationUnit').value,
        weeksPaid: document.getElementById('weeksPaid').value,
        weeksReceived: document.getElementById('weeksReceived').value,
        timestamp: Date.now()
    };
    state.draft = formData;
    try {
        localStorage.setItem('formDraft', JSON.stringify(formData));
    } catch (e) {
        console.error('Error saving draft:', e);
    }
}

// Load draft form state
function loadDraft() {
    try {
        const saved = localStorage.getItem('formDraft');
        if (saved) {
            const draft = JSON.parse(saved);
            // Only load if draft is less than 7 days old
            if (Date.now() - draft.timestamp < 7 * 24 * 60 * 60 * 1000) {
                state.draft = draft;
                return draft;
            } else {
                localStorage.removeItem('formDraft');
            }
        }
    } catch (e) {
        console.error('Error loading draft:', e);
    }
    return null;
}

// Clear draft
function clearDraft() {
    state.draft = null;
    localStorage.removeItem('formDraft');
}

// Validate calculation for warnings
function validateCalculation(calculation) {
    const warnings = [];
    const { inputs, results } = calculation;
    
    // Check if refund exceeds 50% of amount paid
    if (results.refund > inputs.amountPaid * 0.5) {
        warnings.push({
            type: 'high-refund',
            message: `High refund amount: ${formatCurrency(results.refund)} (${((results.refund / inputs.amountPaid) * 100).toFixed(1)}% of amount paid). Please verify inputs.`,
            severity: 'warning'
        });
    }
    
    // Check if weeks received > weeks paid
    if (inputs.weeksReceived > inputs.weeksPaid) {
        warnings.push({
            type: 'weeks-mismatch',
            message: `Weeks received (${inputs.weeksReceived}) exceeds weeks paid (${inputs.weeksPaid}). This may indicate an error.`,
            severity: 'error'
        });
    }
    
    // Check for unusually high cost per unit
    if (results.costPerUnit > 1000) {
        warnings.push({
            type: 'high-cost',
            message: `High cost per unit: ${formatCurrency(results.costPerUnit)}. Please verify medication amount.`,
            severity: 'warning'
        });
    }
    
    // Check for unusually low cost per week
    if (results.costPerWeek < 1) {
        warnings.push({
            type: 'low-cost',
            message: `Very low cost per week: ${formatCurrency(results.costPerWeek)}. Please verify inputs.`,
            severity: 'warning'
        });
    }
    
    return warnings;
}

// Export data for backup
function exportBackup() {
    const backup = {
        version: '1.0',
        timestamp: new Date().toISOString(),
        medications: medicationsData,
        calculations: state.calculations,
        favorites: state.favorites,
        templates: state.templates,
        settings: {
            theme: localStorage.getItem('theme'),
            instructionsExpanded: localStorage.getItem('instructionsExpanded')
        }
    };
    const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `refund-calculator-backup-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast('Backup exported successfully!', 'success');
}

// Import data from backup
function importBackup(file) {
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const backup = JSON.parse(e.target.result);
            if (confirm('Importing backup will replace current data. Continue?')) {
                if (backup.medications) medicationsData = backup.medications;
                if (backup.calculations) state.calculations = backup.calculations;
                if (backup.favorites) state.favorites = backup.favorites;
                if (backup.templates) state.templates = backup.templates;
                if (backup.settings) {
                    if (backup.settings.theme) localStorage.setItem('theme', backup.settings.theme);
                    if (backup.settings.instructionsExpanded) localStorage.setItem('instructionsExpanded', backup.settings.instructionsExpanded);
                }
                saveMedicationsToStorage();
                saveHistory();
                saveFavorites();
                saveTemplates();
                location.reload();
            }
        } catch (err) {
            showToast('Error importing backup: Invalid file format', 'error');
        }
    };
    reader.readAsText(file);
}

// Save templates
function saveTemplates() {
    try {
        localStorage.setItem('calculationTemplates', JSON.stringify(state.templates));
    } catch (e) {
        console.error('Error saving templates:', e);
    }
}

// Save calculation as template
function saveAsTemplate(name, description) {
    if (!state.currentCalculation) return false;
    const template = {
        id: Date.now(),
        name: name || `Template ${state.templates.length + 1}`,
        description: description || '',
        inputs: state.currentCalculation.inputs,
        timestamp: new Date().toISOString()
    };
    state.templates.push(template);
    saveTemplates();
    return true;
}

// Load template
function loadTemplate(templateId) {
    const template = state.templates.find(t => t.id === templateId);
    if (!template) return false;
    const inputs = template.inputs;
    document.getElementById('amountPaid').value = inputs.amountPaid;
    document.getElementById('medicationDispensed').value = inputs.medicationDispensed;
    document.getElementById('medicationUnit').value = inputs.medicationUnit || '';
    document.getElementById('weeksPaid').value = inputs.weeksPaid;
    document.getElementById('weeksReceived').value = inputs.weeksReceived || 0;
    return true;
}

// State management
const state = {
    calculations: [],
    currentCalculation: null,
    selectedMedications: [],
    filters: {
        categories: [],
        pharmacies: [],
        priceRange: { min: 0, max: Infinity }
    },
    favorites: JSON.parse(localStorage.getItem('medicationFavorites') || '[]'),
    recentlyUsed: JSON.parse(localStorage.getItem('recentlyUsedMedications') || '[]'),
    draft: null,
    calculationNotes: {},
    templates: JSON.parse(localStorage.getItem('calculationTemplates') || '[]'),
    currency: localStorage.getItem('selectedCurrency') || 'USD'
};

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    loadMedicationsFromStorage();
    initializeTheme();
    initializeInstructions();
    initializeTooltips();
    initializeValidation();
    initializeForm();
    initializeMedications();
    initializeHistory();
    setTimeout(() => {
        initializeFiltersUI();
        initializeTemplates();
        initializeBackupRestore();
        loadCalculationNotes();
        
        // Add CSV export button handler
        const exportCsvBtn = document.getElementById('exportCsvBtn');
        if (exportCsvBtn) {
            exportCsvBtn.addEventListener('click', exportToCSV);
        }
    }, 200);
    initializeAutoSave();
    initializeFilters();
    checkForDraft();
    loadFromURL();
    loadHistory();
});

// Check for draft on load
function checkForDraft() {
    const draft = loadDraft();
    if (draft && !document.getElementById('amountPaid').value) {
        if (confirm('You have a saved draft. Would you like to restore it?')) {
            document.getElementById('amountPaid').value = draft.amountPaid || '';
            document.getElementById('medicationDispensed').value = draft.medicationDispensed || '';
            document.getElementById('medicationUnit').value = draft.medicationUnit || '';
            document.getElementById('weeksPaid').value = draft.weeksPaid || '';
            document.getElementById('weeksReceived').value = draft.weeksReceived || '';
            showToast('Draft restored', 'success');
        }
    }
}

// Initialize auto-save
function initializeAutoSave() {
    const inputs = ['amountPaid', 'medicationDispensed', 'weeksPaid', 'weeksReceived'];
    let saveTimeout;
    
    inputs.forEach(inputId => {
        const input = document.getElementById(inputId);
        if (input) {
            input.addEventListener('input', function() {
                clearTimeout(saveTimeout);
                saveTimeout = setTimeout(() => {
                    saveDraft();
                }, 1000); // Debounce 1 second
            });
            
            // Add smart suggestions for numeric inputs
            if (inputId === 'amountPaid' || inputId === 'weeksPaid' || inputId === 'weeksReceived') {
                initializeInputSuggestions(input, inputId);
            }
        }
    });
    
    const unitSelect = document.getElementById('medicationUnit');
    if (unitSelect) {
        unitSelect.addEventListener('change', function() {
            saveDraft();
        });
    }
}

// Initialize input suggestions based on history
function initializeInputSuggestions(input, inputId) {
    let suggestionsContainer = input.parentElement.querySelector('.input-suggestions');
    if (!suggestionsContainer) {
        suggestionsContainer = document.createElement('div');
        suggestionsContainer.className = 'input-suggestions';
        input.parentElement.appendChild(suggestionsContainer);
    }
    
    input.addEventListener('focus', function() {
        showInputSuggestions(input, inputId, suggestionsContainer);
    });
    
    input.addEventListener('blur', function() {
        // Delay hiding to allow clicks on suggestions
        setTimeout(() => {
            suggestionsContainer.classList.remove('show');
        }, 200);
    });
    
    input.addEventListener('input', function() {
        if (this.value.trim() === '') {
            suggestionsContainer.classList.remove('show');
        }
    });
}

// Show input suggestions
function showInputSuggestions(input, inputId, container) {
    const suggestions = getSuggestionsForField(inputId);
    if (suggestions.length === 0) {
        container.classList.remove('show');
        return;
    }
    
    container.innerHTML = '';
    suggestions.slice(0, 5).forEach(suggestion => {
        const suggestionEl = document.createElement('button');
        suggestionEl.type = 'button';
        suggestionEl.className = 'input-suggestion';
        suggestionEl.textContent = suggestion.value + (suggestion.count > 1 ? ` (${suggestion.count}x)` : '');
        suggestionEl.addEventListener('click', function() {
            input.value = suggestion.value;
            input.dispatchEvent(new Event('input'));
            input.focus();
            container.classList.remove('show');
        });
        container.appendChild(suggestionEl);
    });
    
    container.classList.add('show');
}

// Get suggestions for a field from history
function getSuggestionsForField(fieldId) {
    const suggestions = {};
    
    state.calculations.forEach(calc => {
        let value = null;
        if (fieldId === 'amountPaid') {
            value = calc.inputs.amountPaid.toString();
        } else if (fieldId === 'weeksPaid') {
            value = calc.inputs.weeksPaid.toString();
        } else if (fieldId === 'weeksReceived') {
            value = (calc.inputs.weeksReceived || 0).toString();
        }
        
        if (value) {
            if (!suggestions[value]) {
                suggestions[value] = { value, count: 0 };
            }
            suggestions[value].count++;
        }
    });
    
    return Object.values(suggestions)
        .sort((a, b) => b.count - a.count)
        .slice(0, 5);
}

// Initialize filters UI (will be implemented in HTML update)
function initializeFilters() {
    // Filter functionality is ready, UI will be added in HTML
}

// Theme Management
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
    
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);
    
    // Keyboard shortcuts button
    const shortcutsBtn = document.getElementById('keyboardShortcutsBtn');
    if (shortcutsBtn) {
        shortcutsBtn.addEventListener('click', showKeyboardShortcutsModal);
    }
}

// Instructions Management
function initializeInstructions() {
    const toggle = document.getElementById('instructionsToggle');
    const content = document.getElementById('instructionsContent');
    
    if (!toggle || !content) return;
    
    // Check if user has preference saved
    const savedState = localStorage.getItem('instructionsExpanded');
    const shouldExpand = savedState === 'true';
    
    if (shouldExpand) {
        content.classList.add('expanded');
        toggle.setAttribute('aria-expanded', 'true');
        toggle.querySelector('.instructions-toggle-text').textContent = 'Hide Instructions';
    }
    
    toggle.addEventListener('click', function() {
        const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
        const newState = !isExpanded;
        
        toggle.setAttribute('aria-expanded', newState.toString());
        toggle.querySelector('.instructions-toggle-text').textContent = newState ? 'Hide Instructions' : 'Show Instructions';
        
        if (newState) {
            content.classList.add('expanded');
            localStorage.setItem('instructionsExpanded', 'true');
        } else {
            content.classList.remove('expanded');
            localStorage.setItem('instructionsExpanded', 'false');
        }
    });
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
        if (input.id === 'amountPaid') {
            errorMessage = 'Please enter the amount paid (e.g., 100.00)';
        } else if (input.id === 'medicationDispensed') {
            errorMessage = 'Please enter the medication amount (e.g., 50mg or 50)';
        } else if (input.id === 'weeksPaid') {
            errorMessage = 'Please enter the number of weeks paid (e.g., 12)';
        } else if (input.id === 'weeksReceived') {
            errorMessage = 'Please enter the number of weeks received (e.g., 8)';
        } else {
            errorMessage = 'This field is required';
        }
    } else if (input.id === 'amountPaid') {
        const value = parseFloat(input.value);
        if (isNaN(value)) {
            isValid = false;
            errorMessage = 'Please enter a valid number (e.g., 100.00 or 100)';
        } else if (value < 0) {
            isValid = false;
            errorMessage = 'Amount must be greater than or equal to $0.00';
        } else if (value === 0) {
            isValid = false;
            errorMessage = 'Amount must be greater than $0.00';
        }
    } else if (input.id === 'medicationDispensed') {
        const value = extractNumber(input.value);
        if (isNaN(value)) {
            isValid = false;
            errorMessage = 'Please enter a valid amount (e.g., 100mg, 50ml, or just 100)';
        } else if (value <= 0) {
            isValid = false;
            errorMessage = 'Medication amount must be greater than 0';
        }
    } else if (input.id === 'weeksPaid') {
        const value = extractNumber(input.value);
        if (isNaN(value)) {
            isValid = false;
            errorMessage = 'Please enter a valid number (e.g., 12, "12 weeks", or "12w")';
        } else if (value <= 0) {
            isValid = false;
            errorMessage = 'Weeks paid must be greater than 0';
        } else if (value > 520) {
            isValid = false;
            errorMessage = 'Please enter a reasonable number of weeks (max 520 weeks / 10 years)';
        }
    } else if (input.id === 'weeksReceived') {
        const value = extractNumber(input.value);
        if (isNaN(value) && input.value.trim() !== '') {
            isValid = false;
            errorMessage = 'Please enter a valid number (e.g., 8, "8 weeks", or "8w")';
        } else if (value < 0) {
            isValid = false;
            errorMessage = 'Weeks received cannot be negative';
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
    const demoBtn = document.getElementById('demoBtn');
    
    form.addEventListener('submit', handleSubmit);
    clearBtn.addEventListener('click', clearForm);
    if (demoBtn) {
        demoBtn.addEventListener('click', loadExampleData);
    }
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
    
    // Get notes if available
    const notesElement = document.getElementById('calculationNotes');
    const notes = notesElement ? notesElement.value.trim() : '';
    
    // Store calculation
    const calculation = {
        id: Date.now(),
        timestamp: new Date().toISOString(),
        notes: notes,
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
    
    // Save notes
    if (notes) {
        if (!state.calculationNotes) state.calculationNotes = {};
        state.calculationNotes[calculation.id] = notes;
        try {
            localStorage.setItem('calculationNotes', JSON.stringify(state.calculationNotes));
        } catch (e) {
            console.error('Error saving notes:', e);
        }
    }
    
    state.currentCalculation = calculation;
    state.calculations.unshift(calculation);
    
    // Keep only last 10 calculations
    if (state.calculations.length > 10) {
        state.calculations = state.calculations.slice(0, 10);
    }
    
    // Validate and show warnings
    const warnings = validateCalculation(calculation);
    calculation.warnings = warnings;
    
    // Display results
    displayResults(calculation.results, warnings);
    
    // Clear draft after successful calculation
    clearDraft();
    
    // Save to localStorage
    saveHistory();
    
    // Update URL
    updateURL(calculation);
    
    showToast('Calculation completed!', 'success');
}

function displayResults(results, warnings = []) {
    // Display warnings if any
    if (warnings.length > 0) {
        displayWarnings(warnings);
    } else {
        hideWarnings();
    }
    
    // Update sticky summary card
    updateResultsSummaryCard(results);
    
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

function loadExampleData() {
    // Clear form first
    clearForm();
    
    // Populate with example data
    document.getElementById('amountPaid').value = '250.00';
    document.getElementById('medicationDispensed').value = '100mg';
    document.getElementById('medicationUnit').value = 'mg';
    document.getElementById('weeksPaid').value = '12';
    document.getElementById('weeksReceived').value = '8';
    
    // Validate all inputs
    document.querySelectorAll('input[required]').forEach(input => {
        validateInput(input);
    });
    
    showToast('Example data loaded! Click Calculate to see results.', 'success');
    
    // Scroll to form
    document.getElementById('calculatorForm').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function clearForm() {
    document.getElementById('calculatorForm').reset();
    document.getElementById('results').classList.add('hidden');
    document.getElementById('calculationHistory').classList.add('hidden');
    document.getElementById('refundSummary').style.display = 'none';
    document.getElementById('mainRefundItem').style.display = 'none';
    hideWarnings();
    hideResultsSummaryCard();
    
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
    clearDraft();
    updateURL(null);
    showToast('Form cleared', 'success');
}

// Display warnings
function displayWarnings(warnings) {
    let warningsContainer = document.getElementById('calculationWarnings');
    if (!warningsContainer) {
        warningsContainer = document.createElement('div');
        warningsContainer.id = 'calculationWarnings';
        warningsContainer.className = 'calculation-warnings';
        const resultsSection = document.getElementById('results');
        if (resultsSection) {
            resultsSection.insertBefore(warningsContainer, resultsSection.firstChild);
        }
    }
    
    warningsContainer.innerHTML = '';
    warningsContainer.classList.remove('hidden');
    
    warnings.forEach(warning => {
        const warningEl = document.createElement('div');
        warningEl.className = `warning-item ${warning.severity}`;
        warningEl.innerHTML = `
            <span class="warning-icon">${warning.severity === 'error' ? '⚠️' : 'ℹ️'}</span>
            <span class="warning-message">${warning.message}</span>
        `;
        warningsContainer.appendChild(warningEl);
    });
}

// Hide warnings
function hideWarnings() {
    const warningsContainer = document.getElementById('calculationWarnings');
    if (warningsContainer) {
        warningsContainer.classList.add('hidden');
    }
}

// Update results summary card
function updateResultsSummaryCard(results) {
    const summaryCard = document.getElementById('resultsSummaryCard');
    const summaryRefundAmount = document.getElementById('summaryRefundAmount');
    const summaryCostPerWeek = document.getElementById('summaryCostPerWeek');
    const summaryWeeksInfo = document.getElementById('summaryWeeksInfo');
    
    if (!summaryCard || !state.currentCalculation) return;
    
    const calc = state.currentCalculation;
    
    if (summaryRefundAmount) {
        summaryRefundAmount.textContent = formatCurrency(results.refund || 0);
    }
    
    if (summaryCostPerWeek) {
        summaryCostPerWeek.textContent = `Cost/Week: ${formatCurrency(results.costPerWeek)}`;
    }
    
    if (summaryWeeksInfo && calc.inputs) {
        summaryWeeksInfo.textContent = `${calc.inputs.weeksReceived || 0}/${calc.inputs.weeksPaid} weeks`;
    }
    
    summaryCard.classList.remove('hidden');
}

// Hide summary card
function hideResultsSummaryCard() {
    const summaryCard = document.getElementById('resultsSummaryCard');
    if (summaryCard) {
        summaryCard.classList.add('hidden');
    }
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
        
        // Get filtered medications
        let medsToShow = getFilteredMedications();
        
        // Sort: favorites first, then recently used, then by name
        medsToShow.sort((a, b) => {
            const aIsFavorite = state.favorites.includes(a.id);
            const bIsFavorite = state.favorites.includes(b.id);
            const aIsRecent = state.recentlyUsed.includes(a.id);
            const bIsRecent = state.recentlyUsed.includes(b.id);
            
            if (aIsFavorite && !bIsFavorite) return -1;
            if (!aIsFavorite && bIsFavorite) return 1;
            if (aIsRecent && !bIsRecent) return -1;
            if (!aIsRecent && bIsRecent) return 1;
            return a.name.localeCompare(b.name);
        });
        
        // Add recently used section if items exist
        const recentMeds = medsToShow.filter(m => state.recentlyUsed.includes(m.id));
        if (recentMeds.length > 0 && dropdown.selectedIndex === 0) {
            const recentGroup = document.createElement('optgroup');
            recentGroup.label = '━━━ Recently Used ━━━';
            dropdown.appendChild(recentGroup);
            
            recentMeds.forEach(med => {
                const option = document.createElement('option');
                option.value = med.id;
                const favoriteIcon = state.favorites.includes(med.id) ? ' ⭐' : '';
                option.textContent = `${med.name} - ${formatCurrency(med.amountPaid)}${med.pharmacy ? ` (${med.pharmacy})` : ''}${favoriteIcon}`;
                option.dataset.medication = JSON.stringify(med);
                recentGroup.appendChild(option);
            });
        }
        
        // Add favorites section
        const favoriteMeds = medsToShow.filter(m => state.favorites.includes(m.id) && !state.recentlyUsed.includes(m.id));
        if (favoriteMeds.length > 0) {
            const favGroup = document.createElement('optgroup');
            favGroup.label = '━━━ Favorites ⭐ ━━━';
            dropdown.appendChild(favGroup);
            
            favoriteMeds.forEach(med => {
                const option = document.createElement('option');
                option.value = med.id;
                option.textContent = `${med.name} - ${formatCurrency(med.amountPaid)}${med.pharmacy ? ` (${med.pharmacy})` : ''} ⭐`;
                option.dataset.medication = JSON.stringify(med);
                favGroup.appendChild(option);
            });
        }
        
        // Add all other medications
        const otherMeds = medsToShow.filter(m => !state.favorites.includes(m.id) && !state.recentlyUsed.includes(m.id));
        if (otherMeds.length > 0) {
            const otherGroup = document.createElement('optgroup');
            otherGroup.label = '━━━ All Medications ━━━';
            dropdown.appendChild(otherGroup);
            
            otherMeds.forEach(med => {
                const option = document.createElement('option');
                option.value = med.id;
                option.textContent = `${med.name} - ${formatCurrency(med.amountPaid)}${med.pharmacy ? ` (${med.pharmacy})` : ''}`;
                option.dataset.medication = JSON.stringify(med);
                otherGroup.appendChild(option);
            });
        }
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
            // Check for duplicate medication selection
            const isDuplicate = state.selectedMedications.some((med, idx) => 
                idx !== index && med && med.id === medication.id
            );
            
            if (isDuplicate) {
                const proceed = confirm(`You've already selected "${medication.name}". Do you want to add it again?`);
                if (!proceed) {
                    dropdown.value = '';
                    return;
                } else {
                    showToast('Duplicate medication added', 'warning');
                }
            }
            
            // Create a copy to avoid mutating original data
            const medCopy = { ...medication };
            
            // Add to recently used
            addToRecentlyUsed(medication.id);
            
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

// Currency support
const currencySymbols = {
    'USD': '$',
    'EUR': '€',
    'GBP': '£',
    'CAD': 'C$',
    'AUD': 'A$',
    'JPY': '¥',
    'CNY': '¥',
    'INR': '₹',
    'BRL': 'R$',
    'MXN': '$'
};

function formatCurrency(value) {
    const symbol = currencySymbols[state.currency] || '$';
    return symbol + value.toFixed(2);
}

function setCurrency(currency) {
    if (currencySymbols[currency]) {
        state.currency = currency;
        localStorage.setItem('selectedCurrency', currency);
        // Refresh display if calculation exists
        if (state.currentCalculation) {
            displayResults(state.currentCalculation.results, state.currentCalculation.warnings || []);
        }
        showToast(`Currency changed to ${currency}`, 'success');
    }
}

function formatNumber(value) {
    return value.toFixed(2);
}

// Copy Results
document.getElementById('copyBtn').addEventListener('click', function() {
    if (!state.currentCalculation) return;
    
    const results = state.currentCalculation.results;
    const text = `Refund Converter Results

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
        title: 'Refund Converter Results',
        text: `Check out my refund calculation!`,
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

// Keyboard Navigation & Shortcuts
document.addEventListener('keydown', function(e) {
    // Don't trigger shortcuts when typing in inputs/textarea
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        // Escape to clear focus
        if (e.key === 'Escape') {
            e.target.blur();
            return;
        }
        
        // Enter to submit (if form is valid and not in textarea)
        if (e.key === 'Enter' && e.target.tagName === 'INPUT' && !e.shiftKey) {
            const form = document.getElementById('calculatorForm');
            if (form.checkValidity()) {
                e.preventDefault();
                form.dispatchEvent(new Event('submit', { cancelable: true }));
            }
        }
        return;
    }
    
    // Global shortcuts (only when not in input)
    // ? - Show keyboard shortcuts
    if (e.key === '?' && !e.ctrlKey && !e.metaKey && !e.altKey) {
        e.preventDefault();
        showKeyboardShortcutsModal();
        return;
    }
    
    // Ctrl/Cmd + K - Focus search/filters
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const firstFilter = document.querySelector('.filter-chip');
        if (firstFilter) firstFilter.focus();
        return;
    }
    
    // Ctrl/Cmd + S - Save template
    if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
        const saveTemplateBtn = document.getElementById('saveTemplateBtn');
        if (saveTemplateBtn) saveTemplateBtn.click();
        return;
    }
    
    // Ctrl/Cmd + D - Clear form
    if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
        e.preventDefault();
        const clearBtn = document.getElementById('clearBtn');
        if (clearBtn) clearBtn.click();
        return;
    }
    
    // Arrow keys for navigation (when results are visible)
    const resultsSection = document.getElementById('results');
    if (resultsSection && !resultsSection.classList.contains('hidden')) {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            // Could implement navigation through results
        }
    }
});

// Show keyboard shortcuts modal
function showKeyboardShortcutsModal() {
    let modal = document.getElementById('keyboardShortcutsModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'keyboardShortcutsModal';
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h2>Keyboard Shortcuts</h2>
                    <button class="modal-close" aria-label="Close">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="shortcuts-section">
                        <h3>Form Navigation</h3>
                        <div class="shortcut-item">
                            <kbd>Enter</kbd>
                            <span>Submit form (when valid)</span>
                        </div>
                        <div class="shortcut-item">
                            <kbd>Esc</kbd>
                            <span>Clear focus from input</span>
                        </div>
                        <div class="shortcut-item">
                            <kbd>Tab</kbd>
                            <span>Move to next field</span>
                        </div>
                        <div class="shortcut-item">
                            <kbd>Shift</kbd> + <kbd>Tab</kbd>
                            <span>Move to previous field</span>
                        </div>
                    </div>
                    <div class="shortcuts-section">
                        <h3>Actions</h3>
                        <div class="shortcut-item">
                            <kbd>Ctrl</kbd> / <kbd>Cmd</kbd> + <kbd>S</kbd>
                            <span>Save as template</span>
                        </div>
                        <div class="shortcut-item">
                            <kbd>Ctrl</kbd> / <kbd>Cmd</kbd> + <kbd>D</kbd>
                            <span>Clear form</span>
                        </div>
                        <div class="shortcut-item">
                            <kbd>Ctrl</kbd> / <kbd>Cmd</kbd> + <kbd>K</kbd>
                            <span>Focus filters</span>
                        </div>
                    </div>
                    <div class="shortcuts-section">
                        <h3>Help</h3>
                        <div class="shortcut-item">
                            <kbd>?</kbd>
                            <span>Show this shortcuts modal</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
        
        modal.querySelector('.modal-close').addEventListener('click', () => {
            modal.classList.remove('show');
        });
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('show');
            }
        });
    }
    
    modal.classList.add('show');
}

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

// Initialize filters UI
function initializeFiltersUI() {
    const categoryFiltersContainer = document.getElementById('categoryFilters');
    const pharmacyFiltersContainer = document.getElementById('pharmacyFilters');
    const priceRangeFilter = document.getElementById('priceRangeFilter');
    const clearFiltersBtn = document.getElementById('clearFiltersBtn');
    
    if (!categoryFiltersContainer || !pharmacyFiltersContainer) return;
    
    // Create category filter chips
    const categories = getCategories();
    categories.forEach(category => {
        const chip = document.createElement('button');
        chip.type = 'button';
        chip.className = 'filter-chip';
        chip.textContent = category;
        chip.dataset.category = category;
        chip.addEventListener('click', function() {
            this.classList.toggle('active');
            const isActive = this.classList.contains('active');
            if (isActive) {
                if (!state.filters.categories.includes(category)) {
                    state.filters.categories.push(category);
                }
            } else {
                const index = state.filters.categories.indexOf(category);
                if (index > -1) state.filters.categories.splice(index, 1);
            }
            updateFiltersUI();
            populateMedicationDropdowns();
        });
        categoryFiltersContainer.appendChild(chip);
    });
    
    // Create pharmacy filter chips
    const pharmacies = getPharmacies();
    pharmacies.forEach(pharmacy => {
        const chip = document.createElement('button');
        chip.type = 'button';
        chip.className = 'filter-chip';
        chip.textContent = pharmacy;
        chip.dataset.pharmacy = pharmacy;
        chip.addEventListener('click', function() {
            this.classList.toggle('active');
            const isActive = this.classList.contains('active');
            if (isActive) {
                if (!state.filters.pharmacies.includes(pharmacy)) {
                    state.filters.pharmacies.push(pharmacy);
                }
            } else {
                const index = state.filters.pharmacies.indexOf(pharmacy);
                if (index > -1) state.filters.pharmacies.splice(index, 1);
            }
            updateFiltersUI();
            populateMedicationDropdowns();
        });
        pharmacyFiltersContainer.appendChild(chip);
    });
    
    // Price range filter
    if (priceRangeFilter) {
        priceRangeFilter.addEventListener('change', function() {
            const value = this.value;
            if (value === 'all') {
                state.filters.priceRange = { min: 0, max: Infinity };
            } else if (value === '500+') {
                state.filters.priceRange = { min: 500, max: Infinity };
            } else {
                const [min, max] = value.split('-').map(Number);
                state.filters.priceRange = { min, max };
            }
            populateMedicationDropdowns();
            updateFiltersUI();
        });
    }
    
    // Clear filters button
    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', function() {
            state.filters = { categories: [], pharmacies: [], priceRange: { min: 0, max: Infinity } };
            document.querySelectorAll('.filter-chip').forEach(chip => chip.classList.remove('active'));
            if (priceRangeFilter) priceRangeFilter.value = 'all';
            populateMedicationDropdowns();
            updateFiltersUI();
        });
    }
}

// Update filters UI visibility
function updateFiltersUI() {
    const clearFiltersBtn = document.getElementById('clearFiltersBtn');
    const hasActiveFilters = state.filters.categories.length > 0 || 
                            state.filters.pharmacies.length > 0 || 
                            state.filters.priceRange.min > 0 || 
                            state.filters.priceRange.max < Infinity;
    if (clearFiltersBtn) {
        clearFiltersBtn.style.display = hasActiveFilters ? 'block' : 'none';
    }
}

// Update initialization
function initializeAllFeatures() {
    initializeMedications();
    setTimeout(() => {
        initializeFiltersUI();
        initializeTemplates();
        initializeBackupRestore();
        loadCalculationNotes();
        
        // Add CSV export button handler
        const exportCsvBtn = document.getElementById('exportCsvBtn');
        if (exportCsvBtn) {
            exportCsvBtn.addEventListener('click', exportToCSV);
        }
    }, 100);
}

// Template management
function initializeTemplates() {
    const saveTemplateBtn = document.getElementById('saveTemplateBtn');
    const clearTemplatesBtn = document.getElementById('clearTemplatesBtn');
    
    if (saveTemplateBtn) {
        saveTemplateBtn.addEventListener('click', function() {
            if (!document.getElementById('amountPaid').value) {
                showToast('Please fill in form fields before saving template', 'error');
                return;
            }
            const name = prompt('Enter template name:');
            if (name) {
                const description = prompt('Enter template description (optional):');
                const template = {
                    id: Date.now(),
                    name: name,
                    description: description || '',
                    inputs: {
                        amountPaid: document.getElementById('amountPaid').value,
                        medicationDispensed: document.getElementById('medicationDispensed').value,
                        medicationUnit: document.getElementById('medicationUnit').value || '',
                        weeksPaid: document.getElementById('weeksPaid').value,
                        weeksReceived: document.getElementById('weeksReceived').value || 0
                    },
                    timestamp: new Date().toISOString()
                };
                state.templates.push(template);
                saveTemplates();
                showToast('Template saved!', 'success');
                renderTemplates();
            }
        });
    }
    
    if (clearTemplatesBtn) {
        clearTemplatesBtn.addEventListener('click', function() {
            if (confirm('Clear all templates?')) {
                state.templates = [];
                saveTemplates();
                renderTemplates();
            }
        });
    }
    
    renderTemplates();
}

function renderTemplates() {
    const templatesList = document.getElementById('templatesList');
    const templatesSection = document.getElementById('templatesSection');
    if (!templatesList || !templatesSection) return;
    
    if (state.templates.length === 0) {
        templatesSection.classList.add('hidden');
        return;
    }
    
    templatesSection.classList.remove('hidden');
    templatesList.innerHTML = '';
    
    state.templates.forEach(template => {
        const item = document.createElement('div');
        item.className = 'template-item';
        item.innerHTML = `
            <div class="template-header">
                <strong>${template.name}</strong>
                <span class="template-date">${new Date(template.timestamp).toLocaleDateString()}</span>
            </div>
            ${template.description ? `<div class="template-description">${template.description}</div>` : ''}
            <div class="template-actions">
                <button class="template-btn load" data-id="${template.id}">Load</button>
                <button class="template-btn delete" data-id="${template.id}">Delete</button>
            </div>
        `;
        
        item.querySelector('.template-btn.load').addEventListener('click', () => {
            if (loadTemplate(template.id)) {
                showToast('Template loaded!', 'success');
            }
        });
        
        item.querySelector('.template-btn.delete').addEventListener('click', () => {
            if (confirm('Delete this template?')) {
                state.templates = state.templates.filter(t => t.id !== template.id);
                saveTemplates();
                renderTemplates();
            }
        });
        
        templatesList.appendChild(item);
    });
}

// Backup/Restore
function initializeBackupRestore() {
    const exportBackupBtn = document.getElementById('exportBackupBtn');
    const importBackupBtn = document.getElementById('importBackupBtn');
    const importBackupFile = document.getElementById('importBackupFile');
    const currencySelector = document.getElementById('currencySelector');
    
    if (exportBackupBtn) {
        exportBackupBtn.addEventListener('click', exportBackup);
    }
    
    if (importBackupBtn && importBackupFile) {
        importBackupBtn.addEventListener('click', () => importBackupFile.click());
        importBackupFile.addEventListener('change', function(e) {
            if (this.files.length > 0) {
                importBackup(this.files[0]);
                this.value = '';
            }
        });
    }
    
    // Currency selector
    if (currencySelector) {
        currencySelector.value = state.currency;
        currencySelector.addEventListener('change', function() {
            setCurrency(this.value);
        });
    }
}

// Enhanced CSV Export
function exportToCSV() {
    if (!state.currentCalculation) return;
    
    const calc = state.currentCalculation;
    const notes = state.calculationNotes[calc.id] || '';
    const csv = `Refund Converter - Calculation Export
Date,${new Date(calc.timestamp).toLocaleString()}
Notes,${notes.replace(/,/g, ';')}

Inputs
Amount Paid,${calc.inputs.amountPaid}
Medication Dispensed,${calc.inputs.medicationDispensed}
Unit,${calc.inputs.medicationUnit}
Weeks Paid,${calc.inputs.weeksPaid}
Weeks Received,${calc.inputs.weeksReceived || 0}

Results
Refund Amount,${calc.results.refund || 0}
Cost per Week,${calc.results.costPerWeek}
Cost per Unit,${calc.results.costPerUnit}
Medication per Week,${calc.results.medicationPerWeek}
Weekly Cost per Unit,${calc.results.weeklyCostPerUnit}

Projections
1 Month (4 weeks),${calc.results.costOneMonth}
3 Months (12 weeks),${calc.results.costThreeMonths}
6 Months (24 weeks),${calc.results.costSixMonths}
1 Year (52 weeks),${calc.results.costOneYear}`;
    
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `refund-calculation-${new Date(calc.timestamp).toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast('CSV exported!', 'success');
}


// Load calculation notes on initialization
function loadCalculationNotes() {
    try {
        const saved = localStorage.getItem('calculationNotes');
        if (saved) {
            state.calculationNotes = JSON.parse(saved);
        }
    } catch (e) {
        console.error('Error loading notes:', e);
    }
}

