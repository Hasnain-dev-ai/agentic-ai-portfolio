"use client"; // Keep this, it's necessary for useRouter

import { useEffect, useState } from "react";
import BlogPost from "@/components/blog/blog-post";
import NewsletterSubscription from "@/components/shared/newsletter-subscription";
import { useRouter } from "next/navigation"; // Import useRouter for App Router
// If you were using the Pages Router (e.g., pages/blog/[slug].tsx), it would be:
// import { useRouter } from "next/router";

import { ChevronLeft } from "lucide-react"; // Import the back arrow icon
import { Button } from "@/components/ui/button"; // Import your Button component

// Mock blog post data - in a real app, this would come from a CMS or API
const mockPost = {
  title: "Building Performant Next.js Applications",
  date: "March 15, 2025",
  readTime: "8 min read",
  category: "Next.js",
  author: {
    name: "John Developer",
    avatar: "/placeholder",
  },
  content: `
    <p>Next.js has become one of the most popular React frameworks for building modern web applications. Its built-in features like server-side rendering, static site generation, and API routes make it a powerful choice for developers looking to build performant applications.</p>
    
    <h2>Why Performance Matters</h2>
    <p>Performance is a critical aspect of user experience. Studies have shown that users are likely to abandon a site if it takes more than a few seconds to load. Moreover, search engines like Google consider page speed as a ranking factor, which means that faster websites are more likely to appear higher in search results.</p>
    
    <h2>Key Performance Optimizations</h2>
    
    <h3>1. Image Optimization</h3>
    <p>Next.js provides an Image component that automatically optimizes images for performance. It resizes, optimizes, and serves images in modern formats like WebP when the browser supports it.</p>
    
    <pre><code>import Image from 'next/image'

export default function MyComponent() {
  return (
    &lt;Image
      src="/proprofile.png"
      alt="Profile Picture"
      width={500}
      height={500}
      priority
    /&gt;
  )
}</code></pre>

    <h3>2. Code Splitting</h3>
    <p>Next.js automatically splits your code into smaller chunks, which means that only the necessary JavaScript is loaded for each page. This significantly reduces the initial load time of your application.</p>
    
    <h3>3. Server-Side Rendering (SSR)</h3>
    <p>SSR generates the HTML for each page on the server for each request. This ensures that the user sees content immediately, rather than waiting for JavaScript to load and execute.</p>
    
    <h3>4. Static Site Generation (SSG)</h3>
    <p>SSG pre-renders pages at build time, which means that the HTML is generated once and served to all users. This is ideal for pages that don't change frequently and can significantly improve performance.</p>
    
    <h2>Measuring Performance</h2>
    <p>To ensure that your Next.js application is performing well, it's important to measure its performance regularly. Tools like Lighthouse, WebPageTest, and Next.js Analytics can help you identify performance bottlenecks and track improvements over time.</p>
    
    <h2>Conclusion</h2>
    <p>Performance optimization is an ongoing process, not a one-time task. By leveraging Next.js's built-in features and following best practices, you can create fast, responsive applications that provide an excellent user experience.</p>
  `,
};

export default function BlogPostPage() {
  const [mounted, setMounted] = useState(false);
  const router = useRouter(); // Initialize the router hook

  // This ensures that the component only renders on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <main className="flex flex-col items-center justify-center w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        {/* --- Back Button Added Here --- */}
        <div className="mb-8">
          <Button
            variant="ghost" // Use a subtle ghost variant
            onClick={() => router.back()} // Navigates back in browser history
            className="flex items-center text-muted-foreground hover:text-foreground transition-colors group" // Added group for potential future hover effects
          >
            <ChevronLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" /> {/* Icon with subtle hover animation */}
            Back to Blog
          </Button>
        </div>
        {/* --- End Back Button --- */}

        <BlogPost post={mockPost} />

        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold">Enjoyed this article?</h3>
            <p className="text-muted-foreground">Subscribe to get notified of new posts.</p>
          </div>
          <NewsletterSubscription />
        </div>
      </div>
    </main>
  );
}