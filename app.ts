import * as http from 'http'; // TS
import { requestHandler } from './routes.ts';

const server = http.createServer(requestHandler);

server.listen(3000);