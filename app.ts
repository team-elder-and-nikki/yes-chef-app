import express from 'express';
import { SERVER } from './config/config.js';

const PORT = SERVER.SERVER_PORT;

try {
    
	console.info('Starting Express Application');
	const app = express();

	app.use(express.urlencoded({ extended: true }));
	app.use(express.json());

	app.listen(PORT, () => {
		console.log(`The Server is running use ^c to chill server`);
		console.log(`Server started on ${SERVER.SERVER_HOSTNAME}:${PORT}`);
		
    });
    
} catch (err) {
	console.error('Failed to start server:', err);
	process.exit(1);
}
