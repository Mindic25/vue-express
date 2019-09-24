require('dotenv/config')
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose')
 


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

//connect to mongodb
 mongoose.connect(process.env.DB_CONNECTION, {
   useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify : false

  },)
  .then(() => console.log('MongDB Atlas connnected...'))
  .catch( err => console.log(err));
  





// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());



app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);



// catch 404 and forward to error handler


app.use( (req, res, next) => {
  next(createError(404));
});

// error handler
app.use( (err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({
     error: {
       message : res.locals.message
     }
  });
}); 

app.listen(4241,  () => {
  console.log('listening at port: 4241')
})

module.exports = app;