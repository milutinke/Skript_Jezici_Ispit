class Utils {
    formatSequelizeError(error) {
        var i;
        for (i = 0; i < error.errors.length; i++) {
            if (error.errors[i].type === 'notNull Violation') {
                let fieldName = error.errors[i].message.split('.')[1].split(' ')[0].trim();
                fieldName = fieldName[0].toUpperCase() + fieldName.substr(1);
                error.errors[i].message = fieldName + ' can not be empty!';
            }
        }

        return error.errors[0].message;
    }
}

module.exports = new Utils();