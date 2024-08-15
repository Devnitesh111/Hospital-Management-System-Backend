import {
    Table,
    Column,
    Model,
    DataType,
} from 'sequelize-typescript'

@Table({
    tableName : 'bills',
    modelName : 'Bill',
    timestamps : true
})

class Bill extends Model{
    @Column({
        primaryKey : true,
        type : DataType.UUID,
        defaultValue : DataType.UUIDV4
    })
    declare id:string;

    @Column({
        type : DataType.INTEGER,
        allowNull : false,
        validate :{
            len : {
                args : [10,10],
                msg : 'Phone number must be 10 digits'
            }
        }
    })
    declare phoneNumber : number

    @Column({
        type : DataType.STRING,
        allowNull : false
    })
    declare address : string

    @Column({
        type : DataType.FLOAT,
        allowNull : false
    })
    declare totalAmount : number

@Column({
        type : DataType.ENUM('pending','cancelled','accepted'),
     defaultValue : 'pending'
    })
    declare acceptanceStatus : string
}



export default Bill
