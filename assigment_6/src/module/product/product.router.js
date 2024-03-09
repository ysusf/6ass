import {Router} from 'express'
import { addproduct, allProduct, allProducts, deleteProduct, sortdesending, updateProduct } from './controller/product.controller.js'
const router = Router()
router.get('/user' ,allProduct)
router.get('/' , allProducts)
 router.post('/add' , addproduct)
 router.put('/:_id', updateProduct)
router.delete("/:_id",deleteProduct)
router.get('/sort', sortdesending)

export default router