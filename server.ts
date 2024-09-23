import * as express from 'express';
import {Post} from "./interfaces/post.interface";
import * as jwt from 'jsonwebtoken';
import {User} from "./interfaces/user.interface";
import * as dotenv from 'dotenv';
import {authenticateToken} from "./services/jwt.service";

dotenv.config();

const app = express();
app.use(express.json())

const posts: Post[] = [
    {
        username: 'Kyle',
        title: 'Post 1'
    },{
        username: 'Kyle',
        title: 'Post 2'
    },
    {
        username: 'Jim',
        title: 'Post 3'
    }
]

app.get('/posts', authenticateToken,(req, res) => {
    res.json(posts.filter(post => post.username == req.user.username))
})

app.listen(3000);