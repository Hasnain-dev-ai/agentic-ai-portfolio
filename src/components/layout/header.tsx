"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const HEADER_HEIGHT = 70;

export default function Header() {
    const [isHidden, setIsHidden] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            setIsHidden(
                window.scrollY > lastScrollY.current && window.scrollY > HEADER_HEIGHT
            );
            setIsScrolled(window.scrollY > 0);
            lastScrollY.current = window.scrollY;
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -HEADER_HEIGHT }}
            animate={{ y: isHidden ? -HEADER_HEIGHT : 0 }}
            className={cn(
                "fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ease-in-out bg-transparent",
                isScrolled
                    ? "bg-white/70 dark:bg-black/70 backdrop-blur-md border-b border-border/50 shadow-sm"
                    : "bg-transparent"
            )}
            style={{ height: `${HEADER_HEIGHT}px` }}
        >
            <div className="container mx-auto flex justify-between items-center h-full px-4 sm:px-6 lg:px-12">
                {/* Logo Section - Left */}
                <div className="flex items-center">
                    <Link
                        href="/"
                        className="flex items-center space-x-2 sm:space-x-3 group"
                    >
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shrink-0 overflow-hidden border-2 border-transparent group-hover:border-black dark:group-hover:border-white transition-all shadow-lg active:scale-95">
                            <Image
                                src="/ha.png"
                                alt="Logo"
                                width={48}
                                height={48}
                                priority
                                className="object-cover"
                            />
                        </div>
                        <span className="font-montez font-bold text-lg sm:text-2xl text-foreground tracking-tight hidden xs:block">
                            Hasnain Ahmed
                        </span>
                    </Link>
                </div>
            </div>
        </motion.header>
    );
}
