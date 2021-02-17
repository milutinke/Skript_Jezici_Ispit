const FileSystem = require('fs');
const Path = require('path');

const basename = Path.basename(__filename);

module.exports = expressInstance => {
    FileSystem
        .readdirSync(__dirname)
        .filter(file => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
        .forEach(file => require(Path.join(__dirname, file))(expressInstance));
}