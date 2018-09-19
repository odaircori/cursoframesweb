const server = require('./config/server');
require('./config/database_umbler');
require('./config/route')(server);