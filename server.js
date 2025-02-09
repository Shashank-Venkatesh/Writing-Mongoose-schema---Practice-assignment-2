const mongoose = require('mongoose');  // Importing mongoose for MongoDB interaction

// Defining the schema for the "User" collection
const userSchema = new mongoose.Schema({
    Title: {
        type: String,
        unique: true,  // Ensures each title is unique
        minlength: [5, 'Title must be at least 5 characters long'],  // Minimum length validation
    },
    Content: {
        type: String,
        required: true,  // Content field is mandatory
        minlength: [50, 'Content must be at least 50 characters long'],  // Minimum length validation
    },
    Author: {
        type: String,
        required: true,  // Author field is mandatory
    },
    Tags: {
        type: [String],  // Array of strings to store tags
    },
    Category: {
        type: String,
        default: 'General',  // Default category if none is provided
        required: true,  // Category is mandatory
    },
    Likes: {
        type: [String],  // Array of user IDs who liked the post
    },
    comments: [  // Array of comment objects
        {
            username: { type: String, required: true },  // Commenter's username (required)
            message: { type: String, required: true, maxlength: 500 },  // Comment text (max 500 chars)
            commentedAt: { type: Date, default: Date.now },  // Timestamp for when the comment was posted
        },
    ],
}, { timestamps: true });  // ✅ Automatically adds createdAt & updatedAt fields

// Creating a model named 'User' from the schema
const users = mongoose.model('User', userSchema);  

module.exports = users;  // Exporting the model to use in other parts of the application
