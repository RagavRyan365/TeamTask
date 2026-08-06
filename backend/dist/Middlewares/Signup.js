import express from "express";
import bcrypt from "bcrypt";
import User from "../DB models/User.js";
import { stringify } from "node:querystring";
const signup = express.Router();
//Check the sigup email is already exist or not
async function email_check(req, res, next) {
    const { email } = req.body;
    if (await User.findOne({ Email: email }) != null) {
        return res.status(400).json({ message: "email already exists" });
    }
    next();
}
//Check both the Password and Confirm Password are equal or not
function password_check(req, res, next) {
    const { password, confirmPassword } = req.body;
    if (password !== confirmPassword) {
        return res.status(400).json({ message: "passwords do not match" });
    }
    next();
}
async function password_hasing(password) {
    return await bcrypt.hash(password, 10);
}
signup.post("/", email_check, password_check, async (req, res) => {
    const { username, email, password } = req.body;
    const newUser = new User({
        Username: username,
        Email: email,
        Password: await password_hasing(password),
    });
    newUser.save().then((user) => {
        res.status(201).json({ message: "user created successfully", data: user });
    }).catch((err) => {
        res.status(400).json({ message: "error creating user", error: err });
    });
});
export default signup;
//# sourceMappingURL=Signup.js.map