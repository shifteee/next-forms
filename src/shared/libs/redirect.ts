import { redirect as nextRedirect } from 'next/navigation';

export default function redirect(path: string): never {
    nextRedirect(path);
}
