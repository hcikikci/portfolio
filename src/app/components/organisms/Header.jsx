"use client";
import React, {useEffect, useState} from 'react';
import Logo from "../atoms/Media/Logo";
import HeaderLink from "../atoms/ViewBlocks/HeaderLink";
import Select from "../atoms/Inputs/Select";
import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname } from 'next-intl/client';
import Social from "../atoms/ViewBlocks/Social";

// The Header component is responsible for rendering the header section of the website.
// It includes the Logo, Header Links, and Language Selector.
const Header = ({className}) => {
    // Initialize translation, routing, and locale hooks
    const t = useTranslations('breadcrumbs');
    const router = useRouter();
    const pathname = usePathname();
    const locale = useLocale();
    const [menuOpen, setMenuOpen] = useState(false);

    // Available languages
    const languages = [{ value: "tr", label: "TR" }, { value: "en", label: "EN" }];

    // Function to switch the language
    const switchLanguage = (e) => {
        router.replace(`${pathname}`, { locale: e.value });
    };

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth <= 768) {
                if (menuOpen) {
                    document.body.style.overflow = "hidden";
                } else {
                    document.body.style.overflow = "auto";
                }
            } else {
                document.body.style.overflow = "auto";
            }
        }

        // İlk mountta ve her menuOpen değişikliğinde handleResize çalışacak
        handleResize();

        // Ekran boyutu değişirse handleResize tekrar çalışacak
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [menuOpen]);

    // TailwindCSS classes for responsiveness
    const responsiveClasses = 'flex flex-col md:flex-row md:space-x-8 md:place-items-center text-left';

    return (
        <header className={"flex md:justify-between md:items-center py-8 flex-col md:flex-row " + (className && className) + (menuOpen ? " absolute overscroll-none px-5 md:static bg-white z-20 md:h-fit md:bg-transparent md:w-full w-screen h-screen inset-0" : "")}>
            <div className="flex w-full md:w-fit justify-between">
                <Logo />
                <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden" aria-label={menuOpen ? "Close menu" : "Open menu"}>
                    {
                        menuOpen ? (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="1" height="1" transform="matrix(1 0 0 -1 11 12)" fill="#D9D9D9"/>
                                <rect x="3" y="19.9706" width="24" height="2" transform="rotate(-45 3 19.9706)" fill="#D9D9D9"/>
                                <rect x="4" y="3" width="24" height="2" transform="rotate(45 4 3)" fill="#D9D9D9"/>
                            </svg>
                        ) : (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="5" width="24" height="2" fill="#D9D9D9"/>
                        <rect x="9" y="12" width="15" height="2" fill="#D9D9D9"/>
                        </svg>
                        )
                    }
                </button>
            </div>

            <ul className={`${responsiveClasses} md:space-y-0 space-y-5 my-auto  ${menuOpen ? 'block' : 'hidden md:flex'}`}>
                <HeaderLink page={t("home.title")} link={"/"}/>
                <HeaderLink page={t("projects.title")} link={"/projects"}/>
                <HeaderLink page={t("about-me.title")} link={"/about-me"} />
                <HeaderLink page={t("contact.title")} link={"/contact"} />
                <div className="w-fit">
                    <Select className={"text-2xl md:text-base"} options={languages} defaultValue={languages.find(element => element.value === locale)} onChange={switchLanguage} />
                </div>
                <Social size={"medium"} className={"w-full justify-around !mt-8 md:hidden"}/>
            </ul>
        </header>
    );
};

export default Header;
