import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CheckCircle, Zap, Droplets, Mountain, Cpu } from "lucide-react";

const whyInvestPoints = [
    {
        title: "Cutting-Edge Technology",
        icon: Zap,
        points: [
            "Floating Vertical Farms: Mobile, stacked pods on slopes transform mountainous terrain into high-yield farms.",
            "Aeroponic Efficiency: Soil-free growth with nutrient misting enables faster cycles, higher density, and superior crop quality.",
            "Solar Integration: Mechanical pod covers provide renewable energy and reduce water evaporation.",
            "AI-Driven Analytics: Real-time monitoring of pH, EC, moisture, and growth metrics ensures predictive optimization and operational efficiency."
        ]
    },
    {
        title: "Operational and Cost Advantages",
        icon: Droplets,
        points: [
            "Labor Reduction: Centralized servicing reduces labor by up to 75%, lowering operational costs.",
            "Water Savings: Closed-loop irrigation and recapture achieve up to 95% reduction in water usage.",
            "Terrain Flexibility: Modular, conveyor-mounted pods allow farming on slopes, arid, and previously unusable land."
        ]
    },
    {
        title: "Strong Market Potential",
        icon: TrendingUp,
        points: [
            "Commercial Farms: High-efficiency vertical farming solutions for premium produce markets.",
            "Government & Public Programs: Sustainability, climate resilience, and food security initiatives.",
            "AgriTech Investors & Research Institutions: Licensing, data analytics, and strategic partnerships."
        ]
    },
    {
        title: "Proven Concept & Roadmap",
        icon: Milestone,
        points: [
            "Prototype (2021–2022): 10–20 pod system validated key metrics for water, labor, and yield.",
            "Pilot Farm (2023): 100-pod system integrated full solar, automated controls, and nutrient recirculation.",
            "Regional Expansion (2024–2025): Plans for 10 farms statewide, modular kits for replication.",
            "Global Scaling (2025+): Licensing, franchising, and partnerships with governments and sustainability programs."
        ]
    }
];

const useOfFunds = [
    { phase: "Phase 1", purpose: "Prototype build & testing", cost: "$500,000" },
    { phase: "Phase 2", purpose: "100-pod pilot farm", cost: "$1.5 million" },
    { phase: "Phase 3", purpose: "Regional scaling (10 farms)", cost: "$2.0 million" },
    { phase: "Phase 4", purpose: "Global licensing, IP protection", cost: "$1.0 million" },
    { phase: "Total", purpose: "Seed to Series A", cost: "$5 million" },
];

const projectedReturns = [
    "Year 3: 25–30% ROI via crop sales and system licensing",
    "Year 5: Break-even",
    "Year 7+: 3–5x investor ROI",
]

import { Milestone, TrendingUp } from "lucide-react";


export default function InvestorsPage() {
  return (
    <section id="investors" className="container py-24 sm:py-32">
        <div className="text-center mb-16">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Invest in Aerocco: Pioneering the Future of Sustainable Agriculture
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                Unlocking a Transformative Opportunity
            </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground mb-20">
            <p>
                Aerocco represents a once-in-a-generation opportunity to invest in a revolutionary agricultural technology. Our Floating Farm Concept combines vertical aeroponics, mobile conveyor systems, and solar-powered automation to make previously unproductive terrain highly productive, sustainable, and economically viable.
            </p>
            <p>
                The global Controlled-Environment Agriculture (CEA) market is projected to exceed $100 billion by 2030, with aeroponics growing at a ~20% CAGR. Aerocco’s modular, scalable, and labor-efficient system positions us to capture a significant share of this rapidly expanding market while addressing critical water scarcity, climate resilience, and food security challenges.
            </p>
        </div>

        <div className="mb-20">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12">
                Why Invest in Aerocco?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
                {whyInvestPoints.map((item, index) => (
                    <Card key={index}>
                        <CardHeader className="flex-row items-center gap-4">
                            <item.icon className="h-8 w-8 text-primary"/>
                            <CardTitle>{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2">
                                {item.points.map((point, pIndex) => (
                                    <li key={pIndex} className="flex items-start gap-3">
                                        <CheckCircle className="h-5 w-5 text-primary mt-1 shrink-0" />
                                        <span className="text-sm text-muted-foreground">{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
        
        <div className="mb-20">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12">
                Financial Overview
            </h2>
            <div className="grid lg:grid-cols-3 gap-8 items-start">
                <div className="lg:col-span-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>Use of Funds</CardTitle>
                        </CardHeader>
                        <CardContent>
                             <Table>
                                <TableHeader>
                                    <TableRow>
                                    <TableHead>Phase</TableHead>
                                    <TableHead>Purpose</TableHead>
                                    <TableHead className="text-right">Estimated Cost (USD)</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {useOfFunds.map((item) => (
                                    <TableRow key={item.phase}>
                                        <TableCell className="font-medium">{item.phase}</TableCell>
                                        <TableCell>{item.purpose}</TableCell>
                                        <TableCell className="text-right">{item.cost}</TableCell>
                                    </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </div>
                <div>
                     <Card>
                        <CardHeader>
                            <CardTitle>Projected Returns</CardTitle>
                        </CardHeader>
                        <CardContent>
                             <ul className="space-y-2">
                                {projectedReturns.map((point, pIndex) => (
                                    <li key={pIndex} className="flex items-start gap-3">
                                        <CheckCircle className="h-5 w-5 text-primary mt-1 shrink-0" />
                                        <span className="text-sm text-muted-foreground">{point}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-xs text-muted-foreground mt-4">
                                Aerocco combines technology-driven efficiency with a proven roadmap, making it a highly attractive investment in the future of sustainable agriculture.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center bg-card p-8 rounded-lg border">
            <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Get Involved</h2>
                <p className="text-muted-foreground">
                    Investing in Aerocco means supporting innovative solutions that address global food security, climate resilience, and sustainable resource use. We welcome investors who share our vision of turning non-arable landscapes into productive, environmentally responsible farms, while achieving strong financial returns.
                </p>
                <Button size="lg" style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }}>
                    Contact Us for Investment Opportunities
                </Button>
            </div>
             <div className="space-y-4">
                <h3 className="text-2xl font-bold">Strategic Partnerships</h3>
                <p className="text-muted-foreground">Aerocco is actively collaborating with:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Government Agencies: DOE, USDA, Colorado Energy Office</li>
                    <li>Academic & Research Institutions: Universities focusing on sustainable agriculture and aeroponics</li>
                    <li>Private Sector Partners: Wineries, distributors, AgriTech venture funds</li>
                </ul>
                <p className="text-sm text-muted-foreground">These partnerships accelerate growth, enhance credibility, and reduce deployment risk, creating additional value for investors.</p>
            </div>
        </div>

    </section>
  );
}
