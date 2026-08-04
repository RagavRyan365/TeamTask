import mongoose from "mongoose";
interface ITask {
    title: String;
    completed: Boolean;
}
interface GroupUser {
    Username: string;
    Email: string;
    isAdmin: Boolean;
    isManager: Boolean;
}
interface IGroup {
    Name: string;
    Users: GroupUser[];
    Task: ITask[];
}
declare const Group: mongoose.Model<IGroup, {}, {}, {}, mongoose.Document<unknown, {}, IGroup, {}, mongoose.DefaultSchemaOptions> & IGroup & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}, any, IGroup>;
export default Group;
//# sourceMappingURL=Group.d.ts.map