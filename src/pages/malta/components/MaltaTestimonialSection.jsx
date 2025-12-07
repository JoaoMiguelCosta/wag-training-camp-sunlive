// src/pages/malta/components/MaltaTestimonialSection.jsx
import { maltaContent } from "../../../config/content/malta.content.js";
import QuoteHighlight from "../../../shared/components/QuoteHighlight.jsx";



export default function MaltaTestimonialSection() {
  const { testimonialSection } = maltaContent;

  if (!testimonialSection) return null;

  const { id, quote, authorName, authorRole, photo, cta } = testimonialSection;

  return (
    <div id={id} >
      <QuoteHighlight
        quote={quote}
        authorName={authorName}
        authorRole={authorRole}
        avatarSrc={photo?.src}
        avatarAlt={photo?.alt}
        bioLabel={cta?.label}
        bioHref={cta?.href}
      />
    </div>
  );
}
