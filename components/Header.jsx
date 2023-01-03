import Link from 'next/link'
import React, { useEffect, useState } from 'react';

export default function Header() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const menu = document.getElementById("menu");
        const closeIcon = document.getElementById("closeIcon");
        const sideNav = document.getElementById("sideNav");

        const openMenu = () => {
            sideNav.classList.remove("right-[-50%]");
            sideNav.classList.add("right-0");
            setMenuOpen(true);
        }

        const closeMenu = () => {
            sideNav.classList.add("right-[-50%]");
            sideNav.classList.remove("right-0");
            //   mainDiv.classList.remove("blur-sm");
            setMenuOpen(false);
        }

        menu.addEventListener("click", openMenu);
        closeIcon.addEventListener("click", closeMenu);

        return () => {
            menu.removeEventListener("click", openMenu);
            closeIcon.removeEventListener("click", closeMenu);
        }
    }, []);
    return (
        <>
            {/* SideBar for Mobile */}
            <div id="sideNav" className="side-nav">
                <div className="flex justify-end">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="close-icon"
                        id="closeIcon"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </div>
                <div className="flex flex-col mt-[10rem]">
                    <Link href="#modelS" className="nav-items">
                        Model S
                    </Link>
                    <Link href="#model3" className="nav-items">
                        Model 3
                    </Link>
                    <Link href="#modelX" className="nav-items">
                        Model X{" "}
                    </Link>
                    <Link href="#modelY" className="nav-items">
                        Model Y
                    </Link>
                    <Link href="#solarRoof" className="nav-items">
                        Solar Roof
                    </Link>
                    <Link href="#solarPanel" className="nav-items">
                        Solar Panels
                    </Link>
                </div>
            </div>
            {/* Sidebar Ends */}
            <header className="relative">
                {/* <!-- navigation --> */}
                <nav className="nav-bar">
                    {/* <!-- logo  --> */}
                    <div className="logo mr-[9.5rem] cursor-pointer">
                        <Link href="#model3">
                            <svg
                                className="tds-icon tds-icon-logo-wordmark tds-site-logo-icon h-6"
                                viewBox="0 0 342 35"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M0 .1a9.7 9.7 0 007 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 007-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 006-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 00-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zm0 13.8h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zm0 14.1h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zM308.5 7h26a9.6 9.6 0 007-7h-40a9.6 9.6 0 007 7z"
                                    fill="currentColor"
                                ></path>
                            </svg>
                        </Link>
                    </div>

                    {/* <!-- nav items  --> */}
                    <div className="hidden lg:block">
                        <Link href="#modelS" className="nav-items">Model S</Link>
                        <Link href="#model3" className="nav-items">Model 3</Link>
                        <Link href="#modelX" className="nav-items">Model X</Link>
                        <Link href="#modelY" className="nav-items">Model Y</Link>
                        <Link href="#solarRoof" className="nav-items">Solar Roof</Link>
                        <Link href="#solarPanel" className="nav-items">Solar Panel</Link>
                    </div>

                    {/* <!-- external links  --> */}
                    <div className="links">
                        <Link href="#shop" className="nav-items hidden lg:inline">Shop</Link>
                        <Link href="#account" className="nav-items hidden lg:inline">Account</Link>
                        <Link href="#" className="nav-items" id="menu"> Menu</Link>
                    </div>
                </nav>
            </header>

        </>
    )
}
