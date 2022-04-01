import { Server } from './config/server';
import { config } from './config/config';

const server = new Server();

server.listen(config.port);
