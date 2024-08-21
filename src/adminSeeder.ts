import User from "./database/models/User"

import bcrypt from 'bcrypt'

const adminSeeder = async():Promise<void>=>{
    try{
        const [data] = await User.findAll({
            where:{
                email:"nitesh@gmail.com"
            }
        })
        if(!data){
            await User.create({
                email: " nitesh@gmail.com",
                password : bcrypt.hashSync("hi123",8),
                username : "nitesh",
                role : "admin"
            })
            console.log("admin credentials seeded successfully")

        }else{
            console.log("admin credientials already seeded")

        }
    }catch(error:any){
        console.log(error.message)
    }
}

export default adminSeeder