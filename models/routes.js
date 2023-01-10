const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://acollaguazo:acollaguazo@cluster0.gfnbh4f.mongodb.net/router_db?retryWrites=true&w=majority', {
    useNewUrlParser: true,
},
(err) => {
    if (!err) {
        console.log('Connection suceeded');
    } else {
        console.log('Error in connection' + err);
    }
});

require('./routes.model');