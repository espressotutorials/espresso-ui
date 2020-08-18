const uuidv1 = require('uuid/v1');

module.exports = {
    output: {
        jsonpFunction: 'espressoElements-' + uuidv1(),
    },
};
