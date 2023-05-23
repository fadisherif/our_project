import department from "../database/department.js"
import doctor from "../database/doctor.js"
import subject from "../database/subject.js"

export const index=async(req,res)=>{
    const subj=await subject.find({},{name:1}).lean()
    res.render("subjects/index",{subjects: subj})
    // console.log(subj)
}
export const create=async(req,res)=>{
    const departments=await department.find().lean()
    const doctors=await doctor.find().lean()
    // console.log(departments)
   res.render("subjects/create",{departments,doctors})
}
export const store=async(req,res)=>{
    const{name,code,department,doctor}=req.body
   await subject.create({name,code,department,doctor})
    // console.log(code)
    res.redirect("/subject")
}


export const show=async(req,res)=>{
    // const _id=req.params._id
    const {_id}=req.params
    // console.log(_id)
    const singlesubject= await subject.findById(_id).populate("department").populate("doctor").lean()
    // console.log(singlesubject)
    res.render('subjects/show',{subject:singlesubject})

}
export const edit=async(req,res)=>{
    const {_id}=req.params
    const subject_edit=await subject.findById(_id).lean()
    const departments=await department.find().lean()
    const doctors=await doctor.find().lean()
    // console.log(departments)
   res.render("subjects/edit",{departments,doctors,subject:subject_edit})
}
export const update= async(req,res)=>{
    const{name,code,department,doctor}=req.body
    const {_id}=req.params;
    await subject.findByIdAndUpdate(_id,{$set:
        
        {name, code, department,doctor},})
    res.redirect('/subject')    
}
export const deleteOne=async(req,res)=>{
    const {_id}=req.params;
    await subject.findByIdAndDelete(_id)
    res.redirect('/doctor') 
} 