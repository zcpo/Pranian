
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const terms = [
    { term: "Asana", definition: "A physical posture or pose in yoga." },
    { term: "Pranayama", definition: "The practice of breath control in yoga." },
    { term: "Namaste", definition: "A respectful greeting often used at the beginning and end of a yoga class." },
    { term: "Vinyasa", definition: "A style of yoga characterized by stringing postures together so that you move from one to another, seamlessly, using breath." },
    { term: "Mudra", definition: "A symbolic hand gesture used in yoga and meditation." },
    { term: "Mantra", definition: "A word, sound, or phrase repeated to aid concentration in meditation." },
];

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {terms.map((item, index) => (
            <Card key={index}>
                <CardHeader>
                    <CardTitle className="font-headline text-xl">{item.term}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">{item.definition}</p>
                </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
