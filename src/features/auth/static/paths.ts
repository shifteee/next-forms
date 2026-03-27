import { join } from 'node:path';

const FILE_NAME = 'user.json';

export const USER_DB_PATH = join(process.cwd(), FILE_NAME);