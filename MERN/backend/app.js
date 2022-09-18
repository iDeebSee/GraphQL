let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let mongoose = require('mongoose');
//Set up default mongoose connection
let mongoDB = 'mongodb://localhost:27017/moviesdb';//'mongodb+srv://movies:movies0000@movies.ygp7vz1.mongodb.net/test'  //'mongodb://localhost:27017/moviesdb';
let { graphqlHTTP } = require('express-graphql');
let { buildSchema } = require('graphql');
let movieSchema = require('./schema/movieSchema')
let resolver = require('./resolver/resolver')


let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');

let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => { console.log("mongoDB connected") }).catch((err) => { console.log('Error', err) });
//Get the default connection

let db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//Setting GraphQL
// const schema = buildSchema(`
//     type Query{
//         name:String
//     }
// `)

// const rootValue = {
//     name: () => {
//         return 'GraphQL API'
//     }
// }

app.use('/graphql', graphqlHTTP({ schema: movieSchema, graphiql: true, rootValue: resolver }))

module.exports = app;
