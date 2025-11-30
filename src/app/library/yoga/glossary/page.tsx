
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { terms } from '@/lib/glossary-terms';

export default function GlossaryPage() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-glossary');
  return (
    <div>
      <section className="relative h-64 sm:h-96 flex items-center justify-center text-center text-white">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold font-headline tracking-tight">
            Glossary & Sanskrit Guide
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-white/80">
            A guide to Sanskrit terms and pose names.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8 sm:py-16">
        <div className="text-center mb-12">
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Understand key pose names, pronunciation, and common terminology used in yoga.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-8">
            {terms.sort((a, b) => a.term.localeCompare(b.term)).map((item, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                    <AccordionTrigger className="text-lg font-headline hover:no-underline">{item.term}</AccordionTrigger>
                    <AccordionContent>
                        <p className="text-muted-foreground">{item.definition}</p>
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
      </div>
    </div>
  );
}
