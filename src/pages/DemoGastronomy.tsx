
import DemoPlaceholder from "./DemoPlaceholder";
import { useLanguage } from "@/contexts/LanguageContext";

const DemoGastronomy = () => {
  const { t } = useLanguage();
  
  return <DemoPlaceholder demoType={t("demos.gastronomy")} />;
};

export default DemoGastronomy;
