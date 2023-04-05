const mongoose = require('mongoose');
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};
mongoose.connect('/Enter database url/', options)
    .then(() => console.log("connection successful"))
    .catch(err => console.log(err));
