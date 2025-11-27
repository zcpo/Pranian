import Link from 'next/link';
import { Check, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const tiers = [
  {
    name: 'Free Trial',
    price: '$0',
    priceDescription: 'for 7 days',
    description: 'Get a taste of what Pranian has to offer, completely free for a week.',
    features: [
      'Access to a limited selection of content',
      'Daily meditation reminders',
      'Track your progress',
    ],
    isFeatured: false,
    cta: 'Start Free Trial',
    href: '/login?trial=true',
  },
  {
    name: 'Premium',
    price: '$3.99',
    priceDescription: '/ month',
    description: 'Unlock your full potential with unlimited access to everything.',
    features: [
      'Unlimited access to all meditations and yoga',
      'Exclusive member-only courses and content',
      'Download sessions for offline access',
      'Early access to new releases',
      'Cancel anytime',
    ],
    isFeatured: true,
    cta: 'Go Premium',
    href: '/login?subscribe=true',
  },
];

export default function PricingPage() {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-16 md:py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold font-headline tracking-tight">Choose Your Path</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Simple, transparent pricing. Start your journey with us today.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {tiers.map((tier) => (
          <Card
            key={tier.name}
            className={cn(
              "flex flex-col",
              tier.isFeatured && "border-primary shadow-lg shadow-primary/10 relative"
            )}
          >
            {tier.isFeatured && (
              <div className="absolute top-0 right-0 -mt-3 -mr-3">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground">
                  <Sparkles className="h-5 w-5" />
                </div>
              </div>
            )}
            <CardHeader>
              <CardTitle className="font-headline tracking-tight text-2xl">{tier.name}</CardTitle>
              <CardDescription>{tier.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold tracking-tight">{tier.price}</span>
                <span className="text-muted-foreground">{tier.priceDescription}</span>
              </div>
              <ul className="mt-6 space-y-4">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="h-5 w-5 text-primary shrink-0 mr-3 mt-1" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild size="lg" className={cn("w-full", !tier.isFeatured && "bg-secondary text-secondary-foreground hover:bg-secondary/80")}>
                <Link href={tier.href}>{tier.cta}</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
