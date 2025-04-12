
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
  bgColor?: string;
}

const Section = ({ id, className, children, bgColor = "bg-white dark:bg-gray-950" }: SectionProps) => {
  return (
    <section id={id} className={cn(bgColor, className)}>
      <div className="container py-16 md:py-24 px-4 md:px-6">
        {children}
      </div>
    </section>
  );
};

export default Section;
