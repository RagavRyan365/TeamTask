import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from "mongoose";
dotenv.config();
const app = express();
const port = 8080;
//connect to mongodb
mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log("connected to mongodb"))
    .catch((err) => console.log(err));
app.use(cors());
app.use(express.json());
let users = {};
//Signup route -------------------------------------------------
function password_check(req, res, next) {
    const { password, confirmPassword } = req.body;
    if (password !== confirmPassword) {
        return res.status(400).json({ message: "passwords do not match" });
    }
    next();
}
function email_check(req, res, next) {
    const { email } = req.body;
    if (users.hasOwnProperty(email)) {
        return res.status(400).json({ message: "email already exists" });
    }
    next();
}
app.post("/api/user/signup", password_check, email_check, (req, res) => {
    const { username, email, password } = req.body;
    users[email] = password;
    res.status(200).json({ message: "user created successfully", data: { username, email, password } });
});
//Login route -------------------------------------------------
app.post("/api/user/login", (req, res) => {
    const { email, password } = req.body;
    if (!users.hasOwnProperty(email)) {
        return res.status(400).json({ message: "Incorrect Password or email" });
    }
    if (users[email] !== password) {
        return res.status(400).json({ message: "Incorrect Password or email" });
    }
    res.status(200).json({ message: "login successful", data: { email } });
});
//user info route -------------------------------------------------
app.get("/api/users/", (req, res) => {
    res.status(200).json({ message: "user data", data: { users } });
});
app.listen(port, () => console.log("server is alive on port 8080"));
//# sourceMappingURL=app.js.map