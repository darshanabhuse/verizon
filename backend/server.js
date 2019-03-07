const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const todoRoutes = express.Router();
const registerRoutes = express.Router();
const hostname = '127.0.0.1';
const PORT = 9000;
let RegisterApp = require('./registerApp.model');
app.use(cors());
app.use(bodyParser.json());
mongoose.connect('mongodb://127.0.0.1:27017/verizon_app', { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})
registerRoutes.route('/').get(function(req, res) {
    RegisterApp.find(function(err, todos) {
        if (err) {
            console.log(err);
        } else {
            res.json(todos);
        }
    });
});

registerRoutes.route('/add').post(function(req, res) {
    let registerapp = new RegisterApp(req.body);
    registerapp.save()
        .then(registerapp => {
            res.status(200).json({'Status': 'Success', 'Register': 'Registration successfully Done'});
        })
        .catch(err => {
            res.status(400).json({'Status': 'failed', 'error': 'Registration failed'});
        });
});
app.use('/registerApp', registerRoutes)
app.listen(PORT, function() {
    console.log(`Server running at http://${hostname}:${PORT}/`);
});