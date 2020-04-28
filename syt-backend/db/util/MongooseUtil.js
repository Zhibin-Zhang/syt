import ConfigUtil from '../../util/ConfigUtil.js';
import mongoose from 'mongoose';

const connection = mongoose.createConnection(ConfigUtil.dbConnString, {
    useNewUrlParser: true,
    useUnifiedTopology:true,
    useCreateIndex: true,
    dbName: 'syt'
});

export {connection};