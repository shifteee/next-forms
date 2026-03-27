import { readFile, writeFile } from 'fs/promises';
import { existsSync } from 'fs';

export default class FileStorage implements IStorage {
    async read(path: string): Promise<string | null> {
        if (!existsSync(path)) {
            return null;
        }

        return readFile(path, 'utf-8');
    }

    async write(path: string, content: string): Promise<void> {
        await writeFile(path, content, 'utf-8');
    }
}