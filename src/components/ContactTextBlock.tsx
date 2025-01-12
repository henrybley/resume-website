
interface ContactTextBlockProps {
    children: string,
}

export function ContactTextBlock({ children }: ContactTextBlockProps) {
    return (
        <p className="hidden md:block text-3xl mt-6 text-gray-200 leading-relaxed">
            {children}
        </p>
    );
}
