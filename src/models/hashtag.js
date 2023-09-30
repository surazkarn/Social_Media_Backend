const mongoose = require('mongoose');

const hashtagSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post'
        }
    ]
}, {timestamps: true})

const Hashtag = mongoose.model('Hashtag', hashtagSchema);
module.exports = Hashtag;