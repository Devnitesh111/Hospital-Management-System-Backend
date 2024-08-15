import{
    Table,
    Column,
    Model,
    DataType,
} from 'sequelize-typescript'

@Table({
    tableName : "users",
    modelName : "User",
    timestamps : true
})

class User extends Model {

    @Column({
        type : DataType.UUID,
        defaultValue : DataType.UUIDV4,
        primaryKey : true
    })
    declare id : string;

    @Column({
        type : DataType.STRING
    })
    declare username : string

    @Column ({
        type : DataType.ENUM('patient','admin','doctor'),
        defaultValue : 'patient'
    })
    declare role : string

    @Column({
        type : DataType.STRING
    })
    declare email : string

    @Column({
        type : DataType.INTEGER
    })
    declare registration : number

    @Column({
        type : DataType.STRING
    })
    declare password : string

}

export default User