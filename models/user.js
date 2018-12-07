const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: String,
    provider: String,
    provider_id: String,
    photo: String,
    createAt: { type: Date, default: Date.now }
});

var User = mongoose.model('User', UserSchema);