
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const team = [
  {
    name: "Alex Morgan",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80",
    bio: "Former restaurant manager who saw the need for better automation tools in the industry."
  },
  {
    name: "Jordan Chen",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80",
    bio: "AI researcher with experience building conversation models for customer service."
  },
  {
    name: "Sam Rodriguez",
    role: "Head of Product",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80",
    bio: "Passionate about building user-friendly products that solve real problems."
  },
  {
    name: "Taylor Wright",
    role: "Customer Success",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80",
    bio: "Brings years of restaurant industry experience to help our customers succeed."
  }
];

const About = () => {
  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-40 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-4 animate-fade-in animate-fill-both">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              About Timboti
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Our mission is to simplify restaurant operations through AI
            </p>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-in animate-fill-both">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Our Story
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              We're a team of AI and automation enthusiasts passionate about helping businesses save time and reduce manual work. Timboti is here to simplify tasks through smart bots — starting with restaurants, but aiming to support all kinds of businesses soon.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              After witnessing firsthand the challenges restaurant owners face with order management and customer service, we set out to build a solution that could handle these tasks efficiently and affordably.
            </p>
            <Button asChild className="bg-timboti-red hover:bg-timboti-red/90">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
          <div className="rounded-lg overflow-hidden animate-fade-in animate-delay-200 animate-fill-both">
            <img 
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
              alt="Team working together" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </Section>

      <Section bgColor="bg-gray-50 dark:bg-gray-900">
        <div className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4 animate-fade-in animate-fill-both">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Meet Our Team
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              The people behind Timboti working to make your restaurant more efficient
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div 
                key={member.name} 
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md border border-gray-200 dark:border-gray-700 animate-fade-in animate-fill-both"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-timboti-red font-medium">{member.role}</p>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg overflow-hidden animate-fade-in animate-fill-both">
            <img 
              src="https://images.unsplash.com/photo-1596838132731-31a238e0574f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
              alt="AI robot mascot" 
              className="w-full h-auto"
            />
          </div>
          <div className="space-y-6 animate-slide-in animate-delay-200 animate-fill-both">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Our Vision
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              At Timboti, we envision a future where businesses of all sizes have access to powerful AI tools that handle repetitive tasks, freeing up humans to focus on creativity and customer relationships.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Our restaurant chatbot is just the beginning. We're developing a suite of AI solutions that will revolutionize how businesses operate and serve their customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-timboti-red hover:bg-timboti-red/90">
                <Link to="/pricing">Explore Our Solutions</Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Values Section */}
      <Section bgColor="bg-gray-50 dark:bg-gray-900">
        <div className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4 animate-fade-in animate-fill-both">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Our Values
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 animate-fade-in animate-fill-both animate-delay-200">
              <h3 className="text-xl font-semibold mb-2">Simplicity</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We believe technology should make life easier, not more complicated. Our solutions are designed to be intuitive and easy to use.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 animate-fade-in animate-fill-both animate-delay-400">
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We're constantly pushing the boundaries of what's possible with AI, developing new solutions to solve real-world problems.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 animate-fade-in animate-fill-both animate-delay-600">
              <h3 className="text-xl font-semibold mb-2">Customer Success</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We measure our success by our customers' success. We're committed to helping every customer achieve their goals.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section bgColor="bg-timboti-red">
        <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in animate-fill-both">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">
            Join Us on This Journey
          </h2>
          <p className="text-lg text-white/90">
            Ready to see how Timboti can transform your restaurant?
          </p>
          <Button asChild size="lg" className="bg-white text-timboti-red hover:bg-gray-100">
            <Link to="/contact">Get Started Today</Link>
          </Button>
        </div>
      </Section>
    </>
  );
};

export default About;
