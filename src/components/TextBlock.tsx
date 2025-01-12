
interface TextBlockProps {
    children: string,
}

export function TextBlock({ children }: TextBlockProps) {
    return (
        <p className="mt-6 text-gray-700 leading-relaxed">
            {children}
        </p>
    );
}
