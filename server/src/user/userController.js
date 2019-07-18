import userModel from "./userModel";

class User {

}

User.prototype.addUser = (req, res) => {
    let obj = req.body;
    console.log("obj ", obj);
    let model = new userModel(obj);
    console.log("model ", model);
    model.save((err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send({ 'success': true, 'message': 'User fetched successfully', result });
        }
    })
}

User.prototype.getUsers = (req, res) => {
    console.log("get user calling server..")
    userModel.find({}, (err, users) => {
        if (err) {
            res.send(err);
        } else {
            console.log("result users", users);
            res.send({ 'success': true, 'message': 'Users fetched successfully', users });
        }
    })
}

User.prototype.deleteUserById = (req, res) => {
    let id = req.body._id;
    console.log("delete customer ", req.body);
    userModel.findByIdAndRemove(id, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    })
}

User.prototype.updateUserById = (req, res) => {
    let id = req.body._id;
    userModel.findByIdAndUpdate(id, { usreName: req.body.usreName, userAge: req.body.userAge, userSalary: req.body.userSalary }, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    })
}


module.exports = User;