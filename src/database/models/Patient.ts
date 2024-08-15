
import {
    Table,
    Column,
    Model,
    DataType,
} from 'sequelize-typescript'

@Table({
    tableName : 'patients',
    modelName : 'Patient',
    timestamps : true
})

class Patient extends Model{
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
    declare patientName : string

    @Column({
        type : DataType.INTEGER,
        allowNull : false
    })
    declare patientContact:number

    @Column({
        type : DataType.TEXT,
        allowNull : false
    })
    declare patientProblem : string

    @Column({
        type : DataType.STRING,
     
    })
    declare patientHistory : string

    @Column({
        type : DataType.STRING,
        allowNull : false
    })
    declare patientAddress: string

    @Column({
        type : DataType.INTEGER,
        allowNull : false
    })
    declare patientAge: number

    @Column({
        type : DataType.ENUM('Male','Female','Other'),
      defaultValue : 'Male'
    })
    declare patientSex: string
}

export default  Patient