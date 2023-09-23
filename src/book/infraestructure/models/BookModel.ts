import { Model, DataType, Table, Column } from 'sequelize-typescript';

@Table({
    tableName: 'books',
    timestamps: false // Si no deseas los campos createdAt y updatedAt. Ajusta según tus necesidades.
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
}

export default BookModel;
