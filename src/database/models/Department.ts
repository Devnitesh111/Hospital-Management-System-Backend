import{
    Table,
    Column,
    Model,
    DataType,
 
} from 'sequelize-typescript'

@Table({
    tableName :"departments",
    modelName : "Department",
    timestamps : true
})
class Department extends Model{
    @Column({
        primaryKey : true,
        type : DataType.UUID,
        defaultValue : DataType.UUIDV4
    })
    declare id:string;

@Column({
    type : DataType.STRING,
    allowNull : false
})
declare departmentName:string
}
export default Department