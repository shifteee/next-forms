import { USER_DB_PATH } from '../static/paths';

export default class FileAuthRepository implements IAuthRepository {
    constructor(private readonly storage: IStorage) { }

    async findUser(email: string): Promise<UserRecord | null> {
        const users = await this.readAll();

        return users.find(user => user.email === email) ?? null;
    }

    async createUser(credentials: UserCredentials): Promise<void> {
        const users = await this.readAll();

        users.push(credentials);

        await this.writeAll(users);
    }

    private async readAll(): Promise<UserRecord[]> {
        const content = await this.storage.read(USER_DB_PATH);

        if (!content) {
            return [];
        }

        try {
            return JSON.parse(content) as UserRecord[];
        } catch {
            return [];
        }
    }

    private async writeAll(users: UserRecord[]): Promise<void> {
        await this.storage.write(
            USER_DB_PATH,
            JSON.stringify(users, null, 2)
        );
    }
}