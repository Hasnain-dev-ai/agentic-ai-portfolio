import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 relative">
            {/* Unique Gradient for 404 */}
            <div className="fixed inset-0 w-full h-full -z-50 bg-page-base-gradient opacity-80 pointer-events-none" />

            <h1 className="text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 mb-4">
                404
            </h1>
            <h2 className="text-3xl font-semibold mb-6">Page Not Found</h2>
            <p className="max-w-md text-muted-foreground mb-8 text-lg">
                Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved or deleted.
            </p>
            <Link href="/">
                <Button size="lg" className="bg-[image:var(--gradient-primary)] text-white hover:opacity-90">
                    Return Home
                </Button>
            </Link>
        </div>
    )
}
