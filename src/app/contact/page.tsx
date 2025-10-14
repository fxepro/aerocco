import ContactForm from "@/components/contact-form";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="container py-24 sm:py-32">
      <div className="text-center mb-16">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Get in Touch
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          We’d love to hear from you. Whether you have a question about our technology, partnerships, or anything else, our team is ready to answer all your questions.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div className="bg-card p-8 rounded-lg border space-y-8">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                Contact Information
            </h2>
            <div className="space-y-6">
                <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary mt-1"/>
                    <div>
                        <h3 className="font-semibold">Our Office</h3>
                        <p className="text-muted-foreground">123 Green-Tech Avenue, Boulder, CO 80302, USA</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-primary mt-1"/>
                    <div>
                        <h3 className="font-semibold">Email Us</h3>
                        <p className="text-muted-foreground">
                            <a href="mailto:info@aerocco.com" className="hover:text-primary">info@aerocco.com</a>
                        </p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-primary mt-1"/>
                    <div>
                        <h3 className="font-semibold">Call Us</h3>
                        <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                </div>
            </div>
             <div className="pt-8 border-t">
                <h3 className="text-xl font-bold mb-4">Business Hours</h3>
                <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 5:00 PM (MST)</p>
            </div>
        </div>
        <div className="bg-card p-8 rounded-lg border">
             <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-6">
                Send us a Message
            </h2>
            <ContactForm />
        </div>
      </div>
    </div>
  );
}
