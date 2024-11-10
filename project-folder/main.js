// Task 4: Create the Main Application

import { calculatePortfolioValue, getPortfolioAllocation } from './portfolio.js';
import { Transaction } from './transaction.js';

// Function to display portfolio

function displayPortfolio() {
    const totalValue = calculatePortfolioValue();
    console.log(`Total Portfolio Value: $${totalValue.toFixed(2)}`);

    const allocation = getPortfolioAllocation();
    console.log("Portfolio Allocation:");
    allocation.forEach(asset => {
        console.log(`- ${asset.name} (${asset.type}): ${asset.allocation.toFixed(2)}%`);
    });
}

// Display portfolio Value

console.log("Portfolio:");
displayPortfolio();

// Create transaction instances for different assets
const transaction1 = new Transaction(1, 'buy', 30); // Buy 30 units of Vanguard S&P 500
console.log(`Transaction 1: Buy 30 units of Vanguard S&P 500`); // Display transaction details

const transaction2 = new Transaction(4, 'sell', 50); // Sell 50 units of SPDR Bloomberg Barclays High Yield Bond
console.log(`Transaction 2: Sell 50 units of SPDR Bloomberg Barclays High Yield Bond`); // Display transaction details

// Display the updated portfolio value after transactions
const updatedPortfolioValue = calculatePortfolioValue();
console.log(`Updated Portfolio Value: $${updatedPortfolioValue.toFixed(2)}`);
