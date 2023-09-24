import { Model, DataType, Table, Column } from 'sequelize-typescript';

@Table({
    tableName: 'books',
    timestamps: true 
})
class BookModel extends Model {
    @Column({
        type: DataType.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    })
    public id!: number;
    
    @Column({
        type: DataType.STRING(128),
        allowNull: false
    })
    public title!: string;

    @Column({
        type: DataType.STRING(128),
        allowNull: false
    })
    public author!: string;

    @Column({
        type: DataType.STRING(128),
        allowNull: false
    })
    public code!: number;

    @Column({
        type: DataType.STRING(128),
        allowNull: false
    })
    public status!: string;

    @Column({
        type: DataType.STRING(128),
        allowNull: false
    })
    public in_use!: boolean;


}

export default BookModel;
