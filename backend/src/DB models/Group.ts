import mongoose,{model,Schema} from "mongoose";

interface ITask{
    title:String;
    completed:Boolean;
}

interface GroupUser{
    Username:string;
    Email:string;
    isAdmin:Boolean;
    isManager:Boolean;
}

interface IGroup{
    Name:string;
    Users:GroupUser[];
    Task:ITask[];
}

const GroupSchema = new Schema<IGroup>({
    Name:{type:String,required:true},
    Users:[{
        Username:{type:String,required:true},
        Email:{type:String,required:true},
        isAdmin:{type:Boolean,default:false},
        isManager:{type:Boolean,default:false}
    }],
    Task:[{
        title:{type:String,required:true},
        completed:{type:Boolean,default:false}
    }],
});

const Group = model<IGroup>('group',GroupSchema);

export default Group;