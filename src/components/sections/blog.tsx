import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const blogPosts = [
  {
    title: "The Water Revolution: How Aeroponics is Solving Scarcity",
    description: "Explore the profound impact of aeroponic technology on water conservation and its role in future-proofing our food supply.",
    imageId: "blog-post-1",
    date: "October 26, 2023",
  },
  {
    title: "Maximizing Yields in Minimal Space: The Vertical Advantage",
    description: "A deep dive into how vertical farming, powered by aeroponics, is creating unprecedented crop yields in urban and non-arable areas.",
    imageId: "blog-post-2",
    date: "October 15, 2023",
  },
  {
    title: "Agri-Tech Fusion: The Symbiosis of AI and Aeroponics",
    description: "Discover how AI and machine learning are optimizing every aspect of Aerocco's farms, from nutrient delivery to harvest.",
    imageId: "blog-post-3",
    date: "October 1, 2023",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="container py-24 sm:py-32">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Insights & Innovations
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Explore our latest thoughts on the future of agriculture, technology, and sustainability.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => {
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
                <p className="text-sm text-muted-foreground">{post.date}</p>
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
    </section>
  );
}
