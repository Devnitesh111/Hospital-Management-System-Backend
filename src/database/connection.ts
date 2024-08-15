import { Sequelize } from "sequelize-typescript"
import User from "./models/User"
import Doctor from "./models/Doctor"
import Department from "./models/Department"
import Patient from "./models/Patient"
import BookDetail from "./models/BookDetail"
import Payment from "./models/Payment"
import List from "./models/List"
import Bill from "./models/Bill"


const sequelize = new Sequelize({
    database : process.env.DB_NAME,
    dialect : 'mysql',
    username : process.env.DB_USERNAME,
    password : process.env.DB_PASSWORD,
    host : process.env.DB_HOST,
    port : Number(process.env.DB_PORT),
    models : [__dirname + "/models"]
})

sequelize.authenticate()
.then(()=>{
    console.log("connected")
})
.catch((err)=>{
    console.log(err)

})

sequelize.sync({force:false}).then (()=>{
    console.log("synced!!!")

})
Doctor.hasMany(User,{foreignKey:'doctorId'})
User.belongsTo(Doctor,{foreignKey:'doctorId'})

Patient.hasMany(User,{foreignKey:'patientId'})
User.belongsTo(Patient,{foreignKey:'patientId'})

Patient.hasMany(Doctor,{foreignKey:'patientId'})
Doctor.belongsTo(Patient,{foreignKey:'patientId'})

Doctor.hasOne(Department,{foreignKey:'doctorId'})
Department.belongsTo(Doctor,{foreignKey:'doctorId'})

Patient.hasMany(BookDetail,{foreignKey:'patientId'})
BookDetail.belongsTo(Patient,{foreignKey:'patientId'})

BookDetail.hasMany(Doctor,{foreignKey:'bookId'})
Doctor.belongsTo(BookDetail,{foreignKey:'bookId'})

Payment.hasOne(Bill,{foreignKey:'paymentId'})
Bill.belongsTo(Payment,{foreignKey:'paymentId'})

Patient.hasMany(List,{foreignKey:'patientId'})
List.belongsTo(Patient,{foreignKey:'patientId'})

Doctor.hasMany(List,{foreignKey:'doctorId'})
List.belongsTo(Doctor,{foreignKey:'doctorId'})

Bill.hasMany(BookDetail,{foreignKey:'billId'})
BookDetail.belongsTo(Bill,{foreignKey:'billId'})

Patient.hasMany(Bill,{foreignKey:'patientId'})
Bill.belongsTo(Patient,{foreignKey:'patientId'})

export default sequelize
