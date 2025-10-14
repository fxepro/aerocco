import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Rss, Share2, MessageSquare } from "lucide-react";
import Link from "next/link";
import NewsletterForm from "@/components/newsletter-form";

const featuredCategories = [
    {
        title: "Innovation in Vertical Farming",
        description: "Explore breakthroughs in aeroponics, hydroponics, and modular vertical systems. Learn how AI, automation, and energy efficiency are transforming how crops are grown and harvested."
    },
    {
        title: "Sustainability & Resource Efficiency",
        description: "Insights on water conservation, solar integration, soil restoration, and carbon reduction. Discover practical strategies for building resilient and eco-friendly farm operations."
    },
    {
        title: "Regional Agriculture & Policy",
        description: "Coverage of government initiatives, grants, and incentives that support sustainable farming in Colorado and beyond. Stay informed on legislation, funding opportunities, and public-private partnerships."
    },
    {
        title: "Industry Trends & Market Insights",
        description: "Analyses of global AgriTech markets, investment trends, and emerging technologies. Understand the economic and environmental factors driving innovation in controlled-environment agriculture (CEA)."
    },
    {
        title: "Aerocco Stories",
        description: "Updates on our pilot farms, prototypes, and community initiatives, showing the impact of Aerocco’s floating farms in real-world environments."
    }
];

const featuredPosts = [
  {
    title: "Water Efficiency in Aeroponics: Lessons from Floating Farms",
    description: "How Aerocco achieves up to 95% water savings.",
    imageId: "blog-post-1",
  },
  {
    title: "Solar Integration for Vertical Farms: Maximizing Energy & Yield",
    description: "Exploring our solar-covered pod technology.",
    imageId: "blog-post-2",
  },
  {
    title: "Transforming Mountain Slopes into Productive Farms",
    description: "A case study from our Colorado pilot project.",
    imageId: "blog-post-3",
  },
   {
    title: "The Future of Automated Agriculture",
    description: "How AI monitoring and predictive analytics optimize crop growth.",
    imageId: "blog-post-4",
  }
];

export default function BlogPage() {
  return (
    <div className="container py-24 sm:py-32">
        <div className="text-center mb-16">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Aerocco Insights & Blog
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                Leading the Conversation in Sustainable Agriculture
            </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground mb-20">
            <p>
                At Aerocco, we believe that innovation doesn’t stop at our farms. Our blog is a hub for thought leadership, research insights, and industry trends in vertical aeroponics, floating farm systems, renewable energy in agriculture, and sustainable food production.
            </p>
            <p>
                We share expertise, case studies, and actionable insights to empower farmers, investors, policymakers, and AgriTech enthusiasts worldwide. Our goal is to educate, inspire, and connect the global community working toward a climate-resilient, high-efficiency agricultural future.
            </p>
        </div>

        <div className="mb-20">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12">
                Featured Categories
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredCategories.map((category, index) => (
                    <Card key={index}>
                        <CardHeader>
                            <CardTitle>{category.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{category.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>

        <div className="mb-20">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12">
                Featured Posts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {featuredPosts.map((post) => {
                const placeholder = PlaceHolderImages.find(p => p.id === post.imageId);
                return (
                    <Card key={post.title} className="flex flex-col overflow-hidden">
                        {placeholder && (
                            <div className="aspect-video relative">
                            <Image
                                src={placeholder.imageUrl}
                                alt={post.title}
                                fill
                                className="object-cover"
                                data-ai-hint={placeholder.imageHint}
                            />
                            </div>
                        )}
                    <CardHeader>
                        <CardTitle className="text-xl">{post.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <CardDescription>{post.description}</CardDescription>
                    </CardContent>
                    <CardFooter>
                        <Button asChild variant="link" className="px-0 group">
                            <Link href="#">
                                Read More
                                <ArrowRight className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1"/>
                            </Link>
                        </Button>
                    </CardFooter>
                    </Card>
                );
                })}
            </div>
        </div>

         <div className="bg-card rounded-lg p-8 border">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                        Community Engagement
                    </h2>
                    <p className="text-muted-foreground">
                        We encourage readers to subscribe to our newsletter, comment on posts, and share our content to foster a community of forward-thinking agriculture innovators.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="flex-1">
                            <h3 className="font-semibold text-lg mb-2">Stay Updated</h3>
                             <NewsletterForm />
                        </div>
                    </div>
                </div>
                 <div className="grid grid-cols-2 gap-6 text-center">
                    <div className="flex flex-col items-center gap-2">
                        <MessageSquare className="h-10 w-10 text-primary" />
                        <h4 className="font-semibold">Comment & Discuss</h4>
                        <p className="text-sm text-muted-foreground">Share your ideas and foster innovation.</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <Share2 className="h-10 w-10 text-primary" />
                        <h4 className="font-semibold">Share Posts</h4>
                        <p className="text-sm text-muted-foreground">Amplify awareness of sustainable solutions.</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
  );
}
