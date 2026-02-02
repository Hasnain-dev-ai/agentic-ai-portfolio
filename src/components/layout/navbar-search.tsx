"use client"

import { useState, useRef, useEffect, forwardRef, memo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, X, ArrowRight } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
    InstantSearch,
    Configure,
    useHits,
    useSearchBox,
} from "react-instantsearch"
import { searchClient } from "@/lib/algoliaClient"
import { type Hit } from "instantsearch.js"

type PortfolioHit = Hit<{
    objectID: string;
    title: string;
    description?: string;
    type?: string;
    url: string;
}>;

const ALGOLIA_INDEX_NAME = process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME || "portfolio";

const CustomSearchInput = memo(
    forwardRef<
        HTMLInputElement,
        {
            onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
            expanded: boolean;
        }
    >(function CustomSearchInput({ onKeyDown, expanded }, ref) {
        const { query, refine } = useSearchBox();
        return (
            <div className="relative w-full flex items-center">
                <div className={cn(
                    "absolute left-1 p-2 rounded-full transition-all duration-300",
                    expanded
                        ? "bg-black dark:bg-white shadow-md"
                        : "bg-gradient-to-br from-zinc-200 to-zinc-400 dark:from-zinc-700 dark:to-zinc-900 shadow-inner"
                )}>
                    <Search className={cn(
                        "w-3.5 h-3.5 transition-colors",
                        expanded
                            ? "text-white dark:text-black"
                            : "text-zinc-600 dark:text-zinc-300"
                    )} />
                </div>
                <input
                    ref={ref}
                    type="text"
                    value={query}
                    onChange={(e) => refine(e.currentTarget.value)}
                    onKeyDown={onKeyDown}
                    placeholder={expanded ? "Search everything..." : ""}
                    className={cn(
                        "w-full pl-10 pr-4 py-2 rounded-full outline-none transition-all duration-300 h-9 text-sm",
                        "bg-transparent text-foreground placeholder:text-muted-foreground/50 border-none focus:ring-0"
                    )}
                />
            </div>
        );
    })
);

function CustomHit({
    hit,
    isSelected,
    onResultClick,
}: {
    hit: PortfolioHit;
    isSelected: boolean;
    onResultClick: () => void;
}) {
    const ref = useRef<HTMLAnchorElement>(null);
    useEffect(() => {
        if (isSelected)
            ref.current?.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }, [isSelected]);

    return (
        <Link
            ref={ref}
            href={hit.url || "#"}
            className={cn(
                "block p-3 rounded-xl transition-colors group border-b border-border/10 last:border-b-0",
                isSelected ? "bg-accent/50" : "hover:bg-accent/30"
            )}
            onClick={onResultClick}
        >
            <div className="flex items-start justify-between">
                <div className="flex-1">
                    <p className="font-bold text-sm text-foreground transition-colors line-clamp-1">
                        {hit.title}
                    </p>
                    {hit.description && (
                        <p className="text-[10px] text-muted-foreground mt-0.5 line-clamp-1">
                            {hit.description}
                        </p>
                    )}
                </div>
                <ArrowRight className="w-3 h-3 text-muted-foreground ml-2 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
        </Link>
    );
}

function SearchResults({
    closeSearch,
}: {
    closeSearch: () => void;
}) {
    const { hits } = useHits();
    const { query, refine } = useSearchBox();
    const [selectedIndex, setSelectedIndex] = useState(-1);

    useEffect(() => {
        setSelectedIndex(-1);
    }, [query]);

    if (!query) return null;

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-full left-0 right-0 mt-4 bg-card border border-border rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden z-50 max-h-[400px]"
        >
            <div className="overflow-y-auto p-1">
                {(hits as PortfolioHit[]).map((hit, index) => (
                    <CustomHit
                        key={hit.objectID}
                        hit={hit}
                        isSelected={index === selectedIndex}
                        onResultClick={() => {
                            closeSearch();
                            refine("");
                        }}
                    />
                ))}
                {hits.length === 0 && (
                    <div className="p-8 text-center text-sm text-muted-foreground italic">
                        No results found for &quot;{query}&quot;
                    </div>
                )}
            </div>
            {hits.length > 0 && (
                <div className="border-t border-border/10 p-2">
                    <Link
                        href={`/search?query=${encodeURIComponent(query)}`}
                        className="flex items-center justify-center w-full px-3 py-2 text-xs font-bold uppercase tracking-widest rounded-xl text-primary hover:bg-accent/50 transition-colors"
                        onClick={closeSearch}
                    >
                        <Search className="w-3 h-3 mr-2" />
                        Full Results
                    </Link>
                </div>
            )}
        </motion.div>
    );
}

export default function NavbarSearch({ isActive, setIsActive }: { isActive: boolean; setIsActive: (v: boolean) => void }) {
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if (isActive) {
            setTimeout(() => inputRef.current?.focus(), 150)
        }
    }, [isActive])

    return (
        <div className={cn("relative h-10 flex items-center justify-center transition-all duration-500 ease-out", isActive ? "w-full" : "w-10 overflow-hidden")}>
            <InstantSearch indexName={ALGOLIA_INDEX_NAME} searchClient={searchClient}>
                <Configure hitsPerPage={5} />

                <motion.div
                    layout
                    initial={false}
                    animate={{
                        width: isActive ? "100%" : "40px",
                        backgroundColor: isActive ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0)"
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    className={cn(
                        "h-full rounded-full flex items-center overflow-hidden transition-all duration-300 ring-1",
                        isActive ? "ring-foreground/20 shadow-xl" : "ring-transparent hover:ring-foreground/10"
                    )}
                >
                    <div className="flex-1 h-full cursor-pointer flex items-center" onClick={() => !isActive && setIsActive(true)}>
                        <CustomSearchInput
                            ref={inputRef}
                            expanded={isActive}
                            onKeyDown={(e) => {
                                if (e.key === "Escape") {
                                    setIsActive(false)
                                }
                            }}
                        />
                    </div>

                    <AnimatePresence>
                        {isActive && (
                            <motion.button
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 10 }}
                                onClick={(e) => {
                                    e.stopPropagation()
                                    setIsActive(false)
                                }}
                                className="p-2 mr-1 hover:bg-white/20 rounded-full transition-colors text-muted-foreground hover:text-foreground shrink-0"
                                aria-label="Close search"
                            >
                                <X className="w-4 h-4" />
                            </motion.button>
                        )}
                    </AnimatePresence>
                </motion.div>

                <AnimatePresence>
                    {isActive && (
                        <div className="absolute top-full left-0 right-0 mt-2">
                            <SearchResults closeSearch={() => setIsActive(false)} />
                        </div>
                    )}
                </AnimatePresence>
            </InstantSearch>
        </div>
    )
}
