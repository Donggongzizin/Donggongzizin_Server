const express = require('express');
const path = require('path');
const morgan = require('morgan');

const indexRouter = require('./routes/index');

const app = express();
app.set('port', process.env.PORT || 3000);


app.use(morgan('dev'));
app.use('/js', express.static(path.join(__dirname + "/js")));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/', indexRouter);


app.use((err,req,res,next) => {
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV !== 'production' ? err: {};
    res.status(err.status || 500),
    res.render('error');
});


app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기중');
})