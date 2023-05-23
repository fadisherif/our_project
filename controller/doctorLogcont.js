import doctorLog from "../database/doctorLog.js"
import subject from "../database/subject.js"
import doctor from "../database/doctor.js"
// export const index=async(req,res)=>{
//     // const doct=await doctorLog.find().lean()
    
//     // // console.log(subj)

//     const {_id}=req.params

//     const singlestudent= await doctorLog.findById(_id).populate("subject").lean()
//     res.render("doctorLog/index",{doctorLog:singlestudent})
//     // console.log(_id)

// }
export const index=async(req,res)=>{
    const stud=await doctorLog.find({},{subject:1}).lean()
    res.render("doctorLog/index",{doctorLog:stud})
    // console.log(subj)
}