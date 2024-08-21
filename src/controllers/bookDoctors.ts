import {Request,Response} from 'express'
import { AuthRequest } from '../middleware/authMiddleware'
import Doctor from '../database/models/Doctor'
import List from '../database/models/List'
import Department from '../database/models/Department'

class DoctorController{
    async addDoctor(req:AuthRequest,res:Response):Promise<void>{
        const userId = req.user?.id
        const {doctorId} = req.body
        if(!doctorId){
            res.status(400).json({message:'Doctor ID is required'})
        }
        let doctorAvaliable = await List.findOne({
            where:{
              userId,
                doctorId
            }
        })
      if(doctorAvaliable){
        await doctorAvaliable.save()
      }else{
        doctorAvaliable = await Doctor.create({
            doctorId
        })
      }

      const data = await List.findAll({
        where:{
          userId,
          doctorId
        }
      })
      res.status(200).json({
        message : " Doctor added to your list",
        data
      })
    }

    async getMyLists(req:AuthRequest,res:Response):Promise<void>{
      const userId = req.user?.id
      const doctorLists = await List.findAll({
        where:{
          userId,
        
        },
        include:[
          {
            model:Doctor,
            include:[{
              model : Department,
              attributes:['id','departmentName']
            }
            ]
          }
        ]
      })
      if(doctorLists.length === 0){
        res.status(404).json({message:'No doctor found'})
      }else{
        res.status(200).json({
          message : "Doctors found",
          data : doctorLists
        })
      }
    }

    async deleteMyLists(req:AuthRequest,res:Response):Promise<void>{
      const userId = req.user?.id
      const {doctorId} = req.params
      const doctor = await Doctor.findByPk(doctorId)
      if(!Doctor){
        res.status(404).json({message:'Doctor not found'})
        return
      }

      await List.destroy({
        where :{
          userId,
          doctorId
        }
      })
      res.status(200).json({
        message : "Doctor removed from your list"
      })
    }

    async updateMyLists(req:AuthRequest,res:Response):Promise<void>{
      const userId = req.user?.id
      const{doctorId} = req.params
      const doctorAvaliable = await Doctor.findOne({
        where:{
          userId,
          doctorId
        }
      })

      if(doctorAvaliable){
        await doctorAvaliable?.save()
        res.status(200).json({
          message : "Doctor updated successfully",
          data : doctorAvaliable
        })
      }else{
        res.status(404).json({
          message:'Doctor not found'

        })
      }
    }
  }
export default new DoctorController()