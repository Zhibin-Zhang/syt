import mongoose from 'mongoose';
import {connection} from '../util/MongooseUtil.js';

const userSchema = new mongoose.Schema({
    sid: {type: String, index: true, unique: true, required: true},
    userName: {type: String, unique: true, required: true},
    name: String,
    islandName: String,
    hemisphere: String,
    fruitType: String
});

const User = connection.model('User', userSchema);

export default User;