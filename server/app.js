const express = require('express');
const app = express();
require('./db/conn');
const cors = require('cors');

app.use(express.json());
app.use(cors({
    credentials: true
}));
app.use(require('./router/auth'))


// app.get('/', (req, res) => {
//     res.send("hello world!");
// })
// app.get('/about', (req, res) => {
//     res.send("hello about!");
// })
// app.get('/contact', (req, res) => {
//     res.send("hello contact!");
// })
// app.get('/login', (req, res) => {
//     res.send("hello login!");
// })
// app.get('/reg', (req, res) => {
//     res.send("hello reg!");
// })

app.listen(5000, () => {
    console.log(`server listening on pot no 5000`);
})