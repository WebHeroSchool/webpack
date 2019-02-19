const path = require('path');

module.exports = {
    entry: './scr/scripts/index.js',
    output : {
        path: path.resolve(__dirname, 'buld/scripts'),
        filename: 'index.min.js'
    }
};