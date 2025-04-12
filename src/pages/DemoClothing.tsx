
import DemoPlaceholder from "./DemoPlaceholder";
import { useLanguage } from "@/contexts/LanguageContext";

const DemoClothing = () => {
  const { t } = useLanguage();
  
  return <DemoPlaceholder demoType={t("demos.clothing")} />;
};

export default DemoClothing;
