import express,{Application,Request,Response} from 'express'

const app:Application = express()
const PORT:number=4000
import * as dotenv from 'dotenv'
dotenv.config()
import './database/connection'


app.use(express.json())



app.listen(PORT,()=>{
    
    console.log(`server is running on port ${PORT}`)
})