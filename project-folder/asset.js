// Task 1: Create the Asset Module

export const assets = [
    {id: 1, name: "Vanguard S&P 500", type: "stock", price: 400, quantity: 50 },
    {id: 2, name: "Johnson & Johnson", type: "stock", price: 150, quantity: 100},
    {id: 3, name:"Procter & Gamble", type: "stock", price: 200, quanityt: 80},
    {id: 4, name: "SPDR Bloomberg Barclays High Yield Bond", type: "bond", price: 350, quantity: 250},
    {id: 5, name: "Government Bond", type: "bond", price: 550, quantity: 300}
];

export function getAssetById(id) {
    return assets.find(assets => assets.id === id);
}