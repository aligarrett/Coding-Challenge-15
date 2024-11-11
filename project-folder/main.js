// Task 4: Create the Main Application

import { calculatePortfolioValue, getPortfolioAllocation } from './portfolio.js';
import { Transaction } from './transaction.js';

// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {

    // Display text in the HTML body
    function displayToPage(content, sectionId) {
        const container = document.getElementById(sectionId);
        if (container) {
            const paragraph = document.createElement('p');
            paragraph.textContent = content;
            container.appendChild(paragraph);
        } else {
            console.error(`Section with id ${sectionId} not found.`);
        }
    }

    // Function to display portfolio details
    function displayPortfolio() {
        const totalValue = calculatePortfolioValue();
        displayToPage(`Total Portfolio Value: $${totalValue.toFixed(2)}`, 'portfolio-output');

        const allocation = getPortfolioAllocation();
        displayToPage("Portfolio Allocation:", 'portfolio-output');
        allocation.forEach(asset => {
            displayToPage(`${asset.name} (${asset.type}): ${asset.allocation.toFixed(2)}%`, 'portfolio-output');
        });
    }

    // Display initial portfolio value and allocation (Only call this once)
    displayPortfolio();

    // Execute transactions and display the results
    new Transaction(1, 'buy', 30); // Buy 30 units of Vanguard S&P 500
    displayToPage(`Bought 30 units of Vanguard S&P 500`, 'transaction-output');

    new Transaction(4, 'sell', 50); // Sell 50 units of SPDR Bloomberg Barclays High Yield Bond
    displayToPage(`Sold 50 units of SPDR Bloomberg Barclays High Yield Bond`, 'transaction-output');

    new Transaction(5, 'buy', 100); // Buy 100 units of Government Bond
    displayToPage(`Bought 100 units of Government Bond`, 'transaction-output');

    // Display the updated portfolio value after transactions
    const updatedPortfolioValue = calculatePortfolioValue();
    displayToPage(`Updated Portfolio Value: $${updatedPortfolioValue.toFixed(2)}`, 'updated-portfolio-output');
});