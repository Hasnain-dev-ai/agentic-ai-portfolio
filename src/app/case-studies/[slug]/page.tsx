import { use } from "react"; // Import use
import CaseStudyHeader from "@/components/case-studies/case-study-header";
import CaseStudyContent from "@/components/case-studies/case-study-content";
import CaseStudyGallery from "@/components/case-studies/case-study-gallery";
import CaseStudyResults from "@/components/case-studies/case-study-results";
import CaseStudyTestimonial from "@/components/case-studies/case-study-testimonial";
import CaseStudyNextProject from "@/components/case-studies/case-study-next-project";

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const slug = use(Promise.resolve(params.slug)); // Use React.use()

  return (
    <main className="flex flex-col items-center justify-center w-full">
      <CaseStudyHeader slug={slug} />
      <CaseStudyContent slug={slug} />
      <CaseStudyGallery slug={slug} />
      <CaseStudyResults slug={slug} />
      <CaseStudyTestimonial slug={slug} />
      <CaseStudyNextProject slug={slug} />
    </main>
  );
}