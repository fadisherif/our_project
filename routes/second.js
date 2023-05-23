import { Router } from "express";
const router=new Router()
router.get('/',(req,res)=>{
    res.render('first_page/second')
})
export default router
