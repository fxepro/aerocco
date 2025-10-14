import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, Repeat, SunMedium } from "lucide-react";

const technologies = [
  {
    icon: Package,
    title: "Vertical Aeroponic Pods",
    description: "Our modular pods provide a nutrient-rich mist directly to plant roots, maximizing growth and minimizing water usage in a space-efficient vertical layout.",
    imageId: "tech-pods",
  },
  {
    icon: Repeat,
    title: "Automated Conveyor System",
    description: "A centralized conveyor system automates the movement of pods from planting to harvesting, drastically reducing labor and improving operational flow.",
    imageId: "tech-conveyor",
  },
  {
    icon: SunMedium,
    title: "Integrated Solar Covers",
    description: "The terrain-adaptive structure is covered by solar panels, generating clean energy to power the farm's systems and contributing to its sustainability.",
    imageId: "tech-solar",
  },
];

export default function Technology() {
  return (
    <section id="technology" className="container py-24 sm:py-32">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          The Aerocco Advantage
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Our core technologies work in synergy to create a hyper-efficient, sustainable, and scalable farming ecosystem.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {technologies.map((tech) => {
          const placeholder = PlaceHolderImages.find(p => p.id === tech.imageId);
          return (
            <Card key={tech.title} className="overflow-hidden group">
              {placeholder && (
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={placeholder.imageUrl}
                    alt={tech.title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                    data-ai-hint={placeholder.imageHint}
                  />
                </div>
              )}
              <CardHeader className="flex-row items-center gap-4">
                <tech.icon className="h-8 w-8 text-primary" />
                <CardTitle className="text-xl">{tech.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{tech.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
