const sessions = require('../data/sessions.json');
const {DataSource} = require('apollo-datasource');


class SessionAPI extends DataSource {
    constructor() {
        super();
    }

    initialize(config) {

    }
    //create methods to get data from datasource
    getSessions(){
        return sessions;
    }
}

module.exports = SessionAPI;