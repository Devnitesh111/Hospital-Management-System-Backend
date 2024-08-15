import {
    Table,
    Column,
    Model,
    DataType,
} from 'sequelize-typescript'

@Table({
    tableName : 'lists',
    modelName : 'List',
    timestamps : true
})

class List extends Model{
    @Column({
        primaryKey : true,
        type : DataType.UUID,
        defaultValue : DataType.UUIDV4
    })
    declare id:string;
}

export default List
