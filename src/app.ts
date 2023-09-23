import express from 'express';
import { Signale } from 'signale';

import { bookRouter } from './book/infraestructure/bookRouter';
import { initializeDatabase } from './database/sequelize';  // Asegúrate de cambiar 'path-to-sequelize-file' a la ruta correcta donde está tu archivo sequelize.ts

const app = express();
const signale = new Signale();

app.use(express.json());
app.use('/books', bookRouter);

async function startServer() {
    try {
        // Primero inicializa y conecta la base de datos
        await initializeDatabase();
        
        // Luego inicia el servidor Express
        app.listen(3000, () => {
            signale.success("Server online in port 3000");
        });
    } catch (error) {
        signale.error("Error al iniciar el servidor:", error);
    }
}

// Inicia todo
startServer();
