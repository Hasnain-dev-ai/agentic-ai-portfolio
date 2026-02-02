import type { Metadata } from "next";
import ContactForm from "@/components/contact/contact-form";
import ContactInfo from "@/components/contact/contact-info";
import ContactMap from "@/components/contact/contact-map";

export const metadata: Metadata = {
  title: "Contact | Developer Portfolio",
  description: "Get in touch with me for project inquiries, collaborations, or just to say hello.",
};

export default function ContactPage() {
  return (
    <main className="flex flex-col items-center justify-center w-full relative">
      <div className="bg-page-contact" />
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="vibrant-badge-glass-3d">Get In Touch</div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Let&apos;s <span className="vibrant-text">Connect</span>
            </h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Have a project in mind or want to discuss a potential collaboration? I would love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form takes up 2 columns */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>

            {/* Contact Info and Map in the remaining column */}
            <div className="space-y-8">
              <ContactInfo />
              <ContactMap />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}