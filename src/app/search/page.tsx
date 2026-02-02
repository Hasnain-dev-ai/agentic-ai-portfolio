"use client";

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { InstantSearch, SearchBox, Pagination, Configure, useHits } from 'react-instantsearch';
import { searchClient } from '@/lib/algoliaClient';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const ALGOLIA_INDEX_NAME = (process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME || 'portfolio') as string;

// Your SearchPageHit component remains the same, it's already well-styled for a card
interface SearchPageHitProps {
  hit: {
    objectID: string;
    title: string;
    description?: string;
    type?: string;
    url: string;
  };
}

function SearchPageHit({ hit }: SearchPageHitProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "relative rounded-lg p-6 h-full flex flex-col", // Added h-full and flex
        "bg-card text-card-foreground border border-border",
        "hover:shadow-lg dark:hover:shadow-2xl hover:scale-[1.01] dark:hover:bg-zinc-800/50 transition-all duration-300"
      )}
    >
      <Link href={hit.url} className="flex-grow flex flex-col">
        <h3 className="text-xl font-semibold mb-2">{hit.title}</h3>
        {hit.description && (
          <p className="text-sm mb-3 line-clamp-3 text-muted-foreground flex-grow">
            {hit.description}
          </p>
        )}
        <div className="mt-auto"> {/* Pushes content below to the bottom */}
          {hit.type && (
            <span className="inline-block text-xs px-2.5 py-1 rounded-full font-medium mb-3 bg-primary/10 text-primary">
              {hit.type}
            </span>
          )}
          <div className="flex items-center text-primary text-sm font-medium mt-2 transition-colors duration-200 group-hover:text-foreground">
            Read More <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

// --- NEW: Bento Grid component for rendering hits ---
function BentoGridHits() {
  const { hits } = useHits();

  if (hits.length === 0) {
    return <p className="text-center text-muted-foreground mt-8">No results found.</p>
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {hits.map(hit => (
        <SearchPageHit key={hit.objectID} hit={hit as unknown as SearchPageHitProps['hit']} />
      ))}
    </div>
  );
}

function SearchPageContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('query') || '';

  return (
    <InstantSearch
      indexName={ALGOLIA_INDEX_NAME}
      searchClient={searchClient}
      initialUiState={{ [ALGOLIA_INDEX_NAME]: { query: initialQuery } }}
      routing // Simplified routing for modern InstantSearch
    >
      <Configure hitsPerPage={9} attributesToSnippet={['description:50']} />
      <section className="relative w-full py-24 md:py-32 overflow-hidden">
        <div className="bg-page-search" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-center mb-10"
          >
            <span className="gradient-text">Search Results</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-3xl mx-auto mb-12 relative"
          >
            <SearchBox
              placeholder="Search across all content..."
              classNames={{
                root: 'relative w-full',
                form: 'relative',
                input: "w-full pl-12 pr-4 py-3 rounded-full text-lg bg-card border border-border focus:ring-2 focus:ring-primary/50 outline-none",
                submitIcon: "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground",
                resetIcon: "hidden",
              }}
            />
          </motion.div>

          {/* Use the new BentoGridHits component */}
          <BentoGridHits />

          <div className="mt-12 flex justify-center">
            <Pagination classNames={{
              root: 'flex items-center space-x-2',
              list: 'flex items-center space-x-2',
              item: "rounded-md",
              link: "px-4 py-2 bg-card border border-border rounded-md hover:bg-accent",
              selectedItem: "bg-primary text-primary-foreground border-primary",
              disabledItem: 'opacity-50 cursor-not-allowed',
            }} />
          </div>
        </div>
      </section>
    </InstantSearch>
  );
}

export default function SearchPage() {
  return (
    <Suspense>
      <SearchPageContent />
    </Suspense>
  );
}