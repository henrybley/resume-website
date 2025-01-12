
interface ContactTextBlockProps {
    children: string,
}

export function ContactTextBlock({ children }: ContactTextBlockProps) {
    return (
        <p className="hidden md:block text-3xl mt-6 text-gray-700 leading-relaxed">
            {children}
        </p>
    );
}
