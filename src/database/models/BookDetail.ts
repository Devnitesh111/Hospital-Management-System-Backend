import{
    Table,
    Column,
    Model,
    DataType,

} from 'sequelize-typescript'

@Table({
    tableName :"bookdetails",
    modelName : "BookDetail",
    timestamps : true

})
class BookDetail extends Model{
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
    declare doctorbooked : string
}

export default BookDetail

