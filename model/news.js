const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const NewsSchema = new Schema({
    label: {
        type: String
    },
    text: {
        type: String
    }
});

mongoose.model('news', NewsSchema);