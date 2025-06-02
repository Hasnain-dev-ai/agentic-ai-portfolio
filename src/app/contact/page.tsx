import type { Metadata } from "next"
import ContactForm from "@/components/contact/contact-form"
import ContactInfo from "@/components/contact/contact-info"
import ContactMap from "@/components/contact/contact-map"

export const metadata: Metadata = {
  title: "Contact | Developer Portfolio",
  description: "Get in touch with me for project inquiries, collaborations, or just to say hello.",
}

export default function ContactPage() {
  return (
    <main className="flex flex-col items-center justify-center w-full">
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Get In Touch</div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Let&apos;s <span className="gradient-text">Connect</span>
            </h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Have a project in mind or want to discuss a potential collaboration? I would love to hear from you.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <ContactForm />
            <div className="space-y-8">
              <ContactInfo />
              <ContactMap />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

