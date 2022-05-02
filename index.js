const express = require('express');
const app = express();
const cors = require('cors'); 
require("dotenv").config();

app.use(express.json());
app.use(cors());
// app.use(cors({

//   origin:'https://hypnos-app.herokuapp.com/', 
// credentials:true,            //access-control-allow-credentials:true
// optionSuccessStatus:200
// }));

const db = require('./models');

// Router
const postRouter = require('./routes/Posts')
app.use('/posts', postRouter);

const commentsRouter = require('./routes/Comments')
app.use('/comments', commentsRouter);

const usersRouter = require('./routes/Users')
app.use('/auth', usersRouter);

const likesRouter = require('./routes/Likes')
app.use('/likes', likesRouter);

db.sequelize
.sync()
.then(() => {
  app.listen( process.env.PORT || 3001, () => {
    console.log("Yeah! Your backend server is running on port 3001");
});
})
.catch((err) =>{
console.log(err);
});


