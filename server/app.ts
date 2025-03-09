import express from 'express';
import cors from 'cors';
import { SERVER, DB_Connect } from '../config/config.ts';
import ingredient from './controllers/ingredient.ts';

const PORT = SERVER.SERVER_PORT;
async function startServer() {

    try {
		console.log('Starting Express Application');
		const app = express();

		app.use(cors());

		app.use(express.urlencoded({ extended: true }));
		app.use(express.json());
	
		// Database connection	
		console.log('Connect to the database');
		await DB_Connect();

		app.use('/', ingredient);

		await app.listen(PORT, () => {
			console.log(`The Server is running use ^c to chill server`);
			console.log(`Server started on ${SERVER.SERVER_HOSTNAME}:${PORT}`);		
		});

		return app;
	} catch (err) {
		console.error('Failed to start server:', err);
		process.exit(1);
	}
}

startServer();