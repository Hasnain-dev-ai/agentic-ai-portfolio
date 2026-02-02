import type { Metadata } from "next"
import ServicesHeader from "@/components/services/services-header"
import ServicesList from "@/components/services/services-list"
import ServicesProcess from "@/components/services/services-process"
import ServicesPricing from "@/components/services/services-pricing"
import ServicesFAQ from "@/components/services/services-faq"

export const metadata: Metadata = {
  title: "Services | Developer Portfolio",
  description: "Professional web development services including frontend, backend, and full-stack solutions.",
}

export default function ServicesPage() {
  return (
    <main className="flex flex-col items-center justify-center w-full relative page-services">
      <div className="bg-page-services" />
      <ServicesHeader />
      <ServicesList />
      <ServicesProcess />
      <ServicesPricing />
      <ServicesFAQ />
    </main>
  )
}

