
import {
    Table,
    Column,
    Model,
    DataType,
} from 'sequelize-typescript'

@Table({
    tableName : 'doctors',
    modelName : 'Doctor',
    timestamps : true
})

class Doctor extends Model{
    @Column({
     primaryKey: true,
     type: DataType.UUID,
     defaultValue : DataType.UUIDV4
    })
    declare id:string;

    @Column({
type : DataType.STRING,
allowNull : false
    })
    declare doctorName : string

    @Column({
        type : DataType.TEXT,
        allowNull : false
    })
    declare doctorDescription:string

    @Column({
        type : DataType.STRING,
        allowNull : false
    })
    declare doctorDepartment : string

    @Column({
        type : DataType.INTEGER,
        allowNull : false
    })
    declare doctorNMC : number

    @Column({
        type : DataType.INTEGER,
        allowNull : false
    })
    declare doctorExperience: number

    @Column({
        type : DataType.INTEGER,
        allowNull : false
    })
    declare doctorAge: number

    @Column({
        type : DataType.INTEGER,
        allowNull : false
    })
    declare doctorContact: number
}

export default Doctor