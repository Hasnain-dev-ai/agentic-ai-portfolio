import React from "react";
import CaseStudyHeader from "@/components/case-studies/case-study-header";

import CaseStudyContent from "@/components/case-studies/case-study-content";

import CaseStudyGallery from "@/components/case-studies/case-study-gallery";

import CaseStudyResults from "@/components/case-studies/case-study-results";

import CaseStudyTestimonial from "@/components/case-studies/case-study-testimonial";

import CaseStudyNextProject from "@/components/case-studies/case-study-next-project";

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;



    return (

        <main className="flex flex-col items-center justify-center w-full relative">
            <div className="bg-page-casestudies" />

            <CaseStudyHeader slug={slug} />
            <CaseStudyContent slug={slug} />

            <CaseStudyGallery slug={slug} />

            <CaseStudyResults slug={slug} />

            <CaseStudyTestimonial slug={slug} />
            <CaseStudyNextProject currentSlug={slug} />

        </main>

    );

}

