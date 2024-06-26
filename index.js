import express from 'express';
import { connectDB, runMigration } from './startup/db.js';
import { route } from './startup/routes.js';
import serverConfig from './config/serverConfig.js'
import cors from "cors";
import { errorHandler } from './middleware/system.js';

const app = express();
app.use(cors())

try {
    await connectDB();
    await runMigration();
    console.log('MongoDB connected...')
} catch (error) {
    console.log('Error connectng to db: ', error)
}

route(app);
app.use(errorHandler())

const port = serverConfig.port;
app.listen(port, () => console.log(`Listening on port ${port}...`));