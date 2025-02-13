//importazione express
const express = require('express');
const app = express();
const port = 3000;

const postRouter = require('./routers/postsRouter')

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello boolean');
})

app.use('api/posts', postRouter);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});