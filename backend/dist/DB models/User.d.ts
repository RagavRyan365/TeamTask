import mongoose from "mongoose";
interface ITask {
    title: string;
    completed: Boolean;
}
interface IUser {
    Username: string;
    Email: string;
    Password: string;
    Groups?: string[];
    Task?: ITask[];
}
declare const User: mongoose.Model<IUser, {}, {}, {}, mongoose.Document<unknown, {}, IUser, {}, mongoose.DefaultSchemaOptions> & IUser & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}, any, IUser>;
export default User;
//# sourceMappingURL=User.d.ts.map