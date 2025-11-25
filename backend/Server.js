import express from 'express';
import mysql from 'mysql2';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import enviarCorreo from './enviarCorreo.js'; // Asegúrate de que la ruta sea correcta

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Cargar .env desde la raíz aunque lo ejecutes desde cualquier lado
dotenv.config({ path: path.join(__dirname, '../datosDeBaseDeDatos.env') });

console.log('HOST:', process.env.DB_HOST);
console.log('USER:', process.env.DB_USER);
console.log('PASS:', process.env.DB_PASSWORD);
console.log('DB:', process.env.DB_NAME);

const app = express();

app.use(cors({
    origin: 'http://localhost:5173' // puerto donde corre tu frontend (Vite)
}));

app.use(express.json());

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect(err => {
    if (err) {
        console.error('Error conectando a MySQL:', err);
        return;
    }
    console.log('Conectado a MySQL ✅');
});

// Ruta para agregar un cliente a la base de datos
app.post('/clientes', (req, res) => {
    const { nombre, apellido, correo, telefono, seguridad, servicios, tecnologia, ubicacion, mensaje } = req.body;

    const sql = `INSERT INTO clientes (nombre, apellido, correo, telefono, seguridad, servicios, tecnologia, ubicacion, mensaje)
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    const values = [nombre, apellido, correo, telefono, seguridad, servicios, tecnologia, ubicacion, mensaje];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error('Error insertando datos:', err);
            return res.status(500).json({ success: false, error: 'Error al guardar los datos' });
        }

        // Enviar correo después de insertar exitosamente
        const cliente = { nombre, apellido, correo, telefono, seguridad, servicios, tecnologia, ubicacion, mensaje };
        enviarCorreo(cliente);

        // Responder solo con success: true y el id insertado
        res.status(201).json({ success: true, id: result.insertId });
    });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
