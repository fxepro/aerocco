import FloatingFarm from '@/components/sections/floating-farm';

export default function FloatingFarmPage() {
  return (
    <>
      <FloatingFarm />
      <SustainabilityAndEfficiency />
      <TechnologyAndInnovation />
    </>
  );
}

function SustainabilityAndEfficiency() {
  const sustainabilityPoints = [
    {
      title: "Solar-Cover Augmentation",
      description: "Mechanical pod covers serve as solar panels, providing renewable energy for pumps, sensors, and automation, while shading crops to reduce evapotranspiration."
    },
    {
      title: "Carbon Reduction",
      description: "Short supply chains, low input requirements, and solar energy integration dramatically reduce carbon emissions."
    },
    {
      title: "Water Efficiency",
      description: "Closed-loop irrigation with recapture ensures optimal water use in arid and mountainous regions."
    },
    {
      title: "Labor Efficiency",
      description: "Centralized servicing and automated monitoring reduce labor costs and human intervention."
    }
  ];

  return (
    <section id="sustainability-efficiency" className="bg-card">
      <div className="container py-24 sm:py-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Sustainability & Efficiency
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Aerocco’s Floating Farm is designed for maximum resource efficiency and environmental impact mitigation.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sustainabilityPoints.map((point, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{point.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{point.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

function TechnologyAndInnovation() {
  const techPoints = [
    {
      title: "AI Monitoring & Controls",
      description: "Sensors track pH, nutrient levels, root health, and growth metrics in real-time, allowing for predictive maintenance and yield optimization."
    },
    {
      title: "Modular Design",
      description: "Farms can expand by adding additional pods or conveyors, allowing for scalable solutions from small pilots to full commercial operations."
    },
    {
      title: "Terrain Adaptability",
      description: "The system is designed to function on slopes and rugged landscapes, opening new areas for agricultural production."
    }
  ];

  const benefits = [
    "Converts non-arable mountain slopes into productive farmland.",
    "Achieves 95% water savings and 75% labor reduction.",
    "Integrates renewable energy and sustainable farming practices.",
    "Supports climate-resilient agriculture and local food security.",
    "Modular, scalable, and ready for regional or global deployment."
  ];

  return (
    <section id="technology-innovation" className="container py-24 sm:py-32">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Technology & Innovation
            </h2>
            <div className="grid gap-6">
              {techPoints.map((point, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{point.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{point.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-4">
              Benefits at a Glance
            </h3>
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 shrink-0" />
                  <span className="text-muted-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="space-y-6 bg-card p-8 rounded-lg border">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            The Future of Farming
          </h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              Aerocco’s Floating Farm represents more than a technology—it is a paradigm shift in agriculture. By combining vertical aeroponics, mobile pod infrastructure, solar energy, and AI-driven monitoring, we are redefining what is possible for food production in challenging environments.
            </p>
            <p className="font-semibold text-foreground">
              Whether in the mountains of Colorado or arid regions worldwide, Aerocco makes every slope a productive farm.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}