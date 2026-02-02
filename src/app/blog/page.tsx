import type { Metadata } from "next"
import BlogHeader from "@/components/blog/blog-header"
import BlogGrid from "@/components/blog/blog-grid"
// import ParticleBackground from "@/components/blog/particle-background"
import NewsletterSubscription from "@/components/shared/newsletter-subscription"

export const metadata: Metadata = {
  title: "Blog | Developer Portfolio",
  description: "Read my latest articles on web development, programming, and technology.",
}

export default function BlogPage() {
  return (
    <main className="flex flex-col items-center justify-center w-full relative">
      <div className="fixed inset-0 w-full h-full -z-50 bg-page-blog pointer-events-none" />
      {/* <ParticleBackground /> */}
      <BlogHeader />
      <BlogGrid />
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Never Miss an Update</h2>
            <p className="text-muted-foreground mt-2">
              Subscribe to my newsletter to receive the latest articles and updates.
            </p>
          </div>
          <NewsletterSubscription />
        </div>
      </section>
    </main>
  )
}

