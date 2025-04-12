
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Section from "@/components/Section";
import ChatbotDemo from "@/components/ChatbotDemo";
import { MessageSquare, Database, Workflow, MessagesSquare } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import RobotPuppyIllustration from "@/components/RobotPuppyIllustration";

const Index = () => {
  const { t } = useLanguage();
  
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 space-y-6 text-center lg:text-left mb-10 lg:mb-0 animate-fade-in animate-fill-both">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                {t("home.hero.title")}<br />
                <span className="text-timboti-red">{t("home.hero.titleHighlight")}</span> {t("home.hero.subtitle")}
              </h1>
              <p className="max-w-md mx-auto lg:mx-0 text-gray-600 dark:text-gray-400 text-lg">
                {t("home.hero.description")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="bg-timboti-red hover:bg-timboti-red/90">
                  <Link to="/contact">{t("buttons.tryNow")}</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/pricing">{t("buttons.viewPricing")}</Link>
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2 animate-fade-in animate-delay-200 animate-fill-both">
              <RobotPuppyIllustration />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <Section>
        <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in animate-fill-both">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t("home.whatWeDo.title")}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {t("home.whatWeDo.description")}
          </p>
        </div>
      </Section>

      {/* Features Section */}
      <Section bgColor="bg-gray-50 dark:bg-gray-900">
        <div className="space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4 animate-fade-in animate-fill-both">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {t("home.features.title")}
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              {t("home.features.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 animate-fade-in animate-fill-both animate-delay-200">
              <div className="h-12 w-12 bg-timboti-red/10 rounded-lg flex items-center justify-center mb-4">
                <MessageSquare className="h-6 w-6 text-timboti-red" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t("home.features.smartChatbot.title")}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t("home.features.smartChatbot.description")}
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 animate-fade-in animate-fill-both animate-delay-400">
              <div className="h-12 w-12 bg-timboti-red/10 rounded-lg flex items-center justify-center mb-4">
                <Database className="h-6 w-6 text-timboti-red" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t("home.features.crmSystem.title")}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t("home.features.crmSystem.description")}
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 animate-fade-in animate-fill-both animate-delay-400">
              <div className="h-12 w-12 bg-timboti-red/10 rounded-lg flex items-center justify-center mb-4">
                <Workflow className="h-6 w-6 text-timboti-red" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t("home.features.easyIntegration.title")}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t("home.features.easyIntegration.description")}
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 animate-fade-in animate-fill-both animate-delay-600">
              <div className="h-12 w-12 bg-timboti-red/10 rounded-lg flex items-center justify-center mb-4">
                <MessagesSquare className="h-6 w-6 text-timboti-red" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t("home.features.unlimitedConversations.title")}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t("home.features.unlimitedConversations.description")}
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
              {t("home.crmPreview.title")}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              {t("home.crmPreview.description")}
            </p>
            <Button asChild className="bg-timboti-red hover:bg-timboti-red/90">
              <Link to="/pricing">{t("home.crmPreview.cta")}</Link>
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
            {t("home.cta.title")}
          </h2>
          <p className="text-lg text-white/90">
            {t("home.cta.description")}
          </p>
          <Button asChild size="lg" className="bg-white text-timboti-red hover:bg-gray-100">
            <Link to="/contact">{t("home.cta.button")}</Link>
          </Button>
        </div>
      </Section>

      {/* Chatbot Demo */}
      <ChatbotDemo />
    </>
  );
};

export default Index;
