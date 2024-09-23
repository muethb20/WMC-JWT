"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var dotenv = require("dotenv");
var jwt_service_1 = require("./services/jwt.service");
dotenv.config();
var app = express();
app.use(express.json());
var posts = [
    {
        username: 'Kyle',
        title: 'Post 1'
    }, {
        username: 'Kyle',
        title: 'Post 2'
    },
    {
        username: 'Jim',
        title: 'Post 3'
    }
];
app.get('/posts', jwt_service_1.authenticateToken, function (req, res) {
    res.json(posts.filter(function (post) { return post.username == req.user.username; }));
});
app.listen(3000);
