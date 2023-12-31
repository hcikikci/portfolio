'use client';
import Link from 'next-intl/link';
import {firaCode} from "../../atoms/ViewBlocks/ProjectCard";
import {useTranslations} from "next-intl";

const SectionHeader = ({title, viewAllLink, dontShowHR=false}) => {
    const t = useTranslations('breadcrumbs');
    const t2 = useTranslations('common');
    return (
        <header className="text-3xl font-medium md:grid md:grid-cols-2 flex">
            <div className="flex items-center grow md:space-x-10 space-x-5 pr-5 md:col-span-1">
                <h2 id={title+"-section-header"} className="flex-shrink whitespace-nowrap">
                    <span className="text-primary ">#</span>{t(title+".title")}
                </h2>
                {!dontShowHR && <hr className="border-gray border-opacity-50 border-t-2 w-full"/>}
            </div>
            <p className="text-base ml-auto my-auto">
                {viewAllLink && (
                    <Link href={viewAllLink} className={firaCode.className}>
                        {t2("view-all")} --&gt;
                    </Link>
                )}
            </p>
        </header>
    );
};

export default SectionHeader;