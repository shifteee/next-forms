import { Tooltip, TooltipTrigger, TooltipContent } from '@/ui/tooltip';

export default function PasswordWithTooltip({
    children,
    errors,
    isFocused,
}: {
    children: React.ReactNode;
    errors: string[];
    isFocused: boolean;
}) {
    if (!(errors.length && isFocused)) {
        return children;
    }

    return (
        <Tooltip open={true}>
            <TooltipTrigger asChild>
                {children}
            </TooltipTrigger>
            <TooltipContent side="right">
                <ul>
                    {errors.map((error) => (<li key={error}>{error}</li>))}
                </ul>
            </TooltipContent>
        </Tooltip>
    );
}