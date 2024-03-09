import { Router } from "express";
import { addUser, allUserProduct, alluser, deleteUser, login, search, searchAge, updateUser } from "./controller/user.conntroller.js";

const router = Router();
router.get('/', alluser)
router.post('/sign',addUser)
router.post('/login',login)
router.put('/update/:_id' , updateUser)
router.delete('/delete/:_id' ,deleteUser)
router.get ('/search/:x/:z' , search)
router.get('/age/:x/:z' , searchAge)
router.get('/product' , allUserProduct)
// 

export default router ;