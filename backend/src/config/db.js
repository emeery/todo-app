const mongoose = require('mongoose');

mongoose
    .connect(
        'mongodb+srv://emery:'+ process.env.MONGO_ATLAS + '@cluster0-l8vui.mongodb.net/todoapp?retryWrites=true', {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: 'todoapp'
        },
        function(err) {
            if (err) return console.dir(err);
        })
