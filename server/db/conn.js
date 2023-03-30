const mongoose = require('mongoose');

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};
mongoose.connect('mongodb://0.0.0.0:27017/firstdb', options)
    .then(() => console.log("connection successful"))
    .catch(err => console.log(err));
