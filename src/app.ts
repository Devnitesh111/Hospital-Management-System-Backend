import express,{Application,Request,Response} from 'express'

const app:Application = express()
const PORT:number=4000
import * as dotenv from 'dotenv'
dotenv.config()
import './database/connection'
import departmenthospitalRoute from './routes/departmenthospitalRoute'
import bookdoctorsRoute from './routes/bookdoctorsRoute'
import adminSeeder from './adminSeeder'
import departmentHospital from './controllers/departmentHospital'



app.use(express.json())

adminSeeder()

app.use("/admin/department",departmenthospitalRoute)

app.use("/bookdoctors",bookdoctorsRoute)

app.listen(PORT,()=>{
    departmentHospital.seedDepartment()
    console.log(`server is running on port ${PORT}`)
})