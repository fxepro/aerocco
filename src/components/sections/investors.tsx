import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

const keyPoints = [
    "High-impact investment in sustainable agriculture.",
    "Validated performance and scalable business model.",
    "Addressing global food security and climate resilience.",
    "Opportunities for private investors and governmental agencies."
]

export default function Investors() {
  return (
    <section id="investors" className="bg-card">
      <div className="container py-24 sm:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Invest in a Greener, More Productive World
            </h2>
            <p className="text-lg text-muted-foreground">
              Aerocco presents a unique opportunity to invest in a technology that sits at the nexus of sustainability, food security, and innovative land use. Our floating farms are not just a concept; they are a validated, scalable solution poised to transform global agriculture.
            </p>
            <ul className="space-y-4">
                {keyPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-primary mt-1 shrink-0"/>
                        <span className="text-muted-foreground">{point}</span>
                    </li>
                ))}
            </ul>
          </div>
          <div className="bg-background rounded-lg p-8 shadow-lg">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold tracking-tight">Ready to Grow With Us?</h3>
              <p className="text-muted-foreground">
                We are seeking strategic partners to help scale our vision. Request our investor deck to learn more about our financials, pilot projects, and implementation plans.
              </p>
              <Button asChild size="lg" className="w-full" style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }}>
                <Link href="/investors">Request Investor Deck</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
