var logger = require('simple-node-logger');

module.exports = logger.createSimpleFileLogger({
    logFilePath: './logs/debug.log',
    timestampFormat: 'YYYY-MM-DD HH:mm:ss.SSS'
});