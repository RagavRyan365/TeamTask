import mongoose, { model, Schema } from "mongoose";
const UserSchema = new Schema({
    Username: { type: String, required: true },
    Email: { type: String, required: true },
    Password: { type: String, required: true },
    Groups: [{ type: String }],
    Task: [{
            title: { type: String, required: true },
            completed: { type: Boolean, default: false }
        }],
});
const User = model('user', UserSchema);
export default User;
//# sourceMappingURL=User.js.map