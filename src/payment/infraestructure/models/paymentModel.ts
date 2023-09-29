import { Model, DataType, Table, Column, ForeignKey, BelongsTo } from 'sequelize-typescript';
import LoanModel from '../../../loan/infraestructure/models/loanModel';

@Table({
    tableName: 'payments',
    timestamps: true 
})
export default class PaymentModel extends Model {
    @Column({
        type: DataType.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    })
    public id!: number;

    @ForeignKey(() => LoanModel)
    @Column({
        type: DataType.INTEGER.UNSIGNED,
        allowNull: false
    })
    public loanId!: number;

    @Column({
        type: DataType.FLOAT,
        allowNull: false
    })
    public amount!: number;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    public paymentMethod!: string;

    @Column({
        type: DataType.DATE,
        allowNull: false
    })
    public paymentDate!: Date;

    @BelongsTo(() => LoanModel)
    public loan!: LoanModel;
}
