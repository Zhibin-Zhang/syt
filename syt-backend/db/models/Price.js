import User from './User.js';
import {connection} from '../util/MongooseUtil.js';
import mongoose from 'mongoose';

const priceSchema = new mongoose.Schema({
    user: {type: mongoose.ObjectId, ref: User},
    price: Number,
    effectiveDate: Date //Date should be converted to UTC date before saved to the database
});

const Price = connection.model('Price', priceSchema);

export default Price;
