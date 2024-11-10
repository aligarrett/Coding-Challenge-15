// Task 3: Create the Transaction Module

import { assets, getAssetById } from './asset.js';

export class Transaction {
    constructor(assetId, type, quantity) {
        this.assetId = assetId;
        this.type = type;
        this.quantity = quantity;
        this.executeTransaction();
    }

    executeTransaction() {
        const asset = getAssetById(this.assetId); // Corrected function name
        if (!asset) {
            throw new Error(`Asset with ID ${this.assetId} not found`);
        }
        if (this.type === "buy") {
            asset.quantity += this.quantity;
        
        } else if (this.type === "sell") {
            if (asset.quantity < this.quantity) {
                throw new Error(`Insufficient quantity for asset ${asset.name}.`);
            }
            asset.quantity -= this.quantity; // Corrected operator
        } else {
            throw new Error("Transaction type must be either 'buy' or 'sell'");
        }
    }
}