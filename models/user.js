const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {type: String, required:true, unique: true},
    email: {type: String, required:true, unique: true},
    password: {type: String, required: true},
    location: {type: String, required: false},
    phone: {type: String, default: false},
    updated: {type: Boolean, default: false},
    isAdmin: {type: Boolean, default: false},
    isAgent: {type: Boolean, default: false},
    skills: {type: Boolean, default: false, required: false},
    profile: {type: String,required:true, default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3URjWpcZfPfzAHxrU_Xms2GzfUJmvWXGjuw&s'},
}, {timestamps: true});

module.exports = mongoose.model('User', UserSchema);