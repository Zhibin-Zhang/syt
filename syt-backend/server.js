import Price from './db/models/Price.js';
import User from './db/models/User.js';
import express from 'express';

const app = express();
const port = 3000;

const connectString = 'mongodb+srv://zzhang:y3Nu37EvHJpJmdB@cluster0-qzdrh.mongodb.net/test?retryWrites=true&w=majority';

app.get('/', (req, res) => {
    let user = new User({
        sid: 'SW-123-4545',
        name: '测试',
        islandName: '卡拉粒粒',
        hemisphere: 'North',
        fruitType: 'Pear'
    });
    user = user.save();
    console.log(user);
});



app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
