// @/lib/algoliaClient.ts
import { liteClient as algoliasearch } from 'algoliasearch/lite';

// Ensure these environment variables are defined in your .env.local file
// NEXT_PUBLIC_ALGOLIA_APP_ID="YOUR_ALGOLIA_APP_ID"
// NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY="YOUR_ALGOLIA_SEARCH_ONLY_API_KEY"

const ALGOLIA_APP_ID = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID;
const ALGOLIA_SEARCH_API_KEY = process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY;

// Throwing an error for missing credentials is generally better than a console.warn
// as it makes the issue explicit during development and prevents silent failures.
if (!ALGOLIA_APP_ID || !ALGOLIA_SEARCH_API_KEY) {
  // In a real application, you might want to handle this more gracefully,
  // e.g., by disabling search features or showing a user-friendly message.
  // For development, throwing an error is good for catching misconfigurations early.
  throw new Error(
    "Algolia credentials (NEXT_PUBLIC_ALGOLIA_APP_ID and NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY) are not defined in environment variables. Search will not work."
  );
}

// Initialize the client
export const searchClient = algoliasearch(
  ALGOLIA_APP_ID,
  ALGOLIA_SEARCH_API_KEY
);

// Example of how your Algolia index ("portfolio") should be structured:
// This is for reference within the file, not executable code.
/*
[
  {
    "objectID": "project-1",
    "title": "My Awesome Project",
    "description": "A brief description of this amazing project.",
    "url": "/projects/my-awesome-project",
    "type": "project", // You might have types for filtering
    "imageUrl": "/images/project-1.jpg" // Example: add an image URL
  },
  {
    "objectID": "blog-post-abc",
    "title": "Understanding Algolia Integration",
    "description": "Deep dive into setting up Algolia with Next.js.",
    "url": "/blog/understanding-algolia",
    "type": "blog",
    "author": "Your Name"
  }
]
*/