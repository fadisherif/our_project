import { Schema, model } from "mongoose";
const doctorLog=new Schema({
    subject:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:'subject'
    },
    file:{
        type:String,
        require:false
    }
    
},
{timestamps:true})
export default model('doctorLog',doctorLog)