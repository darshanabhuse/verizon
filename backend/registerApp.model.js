const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let RegisterApp = new Schema({
    company_name: {
        type: String
    },
    entity_type: {
        type: String
    },
    company_website: {
        type: String
    },
    phone_number: {
        type: Number
    },
    h_street: {
        type: String
    },
    h_city: {
        type: String
    },
    h_state: {
        type: String
    },
    h_country: {
        type: String
    },
    h_zipcode: {
        type: String
    },
    product_name: {
        type: String
    },
    product_type: {
        type: String
    },
    lob: {
        type: String
    },
    vnf_category: {
        type: String
    },
    platform: {
        type: String
    },
    tags: {
        type: String
    },
    description: {
        type: String
    },
    primary_contact_country: {
        type: String
    },
    primary_contact_fn: {
        type: String
    },
    primary_contact_ln: {
        type: String
    },
    primary_contact_email: {
        type: String
    },
    primary_contact_phone: {
        type: Number
    },
    usertype: {
        type: String
    },
    application_id: {
        type: String
    },
    status: {
        type: String
    },
    timestamp: {
        type: String
    },
    created_by: {
        type: String
    },
    vzw_contact: {
        type: String
    }
});
module.exports = mongoose.model('RegisterApp', RegisterApp);