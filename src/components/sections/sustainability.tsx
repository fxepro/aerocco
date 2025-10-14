import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Droplets, Users, CloudCog, Leaf } from "lucide-react";

const metrics = [
  {
    icon: Droplets,
    value: "98%",
    title: "Less Water Used",
    description: "Our closed-loop water recapture system minimizes waste, making every drop count.",
  },
  {
    icon: Users,
    value: "80%",
    title: "Labor Reduction",
    description: "Centralized maintenance and automation significantly reduce manual labor requirements.",
  },
  {
    icon: CloudCog,
    value: "75%",
    title: "Lower Carbon Impact",
    description: "Reduced transport and solar augmentation contribute to a smaller environmental footprint.",
  },
  {
    icon: Leaf,
    value: "10x",
    title: "More Crop Efficiency",
    description: "Vertical design and optimized growth cycles lead to higher yields per square foot.",
  },
];

export default function Sustainability() {
  return (
    <section id="sustainability" className="bg-card">
      <div className="container py-24 sm:py-32">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Sustainable by Design
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                Aerocco is engineered for ecological and economic efficiency. Our technology provides tangible benefits for the planet and our partners.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <Card key={index} className="text-center border-2 border-primary/20 shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
              <CardHeader className="items-center">
                <div className="bg-primary/10 p-4 rounded-full">
                    <metric.icon className="h-8 w-8 text-primary" />
                </div>
                <p className="text-5xl font-bold font-headline text-primary pt-4">{metric.value}</p>
                <CardTitle className="text-xl">{metric.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{metric.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
