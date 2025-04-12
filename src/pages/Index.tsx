
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Section from "@/components/Section";
import ChatbotDemo from "@/components/ChatbotDemo";
import { MessageSquare, Database, Workflow, MessagesSquare } from "lucide-react";

const Index = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 space-y-6 text-center lg:text-left mb-10 lg:mb-0 animate-fade-in animate-fill-both">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                A chatbot that takes<br />
                <span className="text-timboti-red">orders</span> for your restaurant
              </h1>
              <p className="max-w-md mx-auto lg:mx-0 text-gray-600 dark:text-gray-400 text-lg">
                A chatbot that takes orders, organizes them for you, and keeps your restaurant running smoothly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="bg-timboti-red hover:bg-timboti-red/90">
                  <Link to="/contact">Try it now</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/pricing">View Pricing</Link>
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2 animate-fade-in animate-delay-200 animate-fill-both">
              <img 
                src="https://images.unsplash.com/photo-1559526324-593bc073d938?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
                alt="Restaurant ordering system" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <Section>
        <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in animate-fill-both">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            What We Do
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Timboti builds custom AI automation tools. Our first product is a chatbot tailored for restaurants. 
            It handles customer chats, takes orders, and logs everything into a clean CRM dashboard.
          </p>
        </div>
      </Section>

      {/* Features Section */}
      <Section bgColor="bg-gray-50 dark:bg-gray-900">
        <div className="space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4 animate-fade-in animate-fill-both">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Features
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Designed to make restaurant management easier
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 animate-fade-in animate-fill-both animate-delay-200">
              <div className="h-12 w-12 bg-timboti-red/10 rounded-lg flex items-center justify-center mb-4">
                <MessageSquare className="h-6 w-6 text-timboti-red" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Chatbot</h3>
              <p className="text-gray-600 dark:text-gray-400">
                AI-powered chatbot that interacts with customers on your website or WhatsApp.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 animate-fade-in animate-fill-both animate-delay-400">
              <div className="h-12 w-12 bg-timboti-red/10 rounded-lg flex items-center justify-center mb-4">
                <Database className="h-6 w-6 text-timboti-red" />
              </div>
              <h3 className="text-xl font-semibold mb-2">CRM System</h3>
              <p className="text-gray-600 dark:text-gray-400">
                All customer orders and conversations organized in one easy-to-use dashboard.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 animate-fade-in animate-fill-both animate-delay-400">
              <div className="h-12 w-12 bg-timboti-red/10 rounded-lg flex items-center justify-center mb-4">
                <Workflow className="h-6 w-6 text-timboti-red" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Integration</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Simple setup process with guided integration into your existing website and systems.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 animate-fade-in animate-fill-both animate-delay-600">
              <div className="h-12 w-12 bg-timboti-red/10 rounded-lg flex items-center justify-center mb-4">
                <MessagesSquare className="h-6 w-6 text-timboti-red" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Unlimited Conversations</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Handle as many customer conversations as you need on our Basic plan.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CRM Preview Section */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-in animate-fill-both">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Organize All Your Orders in One Place
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Our CRM system makes it easy to manage all your restaurant orders. View customer history, track preferences, and manage your menu - all from a single dashboard.
            </p>
            <Button asChild className="bg-timboti-red hover:bg-timboti-red/90">
              <Link to="/pricing">See Plans</Link>
            </Button>
          </div>
          <div className="animate-fade-in animate-delay-200 animate-fill-both">
            <img 
              src="https://images.unsplash.com/photo-1542744173-05336fcc7ad4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
              alt="CRM Dashboard" 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section bgColor="bg-timboti-red">
        <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in animate-fill-both">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">
            Ready to Streamline Your Restaurant?
          </h2>
          <p className="text-lg text-white/90">
            Join hundreds of restaurants using Timboti to handle orders and improve customer service.
          </p>
          <Button asChild size="lg" className="bg-white text-timboti-red hover:bg-gray-100">
            <Link to="/contact">Get Started Today</Link>
          </Button>
        </div>
      </Section>

      {/* Chatbot Demo */}
      <ChatbotDemo />
    </>
  );
};

export default Index;
