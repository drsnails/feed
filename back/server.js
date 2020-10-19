const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const cookieParser = require('cookie-parser')
const session = require('express-session')

const app = express()
const http = require('http').createServer(app);
const io = require('socket.io')(http);

// Express App Config
app.use(cookieParser())
app.use(bodyParser.json());
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))
app.use(express.static('public'));

if (process.env.NODE_ENV === 'production') {
    console.log('productionnnn');
    app.use(express.static(path.resolve(__dirname, 'public')));
} else {
    console.log('log');

    const corsOptions = {
        origin: ['http://127.0.0.1:8080', 'http://localhost:8080', 'http://127.0.0.1:3000', 'http://localhost:3000'],
        credentials: true
    };
    app.use(cors(corsOptions));
}

// const authRoutes = require('./api/auth/auth.routes')
// const userRoutes = require('./api/user/user.routes')
// const reviewRoutes = require('./api/review/review.routes')
const commentRoutes = require('./api/comment/comment.routes')
const connectSockets = require('./api/socket/socket.routes')

// routes
// app.use('/api/auth', authRoutes)
app.use('/api/comment', commentRoutes)
// app.use('/api/user', userRoutes)
// app.use('/api/review', reviewRoutes)
connectSockets(io)

// app.get('/**', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// })

const logger = require('./services/logger.service')
const port = process.env.PORT || 3030;
app.get('/**', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html')); })
http.listen(port, () => {
    logger.info('Server is running on port: ' + port)
});

