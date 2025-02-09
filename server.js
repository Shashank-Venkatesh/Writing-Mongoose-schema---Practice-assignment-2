const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    Title: {
        type: String,
        unique: true,
        minlength: [5, 'Title must be at least 5 characters long'],
    },
    Content: {
        type: String,
        required: true,
        minlength: [50, 'Content must be at least 50 characters long'],
    },
    Author: {
        type: String,
        required: true,
    },
    Tags: {
        type: [String], 
    },
    Category: {
        type: String,
        default: 'General',
        required: true,
    },
    Likes: {
        type: [String],
    },
    comments: [
        {
            username: { type: String, required: true },
            message: { type: String, required: true, maxlength: 500 },
            commentedAt: { type: Date, default: Date.now },
        },
    ],
}, { timestamps: true });  // ✅ Automatically adds createdAt & updatedAt

const users = mongoose.model('User', userSchema);  
module.exports = users;  