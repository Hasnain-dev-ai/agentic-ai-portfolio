"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Layout,
  FileText,
  Cpu,
  Zap,
  User,
  BookOpen,
  History,
  Send,
  Menu,  
} from "lucide-react";
import { cn } from "@/lib/utils";
import { navItems } from "@/config/navigation";
import DimensionPortalToggle from "@/components/dimension-portal-toggle";
import NavbarSearch from "@/components/layout/navbar-search";

const tabColors: Record<string, string> = {
  "/": "bg-indigo-600 shadow-indigo-500/50",
  "/projects": "bg-violet-600 shadow-violet-500/50",
  "/skills": "bg-emerald-600 shadow-emerald-500/50",
  "/blog": "bg-amber-600 shadow-amber-500/50",
  "/about": "bg-rose-600 shadow-rose-500/50",
  "/contact": "bg-cyan-600 shadow-cyan-500/50",
  "default": "bg-zinc-800 dark:bg-zinc-200"
};

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  // Close mobile menu on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
        setIsSearchActive(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on tab click
  const handleTabClick = () => {
    setIsMobileMenuOpen(false);
    setIsSearchActive(false);
  };


  const iconMap: Record<string, typeof Home> = {
    Home, Layout, FileText, Cpu, Zap, User, BookOpen, History, Send
  };

  return (
    <>
      {/* Desktop Navbar - Visible only on md+ */}
      <nav className="hidden md:block fixed z-[70] left-1/2 -translate-x-1/2 top-10">
        <motion.div
          layout
          className={cn(
            "bg-white/95 dark:bg-zinc-900/95 backdrop-blur-2xl border border-border/50 flex items-center shadow-2xl transition-all duration-300 px-2 py-1.5 rounded-full overflow-visible",
            isSearchActive ? "w-[600px] lg:w-[800px]" : "w-max"
          )}
        >
          {/* Logo - Hidden when search is active for takeover */}
          {!isSearchActive && (
            <Link href="/" className="mr-4 ml-1 shrink-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-10 h-10 rounded-full overflow-hidden border-2 border-transparent hover:border-black dark:hover:border-white transition-all shadow-lg active:scale-95"
              >
                <Image src="/ha.png" alt="Logo" width={40} height={40} className="object-cover" />
              </motion.div>
            </Link>
          )}

          {/* Navigation Tabs - Hidden when search is active */}
          {!isSearchActive && (
            <div className="flex items-center space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon ? iconMap[item.icon] : null;
                const isActive = pathname === item.path;
                const tabColorClass = tabColors[item.path] || tabColors["default"];
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={cn(
                      "relative px-4 py-2.5 rounded-full text-xs font-bold transition-all duration-300 flex items-center space-x-2.5 group overflow-hidden",
                      isActive ? "text-white shadow-xl" : "text-zinc-500 hover:text-black dark:hover:text-white"
                    )}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="desktop-active-pill"
                        className={cn("absolute inset-0 rounded-full -z-10", tabColorClass)}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    {Icon && <Icon className="w-4 h-4" />}
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>
          )}

          {/* Search Bar - Takeover logic */}
          <div className={cn("transition-all duration-500 ml-3", isSearchActive ? "flex-1" : "w-11 h-11 shrink-0")}>
            <NavbarSearch isActive={isSearchActive} setIsActive={setIsSearchActive} />
          </div>

          {/* Dimension Toggle - Hidden when search is active */}
          {!isSearchActive && (
            <div className="ml-2 bg-zinc-100 dark:bg-zinc-800 p-1.5 rounded-full border border-border/10 shadow-inner shrink-0">
              <DimensionPortalToggle />
            </div>
          )}
        </motion.div>
      </nav>

      {/* Mobile Navbar - Hamburger only, positioned top-right */}
      <nav ref={navRef} className="md:hidden fixed z-[70] right-4 top-10 flex flex-col items-end">
        {/* Hamburger Trigger */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="w-12 h-12 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-2xl border border-border shadow-xl rounded-full flex items-center justify-center text-foreground hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all active:scale-95 shadow-[0_0_15px_rgba(0,0,0,0.1)] active:shadow-inner"
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Expanded Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 10, x: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 10, x: 10 }}
              className="mt-4 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-3xl border border-border/50 shadow-3xl rounded-[2rem] p-4 w-[85vw] max-w-[320px] flex flex-col space-y-4 overflow-visible"
            >
              {/* Top Row: Logo, Search, Toggle */}
              <div className="flex items-center justify-between border-b border-border/20 pb-4">
                {/* Logo - Hidden when search is active */}
                {!isSearchActive && (
                  <Link href="/" onClick={handleTabClick}>
                    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-transparent shadow-md">
                      <Image src="/ha.png" alt="Logo" width={40} height={40} className="object-cover" />
                    </div>
                  </Link>
                )}

                {/* Search - Takeover Logic */}
                <div className={cn("transition-all duration-500", isSearchActive ? "flex-1" : "w-10")}>
                  <NavbarSearch isActive={isSearchActive} setIsActive={setIsSearchActive} />
                </div>

                {/* Toggle - Hidden when search is active */}
                {!isSearchActive && (
                  <div className="bg-zinc-100 dark:bg-zinc-800 p-1 rounded-full border border-border/10">
                    <DimensionPortalToggle />
                  </div>
                )}
              </div>

              {/* Navigation Tabs - Hidden when search is active */}
              {!isSearchActive && (
                <div className="flex flex-col space-y-1">
                  {navItems.map((item) => {
                    const Icon = item.icon ? iconMap[item.icon] : null;
                    const isActive = pathname === item.path;
                    const tabColorClass = tabColors[item.path] || tabColors["default"];
                    return (
                      <Link
                        key={item.path}
                        href={item.path}
                        onClick={handleTabClick}
                        className={cn(
                          "relative px-5 py-3.5 rounded-full text-sm font-bold transition-all duration-300 flex items-center space-x-4",
                          isActive ? "text-white shadow-xl" : "text-zinc-600 dark:text-zinc-400"
                        )}
                      >
                        {isActive && (
                          <motion.div
                            layoutId="mobile-active-pill"
                            className={cn("absolute inset-0 rounded-full -z-10", tabColorClass)}
                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                          />
                        )}
                        {Icon && <Icon className="w-5 h-5 shrink-0" />}
                        <span>{item.name}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
