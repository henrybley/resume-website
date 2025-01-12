import { ReactElement } from "react";

interface SectionProps {
    children: ReactElement,
    fullscreen: boolean
}
export function Section({ children, fullscreen }: SectionProps) {

    return (
        <div className={(fullscreen ? "sm:min-h-screen lg:h-screen pt-8 lg:pt-24 " : "") + "pb-24 px-6 lg:px-48"}>
            <div className={"h-full bg-gray-700 shadow-lg rounded-lg overflow-hidden"}>
                {children}
            </div>
        </div>
    );
}

interface InnerSectionProps {
    children: ReactElement,
}
export function InnerSection({ children }: InnerSectionProps) {

    return (
        <section className="px-8 py-8">
            {children}
        </section>
    );
}

interface SectionHeaderProps {
    content: string,
}
export function SectionHeader({ content }: SectionHeaderProps) {
    return (
        <h2 className="text-2xl font-bold text-gray-100 mb-4">{content}</h2>
    );
}

interface SubsectionProps {
    children: ReactElement,
}
export function SubSection({ children }: SubsectionProps) {
    return (
        <div className="mb-6">
            {children}
        </div>
    );
}

interface SubsectionHeaderProps {
    content: string,
    dates: string
}

export function SubsectionHeader({ content, dates }: SubsectionHeaderProps) {
    if (dates != '') {
        return (
            <div className="flex justify-between items-start">
                <h3 className="text-lg font-semibold text-amber-700">
                    {content}
                </h3>
                <span className="text-amber-700">{dates}</span>
            </div>
        );
    }

    return (
        <h3 className="text-lg font-semibold text-amber-700">
            {content}
        </h3>
    );
}


