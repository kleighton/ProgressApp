import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';
import favicon from 'serve-favicon';

/*eslint-disable no-console*/

const port = 5000;
const app = express();
const compiler = webpack(config);

app.use(favicon(path.join(__dirname , '../src/assets/favicon.png')));

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));
app.use(express.static('dist'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../src/core/index.html'));
});
app.get('/dashboard', function (req, res) {
    res.sendFile(path.join(__dirname, '../src/core/index.html'));
});
app.get('/users', function (req, res) {
    res.sendFile(path.join(__dirname, '../src/core/index.html'));
});
app.get('/reports', function (req, res) {
    res.sendFile(path.join(__dirname, '../src/core/index.html'));
});
app.get('/account', function (req, res) {
    res.sendFile(path.join(__dirname, '../src/core/index.html'));
});
app.get('/signup', function (req, res) {
    res.sendFile(path.join(__dirname, '../src/signup.html'));
});
app.get('/login', function (req, res) {
    res.sendFile(path.join(__dirname, '../src/login.html'));
})

app.listen(port, function (err) {
    if (err) {
        console.log(err);
    } else {
        open('http://localhost:' + port);
    }
});