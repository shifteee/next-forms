export default class InMemoryFileStorage implements IStorage {
    private store = new Map<string, string>();

    async read(path: string): Promise<string | null> {
        return this.store.get(path) ?? null;
    }

    async write(path: string, content: string): Promise<void> {
        this.store.set(path, content);
    }
}
