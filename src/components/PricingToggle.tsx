
import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

interface PricingToggleProps {
  onChange: (isYearly: boolean) => void;
}

const PricingToggle = ({ onChange }: PricingToggleProps) => {
  const [isYearly, setIsYearly] = useState(false);

  const handleToggle = (checked: boolean) => {
    setIsYearly(checked);
    onChange(checked);
  };

  return (
    <div className="flex flex-col items-center mb-10">
      <div className="flex items-center gap-4">
        <span className={`text-sm font-medium ${!isYearly ? 'text-timboti-red' : 'text-gray-500'}`}>
          Monthly
        </span>
        <div className="flex items-center space-x-2">
          <Switch 
            id="pricing-toggle" 
            checked={isYearly} 
            onCheckedChange={handleToggle}
          />
          <Label htmlFor="pricing-toggle" className="sr-only">Toggle yearly pricing</Label>
        </div>
        <span className={`text-sm font-medium ${isYearly ? 'text-timboti-red' : 'text-gray-500'}`}>
          Yearly <span className="text-xs font-bold text-timboti-red ml-1">(Save 20%)</span>
        </span>
      </div>
    </div>
  );
};

export default PricingToggle;
