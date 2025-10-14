import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const verticalAeroponicsBenefits = [
    "Faster growth cycles and higher crop density.",
    "Optimal nutrient absorption with precise control.",
    "Reduced risk of soil-borne disease and pests.",
];

const hybridCropIntegrationBenefits = [
    "Enhances soil stability and reduces erosion.",
    "Supports biodiversity and ecosystem health.",
    "Provides diversified yields alongside vertical crops.",
];

export default function FloatingFarm() {
    return (
        <section id="floating-farm" className="container py-24 sm:py-32">
            <div className="text-center mb-16">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Floating Farm Concept
                </h1>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                    Reimagining Agriculture on Mountain Slopes
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 lg:gap-20 mb-20 items-center">
                <div className="space-y-6">
                    <p className="text-lg text-muted-foreground">
                        Aerocco’s Floating Farm Concept represents a revolutionary approach to farming, where vertical aeroponic systems meet mobile technology. This innovation transforms previously non-arable, mountainous terrain into productive, sustainable farmland while drastically reducing resource use.
                    </p>
                    <p className="text-lg text-muted-foreground">
                        Using stacked vertical pods mounted on conveyor systems, crops are grown in controlled conditions with precision nutrient delivery, centralized servicing, and energy-efficient automation. Our approach integrates the latest in agriculture, renewable energy, and AI-driven analytics, enabling farmers to maximize yield and sustainability on challenging terrain.
                    </p>
                </div>
                 <div className="p-8 rounded-lg bg-card border">
                     <h3 className="text-2xl font-bold mb-4 text-center">How It Works</h3>
                    <div className="space-y-4 text-muted-foreground">
                        <p><strong className="text-foreground">Mobile Conveyor Pods:</strong> At the heart of the Floating Farm is the mobile conveyor spine, which transports vertical growing pods from the base station up and down the mountain slope. These pods can be stacked to increase vertical capacity, allowing multiple crops to grow in a compact footprint.</p>
                        <ul className="list-disc list-inside space-y-2 pl-4">
                            <li><strong className="text-foreground">Centralized Servicing:</strong> All watering, fertilization, and harvesting occur at a single base hub, drastically reducing labor. By servicing the pods at the bottom of the slope, Aerocco reduces labor requirements by up to 75% compared to conventional vertical farming.</li>
                            <li><strong className="text-foreground">Water Recapture:</strong> Nutrient-rich water is collected at the base and recycled back into the system, achieving up to 95% water savings versus traditional farming.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
                <Card>
                    <CardHeader>
                        <CardTitle>Vertical Aeroponics</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p className="text-muted-foreground">
                            Our vertical pods utilize aeroponics, a soil-free growing technique where roots are suspended in air and misted with nutrient solutions. This allows for:
                        </p>
                        <ul className="space-y-3">
                            {verticalAeroponicsBenefits.map((benefit, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-primary mt-1 shrink-0" />
                                    <span className="text-muted-foreground">{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Hybrid Crop Integration</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p className="text-muted-foreground">
                           In addition to vertical aeroponics, the Floating Farm incorporates slope-friendly soil crops, such as grapevines and native vegetation. This integration:
                        </p>
                        <ul className="space-y-3">
                            {hybridCropIntegrationBenefits.map((benefit, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-primary mt-1 shrink-0" />
                                    <span className="text-muted-foreground">{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
