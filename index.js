let express = require('express');
let bodyParser = require('body-parser');
let server = express();
let mongoose = require('mongoose');
let session = require('./server-assets/sessions/sessions');

const PORT = process.env.PORT || 8080;

let Auth = require('./server-assets/routes/user-routes');

function Validate(req, res, next) {
    if(req.method !== 'GET' && !req.session.uid) {
        return res.send({ error: 'Please Login or Register to continue' })
    }
    return next()
}

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.use(express.static(__dirname + '/public'))

server.use(session);
server.use(Auth);
server.use(Validate);

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
    console.log('We are now connected to the pirate bay but not illegal');
    server.listen(PORT, () => {
        console.log('YEP, it\s working', 'http://localhost:' + PORT);
    });
});

// REQUIRING ROUTES
let postRoutes = require('./server-assets/routes/posts')
let commentRoutes = require('./server-assets/routes/comments')
let subCommentRoutes = require('./server-assets/routes/sub-comments')

// USING ROUTES
server.use(postRoutes);
server.use(commentRoutes);
server.use(subCommentRoutes);