
import DemoPlaceholder from "./DemoPlaceholder";
import { useLanguage } from "@/contexts/LanguageContext";

const DemoTattoos = () => {
  const { t } = useLanguage();
  
  return <DemoPlaceholder demoType={t("demos.tattoos")} />;
};

export default DemoTattoos;
