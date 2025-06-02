"use client";

import { useState, useEffect, useRef } from "react"; // Added useRef
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import SearchDialog from "@/components/shared/search-dialog";
import DimensionPortalToggle from "@/components/dimension-portal-toggle";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "Case Studies", path: "/case-studies" },
  { name: "Services", path: "/services" },
  { name: "Skills", path: "/skills" },
  { name: "About", path: "/about" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

const HEADER_HEIGHT = 70; // Approximate height of your header, adjust as needed
const SCROLL_THRESHOLD = 5; // How much user needs to scroll before header reacts

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isHidden, setIsHidden] = useState(false); // State to control visibility
  const lastScrollY = useRef(0); // To store the last scroll position

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Effect for scroll-based header visibility
  useEffect(() => {
    if (!isMounted) return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (Math.abs(currentScrollY - lastScrollY.current) < SCROLL_THRESHOLD) {
        // Not enough scroll, do nothing
        return;
      }

      if (currentScrollY > lastScrollY.current && currentScrollY > HEADER_HEIGHT) {
        // Scrolling down and past header height
        setIsHidden(true);
      } else {
        // Scrolling up or at the top
        setIsHidden(false);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMounted]); // Rerun when isMounted changes


  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isMounted) return null;

  return (
    <motion.header
      initial={{ y: 0 }} // Start at the top directly
      animate={{ y: isHidden ? -HEADER_HEIGHT -10 : 0 }} // Animate based on isHidden state
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 px-6 py-4", // Removed transition-all duration-300 as framer-motion handles it
        "bg-background/90 backdrop-blur-lg shadow-md"
      )}
      style={{ height: `${HEADER_HEIGHT}px` }} // Optional: set a fixed height for consistency
    >
      <div className="container mx-auto flex justify-between items-center h-full"> {/* Ensure content stays within header height */}
        <Link href="/" className="flex items-center space-x-2">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
            className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 flex items-center justify-center overflow-hidden shrink-0"
          >
            <Image
              src="/profile.png"
              alt="Hasnain Ahmed Logo"
              width={40}
              height={40}
              className="object-cover w-full h-full"
              priority
            />
          </motion.div>
          <span className="font-bold text-lg sm:text-xl">
            Hasnain Ahmed
          </span>
        </Link>
        <div className="flex items-center space-x-3">
          <div className="hidden md:block">
            <SearchDialog />
          </div>
          <motion.div
            className="md:hidden bg-background/90 backdrop-blur-lg p-2 rounded-full shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            // onClick={() => setIsOpen(!isOpen)} // This was for mobile menu, SearchDialog handles its own state
          >
            <div className="w-8 h-8 flex items-center justify-center">
              <div className="text-white">
                <SearchDialog /> {/* Ensure SearchDialog opens correctly here */}
              </div>
            </div>
          </motion.div>
          <DimensionPortalToggle />
          <div className="md:hidden">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="bg-background/90 backdrop-blur-lg p-2 rounded-full shadow-md"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="md:hidden fixed top-[4.5rem] inset-x-0 mx-6 bg-white rounded-xl p-4 shadow-2xl"
              style={{ top: `${HEADER_HEIGHT}px`}} // Adjust if needed based on header height
            >
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                    className="block"
                  >
                    <motion.div
                      whileHover={{ x: 5 }}
                      className={cn(
                        "px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300",
                        pathname === item.path
                          ? "bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 text-white"
                          : "text-foreground hover:bg-accent/50"
                      )}
                    >
                      {item.name}
                    </motion.div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}