import fs from 'fs';
import path from 'path';

class ConfigUtil {

    static #configFilePath = path.join(path.resolve(), 'config.json');
    static #file = JSON.parse(fs.readFileSync(this.#configFilePath)); 

    static get dbConnString(){
        return this.#file['db_string'];
    }
}

export default ConfigUtil;