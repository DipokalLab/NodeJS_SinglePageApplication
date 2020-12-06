const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const fs = require('fs');
const bodyParser = require('body-parser');

const config = require('../config/index.json');

exports.load_index = function (req, res) {
    res.render("index");
}

exports.load_init = function (req, res) {
    res.json({
        title:config.sitetitle
    });
}

exports.load_page = function (req, res) {
    switch (req.params.id) {
        case '0':
            res.render("page0");
            break;
    
        default:
            break;
    }
    

}

/*
exports.load_login = function (req, res) {
    res.render("auth/login", {
        title:config.sitetitle+" | "+config.loginsubtitle
    });
}

exports.load_join = function (req, res) {
    res.render("auth/join", {
        title:config.sitetitle+" | "+config.joinsubtitle
    });
}
*/