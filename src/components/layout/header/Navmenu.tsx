"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cx } from "@/helpers/class-prefix";
import { NAV_MENU } from "@/config/navigation.config";

const Navmenu = () => {
    const pathname = usePathname();

    return (
        <nav className={cx("nav-area")} aria-label="Main navigation">
            <ul className={cx("nav-list")}>
                {NAV_MENU.map(item => {
                    const isActive = pathname === item.path;

                    return (
                        <li className={cx("nav-item")} key={item.label}>
                            <Link
                                href={item.path}
                                className={cx("nav-link")}
                                aria-current={isActive ? "page" : undefined}
                            >
                                {item.label}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Navmenu;
