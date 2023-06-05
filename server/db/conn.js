const mongoose = require('mongoose');

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true   
};
mongoose.connect('/Enter database url/', options)
    .then(() => console.log("Connection Successful"))
    .catch(err => console.log(err));
