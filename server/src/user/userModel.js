import mongoose from "mongoose";
const Schema = mongoose.Schema;
const AutoIncrement = require('mongoose-sequence')(mongoose);

let userSchema = new Schema({
    usreName: { type: String, default: null },
    userAge: { type: String, default: null },
    userSalary: { type: String, default: null },
}, { timestamps: true });

userSchema.plugin(AutoIncrement, { inc_field: 'userId' });
const user = mongoose.model('user', userSchema);
module.exports = user;