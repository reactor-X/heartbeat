'use strict';
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var session = require("express-session");
var favicon = require("serve-favicon");
var helmet = require("helmet");
var routes = require("./routes/index");
var app = express();
var appContainer=require('./config/app_container');
// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session(appContainer.config.session));
app.use(favicon(path.join(__dirname, '../public', 'favicon.ico')));
app.use(express.static(path.join(__dirname, '../public')));

//Bootstrap additional paths (from config file)
for (var key in appContainer.config.paths){
    app.use(appContainer.config.paths[key][0], express.static(path.join(__dirname,appContainer.config.paths[key][1])));
}
app.use('/', routes);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err;
    err = new Error('Not Found');
    err.status = 404;
    next(err);
});
// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}
// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});
module.exports = app;
//# sourceMappingURL=app.js.map