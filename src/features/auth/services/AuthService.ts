export default class AuthService implements IAuthService {
    constructor(private repository: IAuthRepository) { }

    async signUp(credentials: UserCredentials): Promise<User> {
        const existingUser = await this.repository.findUser(credentials.email);

        if (existingUser) {
            throw new Error('User already exists');
        }

        await this.repository.createUser(credentials);

        return { email: credentials.email };
    }

    async signIn(credentials: UserCredentials): Promise<User | null> {
        const user = await this.repository.findUser(credentials.email);

        if (!user) {
            return null;
        }

        const isValid = user.password === credentials.password;

        if (!isValid) {
            return null;
        }

        return { email: user.email };
    }

    async signOut(): Promise<void> {
        return;
    }
}