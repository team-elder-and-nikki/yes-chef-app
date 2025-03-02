import express from 'express';
import { SERVER, DB_Connect } from './config/config.js';

const PORT = SERVER.SERVER_PORT;
async function startServer() {

    try {
		console.log('Starting Express Application');
		const app = express();

		app.use(express.urlencoded({ extended: true }));
		app.use(express.json());

		await app.listen(PORT, () => {
			console.log(`The Server is running use ^c to chill server`);
			console.log(`Server started on ${SERVER.SERVER_HOSTNAME}:${PORT}`);		
		});
	
		// Database connection	
		console.log('Connect to the database');
		await DB_Connect();

		return app;
	} catch (err) {
		console.error('Failed to start server:', err);
		process.exit(1);
	}
}

startServer();