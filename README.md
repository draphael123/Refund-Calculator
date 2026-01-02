# Refund Converter

A web-based tool to process accurate refunds for patients who are due them. Calculate refund amounts for assessment fees, expanded labs, Getlabs fees, and subscription fees.

## Features

- Calculate cost per week
- Calculate cost per unit of medication
- Calculate medication per week
- Calculate total weekly cost per unit
- **Calculate refund amount** based on weeks paid vs. weeks received

## Usage

1. Open `index.html` in your web browser
2. Enter the following information:
   - **Amount Paid**: Total amount the patient has paid
   - **Amount of Medication Dispensed**: Total medication amount dispensed
   - **Number of Weeks Paid**: Number of weeks the patient paid for
   - **Number of Weeks Actually Received**: Number of weeks of medication actually received
3. Click "Calculate" to see the results

## Refund Calculation

The refund is calculated using the formula:
```
Refund = (Weeks Paid - Weeks Received) × Cost per Week
```

If the weeks received is equal to or greater than weeks paid, the refund will be $0.00.

## Technologies

- HTML5
- CSS3
- JavaScript (Vanilla)

## Deployment

This calculator can be deployed to GitHub Pages or any static hosting service.


