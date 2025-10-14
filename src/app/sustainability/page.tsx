import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Droplets, Zap, Users, Mountain, Trees, ShieldCheck, TrendingUp } from "lucide-react";

export default function SustainabilityPage() {
  const waterConservationPoints = [
    "Reduce water use by up to 95% compared to traditional farming.",
    "Recapture and recycle nutrient-rich water at the base station, eliminating waste.",
    "Enable farming in arid and semi-arid regions that were previously unsuitable for agriculture.",
  ];

  const energyEfficiencyPoints = [
    "Solar-Cover Augmentation: Mechanical pod covers double as solar panels, powering irrigation pumps, sensors, and automation systems.",
    "Reduced Artificial Lighting Needs: Unlike conventional vertical farms, our system uses natural sunlight efficiently, further cutting energy usage.",
    "Lower Carbon Footprint: Short supply chains, optimized logistics, and renewable energy integration significantly reduce greenhouse gas emissions.",
  ];

  const laborOptimizationPoints = [
      "A 75% reduction in labor compared to traditional vertical farms.",
      "Efficient deployment of maintenance teams, reducing operational costs.",
      "Safer and ergonomically friendly working conditions, as personnel no longer traverse steep slopes for routine tasks.",
  ];

  const landUtilizationPoints = [
    "Vertical pod systems maximize space utilization without deforestation.",
    "Hybrid crop integration, including grapevines and slope-tolerant vegetation, stabilizes soil and supports biodiversity.",
    "Farms can be modularly scaled, ensuring minimal disruption to the surrounding environment.",
  ];

  const ecosystemBenefitsPoints = [
      "Native vegetation and hybrid crops improve habitat diversity.",
      "Reduced chemical inputs lower pollution and soil degradation.",
      "Integrated water and nutrient management preserves local aquifers and soil microbiomes.",
  ];

  const socialImpactPoints = [
      "Provides local communities with fresh, climate-resilient produce.",
      "Reduces reliance on imported goods, strengthening regional food security.",
      "Encourages green technology adoption, creating jobs in renewable energy, automation, and agritech sectors."
  ];

  const whyItMattersPoints = [
    "Dramatically reduces water and energy consumption.",
    "Lowers operational costs and labor demands.",
    "Converts underutilized land into productive, eco-friendly farms.",
    "Supports climate adaptation and global food security initiatives."
  ];

  return (
    <section id="sustainability" className="container py-24 sm:py-32">
      <div className="text-center mb-16">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Sustainability at Aerocco
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          Redefining Responsible Farming
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground mb-20">
        <p>
          At Aerocco, sustainability is at the core of every design decision. Our Floating Farm Concept combines innovative vertical aeroponics, renewable energy, and precision resource management to deliver a model of agriculture that is efficient, resilient, and environmentally responsible.
        </p>
        <p>
          By focusing on water conservation, energy efficiency, labor optimization, and ecosystem integration, Aerocco demonstrates that modern agriculture can feed growing populations without depleting natural resources.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
         <Card>
            <CardHeader className="flex-row items-center gap-4">
                <Droplets className="h-8 w-8 text-primary"/>
                <CardTitle>Water Conservation</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground mb-4">Water scarcity is one of the most critical challenges facing agriculture today. Aerocco addresses this with closed-loop aeroponic systems that:</p>
                <ul className="space-y-2">
                {waterConservationPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 shrink-0" />
                    <span className="text-sm text-muted-foreground">{point}</span>
                    </li>
                ))}
                </ul>
            </CardContent>
        </Card>
        <Card>
            <CardHeader className="flex-row items-center gap-4">
                <Zap className="h-8 w-8 text-primary"/>
                <CardTitle>Energy Efficiency</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground mb-4">Aerocco farms are designed to minimize energy consumption while leveraging renewable sources:</p>
                <ul className="space-y-2">
                {energyEfficiencyPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 shrink-0" />
                    <span className="text-sm text-muted-foreground">{point}</span>
                    </li>
                ))}
                </ul>
            </CardContent>
        </Card>
        <Card>
            <CardHeader className="flex-row items-center gap-4">
                <Users className="h-8 w-8 text-primary"/>
                <CardTitle>Labor Optimization</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground mb-4">Centralized servicing of all pods at the base station allows for:</p>
                <ul className="space-y-2">
                {laborOptimizationPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 shrink-0" />
                    <span className="text-sm text-muted-foreground">{point}</span>
                    </li>
                ))}
                </ul>
            </CardContent>
        </Card>
         <Card>
            <CardHeader className="flex-row items-center gap-4">
                <Mountain className="h-8 w-8 text-primary"/>
                <CardTitle>Land & Terrain Utilization</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground mb-4">Aerocco transforms previously unproductive mountain slopes and arid regions into fertile farmland:</p>
                <ul className="space-y-2">
                {landUtilizationPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 shrink-0" />
                    <span className="text-sm text-muted-foreground">{point}</span>
                    </li>
                ))}
                </ul>
            </CardContent>
        </Card>
         <Card>
            <CardHeader className="flex-row items-center gap-4">
                <Trees className="h-8 w-8 text-primary"/>
                <CardTitle>Ecosystem & Biodiversity</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground mb-4">Beyond efficiency, Aerocco farms promote healthy ecosystems:</p>
                <ul className="space-y-2">
                {ecosystemBenefitsPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 shrink-0" />
                    <span className="text-sm text-muted-foreground">{point}</span>
                    </li>
))}
                </ul>
            </CardContent>
        </Card>
         <Card>
            <CardHeader className="flex-row items-center gap-4">
                <ShieldCheck className="h-8 w-8 text-primary"/>
                <CardTitle>Social & Economic Impact</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground mb-4">Sustainable farming at Aerocco also delivers tangible social and economic benefits:</p>
                <ul className="space-y-2">
                {socialImpactPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 shrink-0" />
                    <span className="text-sm text-muted-foreground">{point}</span>
                    </li>
                ))}
                </ul>
            </CardContent>
        </Card>
      </div>

      <div className="bg-card rounded-lg p-8 border">
        <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
                <div className="flex items-center gap-4">
                    <TrendingUp className="h-10 w-10 text-primary"/>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                        Why Aerocco Sustainability Matters
                    </h2>
                </div>
                <p className="text-muted-foreground">
                    Sustainability is not just an operational feature—it is a core value and competitive advantage. With Aerocco, sustainable agriculture is profitable, scalable, and regenerative, proving that innovation and environmental responsibility can grow together.
                </p>
            </div>
            <ul className="space-y-3">
                {whyItMattersPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-primary mt-1 shrink-0"/>
                        <span className="text-lg">{point}</span>
                    </li>
                ))}
            </ul>
        </div>
      </div>

    </section>
  );
}
