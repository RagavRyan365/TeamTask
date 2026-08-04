import express from "express";
import User from "../DB models/User.js";
const signup = express.Router();
async function email_check(req, res, next) {
    const { email } = req.body;
    if (await User.findOne({ Email: email }) != null) {
        return res.status(400).json({ message: "email already exists" });
    }
    next();
}
function password_check(req, res, next) {
    const { password, confirmPassword } = req.body;
    if (password !== confirmPassword) {
        return res.status(400).json({ message: "passwords do not match" });
    }
    next();
}
signup.post("/", password_check, email_check, (req, res) => {
    const { username, email, password } = req.body;
    const newUser = new User({
        Username: username,
        Email: email,
        Password: password,
    });
    newUser.save().then((user) => {
        res.status(200).json({ message: "user created successfully", data: user });
    }).catch((err) => {
        res.status(400).json({ message: "error creating user", error: err });
    });
});
export default signup;
//# sourceMappingURL=Signup.js.map