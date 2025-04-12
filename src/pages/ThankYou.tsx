
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const ThankYou = () => {
  const { language } = useLanguage();
  
  return (
    <section className="relative pt-32 pb-20 md:pt-40 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900 min-h-screen">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in animate-fill-both">
          <img
            src="/lovable-uploads/49a89bbb-1d97-4341-8d48-260d1d70b61a.png"
            alt="Timboti Logo"
            className="h-20 w-auto mx-auto"
          />
          
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            {language === "es" ? "Gracias por tu mensaje" : "Thank you for your message"}
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {language === "es" 
              ? "Nos pondremos en contacto contigo pronto." 
              : "We'll get back to you soon."}
          </p>
          
          <Button asChild size="lg" className="bg-timboti-red hover:bg-timboti-red/90 mt-6">
            <Link to="/">
              {language === "es" ? "Volver al inicio" : "Back to Home"}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ThankYou;
