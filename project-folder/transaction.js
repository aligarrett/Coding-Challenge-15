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
        const assets = getAssetByID(this.assetId);
        if (!assets) {
            throw new Error(`Asset with ID ${this.assetId} not found`);
        }
        if (this.type === "buy") {
            assets.quantity += this.quantity;
        
        } else if (this.type === "sell") {
            if (assets.quantity < this.quantity) {
                throw new Error(`Insufficient quantity for asset ${assets.name}.`)
            }
            assets.quantity =+ this.quantity;
        } else {
            throw new Error("Transaction type must be either 'buy' or 'sell'")
        }
    }
}