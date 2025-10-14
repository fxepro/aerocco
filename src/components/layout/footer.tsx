import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";
import Logo from "@/components/logo";
import NewsletterForm from "@/components/newsletter-form";

export default function Footer() {
  return (
    <footer className="bg-card text-card-foreground border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col gap-4 md:col-span-2">
            <Logo />
            <p className="max-w-md text-muted-foreground">
              Revolutionizing agriculture with terrain-adaptive floating farms for a sustainable future.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Site Map</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-muted-foreground hover:text-foreground">About</Link></li>
              <li><Link href="/technology" className="text-muted-foreground hover:text-foreground">Technology</Link></li>
              <li><Link href="/investors" className="text-muted-foreground hover:text-foreground">Investors</Link></li>
              <li><Link href="/blog" className="text-muted-foreground hover:text-foreground">Blog</Link></li>
              <li><Link href="/floating-farm" className="text-muted-foreground hover:text-foreground">Floating Farm</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Stay Updated</h3>
            <p className="text-muted-foreground mb-4">
              Sign up for our newsletter to get the latest news.
            </p>
            <NewsletterForm />
          </div>
        </div>
        <div className="mt-12 pt-8 border-t flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Aerocco. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-muted-foreground hover:text-foreground"><Github size={20} /></Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground"><Twitter size={20} /></Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground"><Linkedin size={20} /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
