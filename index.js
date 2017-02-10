let express = require('express');
let bodyParser = require('body-parser');
let server = express();
let mongoose = require('mongoose');

const PORT = process.env.PORT || 8080;

const connectionString = 'mongodb://pirates:123password@ds050869.mlab.com:50869/pirate-harbor';
let connection = mongoose.connection;

mongoose.connect(connectionString, {
	server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
	replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }
});

connection.on('error', () => {
    console.log('THERE WAS A CONNECTION PROBLEM')
})

connection.once('open', () => {
    console.log('We are now connected to space');
    server.listen(PORT, () => {
        console.log('YEP, it\s working', 'http://localhost:' + PORT);
    });
});

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.use(express.static(__dirname + '/public'))


// REQUIRING ROUTES
let postRoutes = require('./server-assets/routes/posts')

// USING ROUTES
server.use(postRoutes);