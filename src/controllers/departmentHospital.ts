import {Request, Response} from 'express'
import Department from '../database/models/Department'
class DepartmentController{
    departmentData=[
        {
departmentName : "Ortho"
    },
    {
   departmentName : "General Physican"
    },
     {
     departmentName : "Gyastro"
     },
     {
    departmentName : "Child Care"
   },
 {
   departmentName : "Neuro"
     },
    {
  departmentName : "Ortho"
    },
    {
        departmentName : "Emergency"
       },
    ]
    async seedDepartment():Promise<void>{
const datas = await Department.findAll()
if(datas.length ===0){
  const data = await Department.bulkCreate(this.departmentData)
  console.log("Department seeded successfully")
}else{
  console.log("Department already seeded")
}
    }

    async addDepartment(req:Request,res:Response):Promise<void>{
      const {departmentName} = req.body
      if(!departmentName){
        res.status(400).json({
          message: "Please provide department name"
        })
        return

      }
      await Department.create({
        departmentName
      })
      res.status(200).json({
        message: "Department added successfully"
      })
    }

    async getDepartments(req:Request,res:Response):Promise<void>{
      const data = await Department.findAll()
      res.status(200).json({
        message : "Departments fetched successfully",
        data
      })
    }

    async deleteDepartment(req:Request,res:Response){
      const {id} = req.params
      const data = await Department.findAll({
        where:{
          id
        }
      })
      if(data.length ===0){
        res.status(404).json({
          message : "No Department with that id"
        })
      }else{
        await Department.destroy({
where:{
  id
}
        })
        res.status(200).json({
          message : " Department deleted successfully"
        })
      }
    }
    async updateDepartment(req:Request,res:Response):Promise<void>{
      const {id} = req.params
      const {departmentName} = req.body
      await Department.update({departmentName},{
        where :{
          id
        }
        })
        res.status(200).json({
          message : " Department updated successfully"
        })
}

}

export default new DepartmentController()