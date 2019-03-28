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
registerRoutes.route('/delete/:id').post(function(req, res) {
    RegisterApp.findById(req.params.id, function(err, todo) {
        if (!todo)
            res.status(404).send("data is not found");
        else
            todo.remove().then(todo => {
                res.json('Entry Deleted!');
            })
            .catch(err => {
                res.status(400).send("Delete not possible");
            });
    });
});
registerRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    RegisterApp.findById(id, function(err, todo) {
        res.json(todo);
    });
});
registerRoutes.route('/update/:id').post(function(req, res) {
    RegisterApp.findById(req.params.id, function(err, todo) {
        if (!todo)
            res.status(404).send("data is not found");
        else
            todo.primary_contact_fn = req.body.primary_contact_fn;
            todo.primary_contact_ln = req.body.primary_contact_ln;
            todo.product_name = req.body.product_name;
            todo.company_name = req.body.company_name;
            todo.vnf_category = req.body.vnf_category;
            todo.tags = req.body.tags;
            todo.save().then(todo => {
                res.json('Todo updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});
app.use('/registerApp', registerRoutes)
app.listen(PORT, function() {
    console.log(`Server running at http://${hostname}:${PORT}/`);
});