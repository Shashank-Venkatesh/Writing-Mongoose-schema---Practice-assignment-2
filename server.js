const mongoose = require('mongoose'); // Corrected the require statement

// Define the Comment Schema (Subdocument for blog posts)
const CommentSchema = mongoose.Schema({
    // Username of the commenter
    Username: {
        type: String,
        required: true, // Commenter username is required
    },
    // The comment text
    Message: {
        type: String,
        required: true, // Message is required
    },
    // Automatically records the comment creation time
    Commented_At: {
        type: Date,
        default: Date.now, // Use Date.now to store the current timestamp
    }
});

// Define the main Post Schema
const PostSchema = mongoose.Schema({
    // Serves as the title of the blog post
    Title: {
        type: String,
        required: true,
        unique: true, // Ensures that the title is unique
        minlength: [5, 'Title must be at least 5 characters long'],
    },
    // The main content of the blog post
    Content: {
        type: String,
        required: true,
        minlength: [50, 'Content must be at least 50 characters long'],
    },
    // Username of the author
    Author: {
        type: String,
    },
    // Optional field for storing tags or keywords related to the post
    Tags: {
        type: [String],
        default: [],
    },
    // Indicates the post category
    Category: {
        type: String,
        default: 'General', // Default category is 'General'
    },
    // Stores usernames of users who liked the post
    Likes: {
        type: [String],
        default: [],
    },
    // Automatically records the post creation time
    Created_At: {
        type: Date,
        default: Date.now, // Automatically set current timestamp
    },
    // Automatically updated on modifications
    Updated_At: {
        type: Date,
        default: Date.now, // Set initial updated time to creation time
    },
    // Array of comments (Subdocuments)
    Comments: [CommentSchema], // Embeds the comment schema into the post
}, { timestamps: true }); // Automatically handle `Created_At` and `Updated_At`

// Create the Post model using the PostSchema
const Post = mongoose.model('Post', PostSchema);

// Export the Post model
module.exports = Post;
