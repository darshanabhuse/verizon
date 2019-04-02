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
            todo.company_name= req.body.company_name;
            todo.company_website= req.body.company_website;
            todo.created_by= req.body.created_by;
            todo.description= req.body.description;
            todo.entity_type= req.body.entity_type;
            todo.h_city= req.body.h_city;
            todo.h_country= req.body.h_country,
            todo.h_state= req.body.h_state;
            todo.h_street= req.body.h_street;
            todo.h_zipcode= req.body.h_zipcode;
            todo.lob= req.body.lob;
            todo.phone_number= req.body.phone_number;
            todo.platform= req.body.platform;
            todo.primary_contact_country= req.body.primary_contact_country;
            todo.primary_contact_email= req.body.primary_contact_email;
            todo.primary_contact_fn= req.body.primary_contact_fn;
            todo.primary_contact_ln= req.body.primary_contact_ln;
            todo.primary_contact_phone= req.body.primary_contact_phone;
            todo.product_name= req.body.product_name;
            todo.product_type= req.body.product_type;
            todo.status= req.body.status;
            todo.tags= req.body.tags;
            todo.timestamp= req.body.timestamp;
            todo.usertype= req.body.usertype;
            todo.vnf_category= req.body.vnf_category;
            todo.vzw_contact= req.body.vzw_contact;
            todo.save().then(todo => {
                res.json({'Status': 'Success', 'Updated': 'Todo updated!'});
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