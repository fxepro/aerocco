import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Milestone } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


const promises = [
    "Deliver energy-efficient, water-conscious farming solutions for a growing global population.",
    "Create a scalable model that can be replicated worldwide, addressing local food security challenges.",
    "Inspire a new era of smart, automated agriculture that harmonizes with the environment.",
]

const teamMembers = [
  { name: "Satish D Mani", title: "Founder & CEO", initials: "SM" },
  { name: "Dr. Priya Nair", title: "Chief Agritech Officer", initials: "PN" },
  { name: "Carlos Mendoza", title: "Head of Mechanical Engineering", initials: "CM" },
  { name: "Emma Li", title: "Sustainability Director", initials: "EL" },
  { name: "Ravi Kumar", title: "CTO", initials: "RK" },
  { name: "Advisory Board", title: "Researchers, Consultants, & Partners", initials: "AB" },
];

const timeline = [
    {
        year: "2020",
        title: "Concept Formation",
        description: "The idea of a floating, mobile aeroponic farm was conceived, focusing on utilizing mountainous terrain and combining vertical aeroponics with conveyor-based mobility. Initial research and conceptual design were completed."
    },
    {
        year: "2021",
        title: "Feasibility & Design",
        description: "Technical feasibility studies were conducted, including water recapture, solar cover integration, and slope stability analysis. Partnerships with local universities and environmental groups were initiated."
    },
    {
        year: "2022",
        title: "Prototype Development",
        description: "The first small-scale 10–20 pod prototype was constructed and tested on a mountain slope in Colorado. Key metrics measured included water efficiency, labor reduction, and yield optimization."
    },
    {
        year: "2023",
        title: "Pilot Operations",
        description: "Expanded to a 100-pod commercial pilot, integrating full solar canopy, automated control systems, and nutrient recirculation. Partnerships with local distributors for produce delivery were established."
    },
    {
        year: "2024–2025",
        title: "Regional Scaling",
        description: "Plans underway for 10 modular farms across Colorado, with standardized kits and operational protocols designed for future export to other arid and mountainous regions."
    },
    {
        year: "2025+",
        title: "Global Expansion",
        description: "Aerocco is preparing for international licensing, strategic partnerships with governments, and public-private initiatives to expand the footprint of floating farms worldwide."
    }
]

const visionPoints = [
    "Make mountain slopes and arid regions productive without compromising ecosystems.",
    "Deliver energy-efficient, water-conscious farming solutions for a growing global population.",
    "Create a scalable model that can be replicated worldwide, addressing local food security challenges.",
    "Inspire a new era of smart, automated agriculture that harmonizes with the environment.",
]

export default function About() {
  return (
    <section id="about" className="container py-24 sm:py-32">
        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 mb-20">
            <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Our Mission
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground">
                    <p>At Aerocco, our mission is simple yet ambitious: to transform arid, mountainous, and previously underutilized land into high-yield, sustainable farms using cutting-edge vertical aeroponic technology.</p>
                    <p>By harnessing the power of mobile vertical pods, nutrient-efficient aeroponics, and renewable energy integration, we aim to produce fresh, healthy, and climate-resilient crops while drastically reducing water use, labor requirements, and carbon footprint.</p>
                    <p>Our commitment extends beyond yield—it’s about creating a regenerative agricultural system that benefits communities, governments, and the environment alike.</p>
                </div>
            </div>
            <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Our Vision
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground">
                    <p>We envision a world where geography no longer limits agriculture. Aerocco seeks to reimagine food production, leveraging technology, automation, and sustainability principles to cultivate farms on terrain once thought impossible to farm.</p>
                    <p>Through innovation, we aim to:</p>
                </div>
                 <ul className="space-y-4">
                    {visionPoints.map((point, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <CheckCircle className="h-6 w-6 text-primary mt-1 shrink-0"/>
                            <span className="text-muted-foreground text-lg">{point}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

        {/* Team */}
        <div className="space-y-8 mb-20">
            <h3 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center">
                Meet the Team
            </h3>
            <p className="max-w-3xl mx-auto text-center text-lg text-muted-foreground">Aerocco is powered by a multidisciplinary team of innovators, each bringing unique expertise to transform the future of agriculture. Our team combines agriculture, engineering, data science, and sustainability expertise to deliver a seamless, efficient, and innovative solution.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {teamMembers.map((member) => (
                    <Card key={member.name} className="overflow-hidden">
                        <CardContent className="p-4 flex items-center gap-4">
                            <Avatar className="h-16 w-16">
                                <AvatarFallback>{member.initials}</AvatarFallback>
                            </Avatar>
                            <div className="space-y-1">
                            <p className="font-semibold text-lg">{member.name}</p>
                            <p className="text-sm text-primary">{member.title}</p>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>

        {/* Timeline */}
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Our Journey
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                From a bold idea to a global vision, this is the Aerocco timeline.
            </p>
        </div>

        <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible defaultValue="item-5">
            {timeline.map((item, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                    <AccordionTrigger>
                        <div className="flex items-center gap-4 text-left">
                            <Milestone className="h-6 w-6 text-primary"/>
                            <div>
                                <p className="text-lg font-bold">{item.year}</p>
                                <p className="text-md text-foreground">{item.title}</p>
                            </div>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="pl-14 text-muted-foreground">
                        {item.description}
                    </AccordionContent>
                </AccordionItem>
            ))}
            </Accordion>
        </div>
    </section>
  );
}
