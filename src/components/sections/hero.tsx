import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import GradientBackground from "../gradient-background";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-background">
      <GradientBackground />
      
      <div className="container relative z-10 flex min-h-[calc(100vh-4rem)] items-center justify-center py-24 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg shadow-2xl shadow-black/10">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl !leading-tight text-foreground">
              The Future of Farming is Floating
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground">
              Aerocco merges advanced aeroponics and modular design to grow sustainable food anywhere on Earth.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }}>
              <Link href="#investors">
                Become a Partner
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-border bg-background/50 backdrop-blur-sm hover:bg-accent hover:text-accent-foreground">
              <Link href="#technology">
                Explore Technology
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
