// Instructions to populate medications from Excel spreadsheet:
// 
// 1. Open your Excel file: "Membership Payment Breakdowns Itemized Receipts.xlsx"
// 2. Export the medication data to CSV format
// 3. Convert CSV to JSON format matching the structure below
// 4. Replace the medicationsData array in script.js with your data
//
// Expected columns in spreadsheet:
// - Medication Name
// - Amount Paid
// - Medication Dispensed (quantity)
// - Weeks Paid
// - Weeks Received
// - Unit (mg, ml, g, L, units, etc.)
//
// Example JSON structure:
/*
const medicationsData = [
    {
        id: 1,
        name: "Medication Name",
        amountPaid: 100.00,
        medicationDispensed: 50,
        weeksPaid: 4,
        weeksReceived: 3,
        unit: "mg"
    },
    // ... more medications
];
*/

// You can also manually add medications by editing the medicationsData array in script.js
// or by using the browser console:
// medicationsData.push({ id: 4, name: "New Medication", amountPaid: 150, medicationDispensed: 75, weeksPaid: 6, weeksReceived: 4, unit: "ml" });
// saveMedicationsToStorage();


