
import { useLanguage } from "@/contexts/LanguageContext";
import Section from "@/components/Section";
import { Link } from "react-router-dom";
import { UtensilsCrossed, Scissors, ShoppingCart } from "lucide-react";

const Demos = () => {
  const { t } = useLanguage();
  
  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 animate-fade-in animate-fill-both">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              {t("demos.title")}
            </h1>
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
              {t("demos.description")}
            </p>
          </div>
        </div>
      </section>

      <Section bgColor="bg-white dark:bg-gray-950">
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Gastronomy Demo Card */}
          <Link 
            to="/demo-gastronomy" 
            className="flex flex-col items-center p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-all hover:shadow-lg hover:scale-105 animate-fade-in animate-fill-both"
          >
            <div className="h-16 w-16 bg-timboti-red/10 rounded-full flex items-center justify-center mb-4">
              <UtensilsCrossed className="h-8 w-8 text-timboti-red" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{t("demos.gastronomy")}</h3>
          </Link>

          {/* Tattoos Demo Card */}
          <Link 
            to="/demo-tattoos" 
            className="flex flex-col items-center p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-all hover:shadow-lg hover:scale-105 animate-fade-in animate-delay-200 animate-fill-both"
          >
            <div className="h-16 w-16 bg-timboti-red/10 rounded-full flex items-center justify-center mb-4">
              <Scissors className="h-8 w-8 text-timboti-red" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{t("demos.tattoos")}</h3>
          </Link>

          {/* Clothing Market Demo Card */}
          <Link 
            to="/demo-clothing" 
            className="flex flex-col items-center p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-all hover:shadow-lg hover:scale-105 animate-fade-in animate-delay-400 animate-fill-both"
          >
            <div className="h-16 w-16 bg-timboti-red/10 rounded-full flex items-center justify-center mb-4">
              <ShoppingCart className="h-8 w-8 text-timboti-red" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{t("demos.clothing")}</h3>
          </Link>
        </div>
      </Section>
    </>
  );
};

export default Demos;
