 import userRouter from './src/module/user/user.router.js'
import connection from "./src/db/connection.js"
import noteRouter from './src/module/product/product.router.js'

function bootstrap (app,express) {
    app.use(express.json())
    connection()
     app.use('/user',userRouter)
     app.use('/product' , noteRouter)
     
}
export default bootstrap