
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Section from "@/components/Section";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const countries = [
  { name: "United States", code: "+1" },
  { name: "United Kingdom", code: "+44" },
  { name: "Canada", code: "+1" },
  { name: "Australia", code: "+61" },
  { name: "Germany", code: "+49" },
  { name: "France", code: "+33" },
  { name: "Italy", code: "+39" },
  { name: "Spain", code: "+34" },
  { name: "Japan", code: "+81" },
  { name: "China", code: "+86" },
  { name: "India", code: "+91" },
  { name: "Brazil", code: "+55" },
  { name: "Mexico", code: "+52" },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCountryChange = (value: string) => {
    setFormData((prev) => ({ ...prev, country: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted with data:", formData);
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        country: "",
        phone: "",
        message: "",
      });
      toast({
        title: "Message sent!",
        description: "We've received your message and will get back to you soon.",
      });
    }, 1500);
  };

  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-40 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-4 animate-fade-in animate-fill-both">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              We'd love to hear from you and help transform your restaurant
            </p>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8 animate-slide-in animate-fill-both">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Contact Information</h2>
              <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
                Have questions? We're here to help you choose the right plan for your restaurant.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-timboti-red/10 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-timboti-red" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium">Email</h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-400">info@timboti.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-timboti-red/10 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-timboti-red" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium">Phone</h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-400">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-timboti-red/10 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-timboti-red" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium">Address</h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-400">
                    123 Innovation Street<br />
                    San Francisco, CA 94103<br />
                    United States
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-6 animate-fade-in animate-delay-200 animate-fill-both">
            <h3 className="text-xl font-bold mb-6">Send Us a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2 md:col-span-1">
                  <Label htmlFor="country">Country</Label>
                  <Select
                    value={formData.country}
                    onValueChange={handleCountryChange}
                  >
                    <SelectTrigger id="country">
                      <SelectValue placeholder="Country" />
                    </SelectTrigger>
                    <SelectContent>
                      {countries.map((country) => (
                        <SelectItem key={country.code} value={country.code}>
                          {country.name} ({country.code})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  rows={5}
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-timboti-red hover:bg-timboti-red/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </Section>

      <Section bgColor="bg-gray-50 dark:bg-gray-900">
        <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in animate-fill-both">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to see Timboti in action?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Schedule a demo with our team and see how Timboti can transform your restaurant.
          </p>
          <Button asChild size="lg" className="bg-timboti-red hover:bg-timboti-red/90">
            <a href="#" onClick={(e) => {
              e.preventDefault();
              toast({
                title: "Demo request received!",
                description: "Our team will contact you shortly to schedule your demo.",
              });
            }}>
              Schedule a Demo
            </a>
          </Button>
        </div>
      </Section>
    </>
  );
};

export default Contact;
