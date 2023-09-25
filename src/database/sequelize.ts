// sequelize.ts

import { Sequelize } from 'sequelize-typescript';
import BookModel from '../book/infraestructure/models/BookModel';
import UserModel from '../users/infraestructure/models/userModel';

export const sequelize = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    database: 'SOA',
    username: 'postgres',
    password: 'yeremi224',
    models: [BookModel, UserModel],
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






