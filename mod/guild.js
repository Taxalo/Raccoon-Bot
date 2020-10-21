const {
    Schema,
    model
} = require('mongoose');

const Guild = Schema({
    id: String,
    name: String,
    logParent: {
        default: null,
        type: String
    },
    prefix: {
        default: '.',
        type: String
    }
});

module.exports = model('Guild', Guild);
