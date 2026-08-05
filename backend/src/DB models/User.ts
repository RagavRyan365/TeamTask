import mongoose,{model,Schema} from "mongoose";

interface ITask{
    title:string;
    completed:Boolean;
}

interface IUser{
    Username:string;
    Email:string;
    Password:string;
    Groups?:string[];
    Task?:ITask[];
}

const UserSchema = new Schema<IUser>({
    Username:{type:String,required:true},
    Email:{type:String,required:true},
    Password:{type:String,required:true},
    Groups:[{type:String}],
    Task:[{
        title:{type:String,required:true},
        completed:{type:Boolean,default:false}
    }],
});

const User = model<IUser>('user',UserSchema);

export default User;