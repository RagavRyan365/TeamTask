import mongoose, { model, Schema } from "mongoose";
const GroupSchema = new Schema({
    Name: { type: String, required: true },
    Users: [{
            Username: { type: String, required: true },
            Email: { type: String, required: true },
            isAdmin: { type: Boolean, default: false },
            isManager: { type: Boolean, default: false }
        }],
    Task: [{
            title: { type: String, required: true },
            completed: { type: Boolean, default: false }
        }],
});
const Group = model('group', GroupSchema);
export default Group;
//# sourceMappingURL=Group.js.map