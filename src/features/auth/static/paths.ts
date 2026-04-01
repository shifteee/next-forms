import { join } from 'node:path';

const USER_FILE_NAME = 'user.json';
const SESSION_FILE_NAME = 'session.json';

export const USER_DB_PATH = join(process.cwd(), `db/${USER_FILE_NAME}`);

export const SESSION_DB_PATH = join(process.cwd(), `db/${SESSION_FILE_NAME}`);
