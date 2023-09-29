// sequelize.ts

import { Sequelize } from 'sequelize-typescript';
import BookModel from '../book/infraestructure/models/BookModel';
import UserModel from '../users/infraestructure/models/userModel';
import ReviewModel from '../review/infraestructure/models/reviewModel';
import LoanModel from '../loan/infraestructure/models/loanModel';
import PaymentModel from '../payment/infraestructure/models/paymentModel';

export const sequelize = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    database: 'SOA',
    username: 'postgres',
    password: 'yeremi224',
    models: [BookModel, UserModel, ReviewModel, LoanModel, PaymentModel],
});

export async function initializeDatabase() {
    try {
        await sequelize.authenticate();
        console.log('Conexión establecida correctamente.');
        await sequelize.sync({ force: false });
    } catch (err) {
        console.error('No se pudo conectar a la base de datos:', err);
        process.exit(1);  // Cierra la aplicación si hay un error de conexión
    }
}






