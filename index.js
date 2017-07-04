let path = require('path');
let stripComments = require('strip-json-comments');
let fs = require('fs');

let filename = path.join(__dirname, '.eslintrc');
let data = fs.readFileSync(filename, {
	encoding: 'utf-8'
});
let dataWithoutComments = stripComments(data);
let parsed = JSON.parse(dataWithoutComments);

module.exports = parsed;
