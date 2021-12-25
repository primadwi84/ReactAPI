import mongoose from "mongoose";
import {Timestamp} from "bson";
const Student= mongoose.Schema({
    reqID:{
        type:String,
        require:true
    },
    nama:{
        type:String,
        require:true
    }, 
    nim:{
        type:Number,
        require:true
    },
    kelas:{
        type:String,
        require:true
    },
    file:{
        type:String
    }
}, {
        timestamps:true
    
});
export default mongoose.model("Students", Student);