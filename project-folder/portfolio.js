// Task 2: Create the Portfolio Module

import { assets } from './asset.js';

export function calculatePortfolioValue() {
    return assets.reduce((total, asset) => total + asset.price * asset.quantity, 0);
}

export function getPortfolioAllocation() {
    const totalValue = calculatePortfolioValue();
    return assets.map(asset => ({
        id: assets.id,
        name: assets.name,
        type: assets.type,
        allocation: ((assets.price * assets.quantity) / totalValue) * 100
    }));
}