import { Router } from "express";
import { index} from "../controller/doctorLogcont.js";
const router=new Router();
router.get('/',(index))
// router.get('/create',create)
// router.post('/',store)
// router.get('/:_id',show)
// router.get('/:_id/edit',edit)
// router.post('/:_id',update)
// router.delete('/:_id',deleteOne)
export default router; 