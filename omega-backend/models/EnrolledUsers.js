const mongoose = require('mongoose');

const enrolledUserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    mobile: { type: String,required: true, unique: true},
    email: { type: String, required: true, unique: true },
});

module.exports = mongoose.model('EnrolledUser', enrolledUserSchema);
