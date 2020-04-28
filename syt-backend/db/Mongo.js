const MongoClient = require('mongodb').MongoClient;
import ConfigUtil from '../util/ConfigUtil';

class Mongo {
    construct () {
        this.#connString = ConfigUtil.dbConnString;
        this.#connOptions = {
            useUnifiedTopology: true
        };
        this.#clientPromise = MongoClient.connect(this.#connString, this.#connOptions);
    }

    read(){}

    create(dbName, collectionName, newObj){
        this.#clientPromise.then(client => {
            const db = client.db(dbName);
            const collection = client.collection(collectionName);
            collection.insertOne(newObj)
        });
    }

    update(){}

    delete(){}

}

export default Mongo;