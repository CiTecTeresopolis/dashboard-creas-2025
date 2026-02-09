import { ReactNode } from "react";

interface ChartSectionProps {
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

const ChartSection = ({ title, description, children, className = "" }: ChartSectionProps) => {
  return (
    <div className={`chart-container ${className}`}>
      <div className="mb-4">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">{title}</h3>
        {description && <p className="text-xs text-muted-foreground mt-0.5">{description}</p>}
      </div>
      {children}
    </div>
  );
};

export default ChartSection;
