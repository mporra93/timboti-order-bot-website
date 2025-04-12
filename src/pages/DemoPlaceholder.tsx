
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface DemoPlaceholderProps {
  demoType: string;
}

const DemoPlaceholder = ({ demoType }: DemoPlaceholderProps) => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-950 px-4">
      <div className="text-center max-w-md">
        <img
          src="/lovable-uploads/49a89bbb-1d97-4341-8d48-260d1d70b61a.png"
          alt="Timboti Logo"
          className="h-20 w-auto mx-auto mb-6"
        />
        <h1 className="text-3xl font-bold text-timboti-red mb-4">
          {demoType}
        </h1>
        
        <div className="space-y-2 mb-8">
          <p className="text-gray-900 dark:text-white">
            {t("demoPlaceholder.construction")}
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            {t("demoPlaceholder.constructionEs")}
          </p>
        </div>
        
        <Button asChild className="bg-timboti-red hover:bg-timboti-red/90">
          <Link to="/demos">
            <ArrowLeft className="mr-2 h-4 w-4" />
            <span>Back to Demos</span>
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default DemoPlaceholder;
