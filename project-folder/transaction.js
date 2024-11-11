// Task 3: Create the Transaction Module

import { assets, getAssetById } from './asset.js';

export class Transaction {
    constructor(assetId, type, quantity) {
        this.assetId = assetId;
        this.type = type;
        this.quantity = quantity;
        this.executeTransaction();  // Execute transaction when an instance is created
    }

    executeTransaction() {
        const asset = getAssetById(this.assetId);  // Get asset by ID
        if (!asset) {
            throw new Error(`Asset with ID ${this.assetId} not found`);
        }

        // Log the entire assets array to track changes
        console.log('Current Assets:', assets);

        // Handle buy transaction
        if (this.type === "buy") {
            asset.quantity += this.quantity;
            console.log(`Bought ${this.quantity} units of ${asset.name}. New quantity: ${asset.quantity}`);

        // Handle sell transaction
        } else if (this.type === "sell") {
            if (asset.quantity < this.quantity) {
                throw new Error(`Insufficient quantity for sale of ${asset.name}`);
            }
            asset.quantity -= this.quantity;
            console.log(`Sold ${this.quantity} units of ${asset.name}. New quantity: ${asset.quantity}`);

        } else {
            throw new Error("Transaction type must be either 'buy' or 'sell'");
        }

        // Log updated assets array after transaction
        console.log('Updated Assets:', assets);
    }
}