let session = require('express-session');
let MongoDBStore = require('connect-mongodb-session')(session);

let store = new MongoDBStore({
    url: 'mongodb://pirates:123password@ds050869.mlab.com:50869/pirate-harbor',
    collection: 'mySessions'
});

store.on('error', function(error){
    console.error(error);
});

module.exports = session({
    secret: 'It\'s dangerous to go alone',
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7
    },
    store: store,
    resave: true,
    saveUninitialized: true
})