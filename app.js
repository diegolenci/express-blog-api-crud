//importazione express
const express = require('express');
const app = express();
const port = 3000;

const postRouter = require('./routers/postsRouter');
const errorsHandler = require('./middlewares/errorsHandler');

//legge middlewares
app.use(errorsHandler);
//legge cartella public
app.use(express.static('public'));

app.use(express.json());

/*app.get('/', (req, res) => {
    res.send('Hello boolean');
})*/

app.use('/api/posts', postRouter);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});