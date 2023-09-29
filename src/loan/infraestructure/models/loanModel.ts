import { Model, DataType, Table, Column, ForeignKey, BelongsTo } from 'sequelize-typescript';
import UserModel from '../../../users/infraestructure/models/userModel'; // Asumiendo que ya tienes un modelo para User.
import BookModel from '../../../book/infraestructure/models/BookModel'; // Asumiendo que este es el modelo de Book que nos mostraste anteriormente.

@Table({
    tableName: 'loans',
    timestamps: true 
})
export default class LoanModel extends Model {
    @Column({
        type: DataType.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    })
    public id!: number;

    @ForeignKey(() => UserModel)
    @Column({
        type: DataType.INTEGER.UNSIGNED,
        allowNull: false
    })
    public userId!: number;

    @ForeignKey(() => BookModel)
    @Column({
        type: DataType.INTEGER.UNSIGNED,
        allowNull: false
    })
    public bookId!: number;

    @Column({
        type: DataType.DATE,
        allowNull: false
    })
    public loanDate!: Date;

    @Column({
        type: DataType.DATE,
        allowNull: true
    })
    public returnDate?: Date | null;

    @BelongsTo(() => UserModel)
    public user!: UserModel;

    @BelongsTo(() => BookModel)
    public book!: BookModel;
}
