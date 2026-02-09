import { LucideIcon } from "lucide-react";

interface KPICardProps {
  title: string;
  value: number | string;
  icon: LucideIcon;
  description?: string;
  accent?: boolean;
}

const KPICard = ({ title, value, icon: Icon, description, accent }: KPICardProps) => {
  return (
    <div className={`rounded-xl p-5 stat-card-glow border border-border transition-transform hover:scale-[1.02] ${accent ? 'dashboard-gradient text-primary-foreground' : 'bg-card text-card-foreground'}`}>
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <p className={`text-xs font-medium uppercase tracking-wider ${accent ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
            {title}
          </p>
          <p className="text-3xl font-extrabold tracking-tight font-mono">
            {typeof value === "number" ? value.toLocaleString("pt-BR") : value}
          </p>
          {description && (
            <p className={`text-xs mt-1 ${accent ? 'text-primary-foreground/60' : 'text-muted-foreground'}`}>
              {description}
            </p>
          )}
        </div>
        <div className={`p-2.5 rounded-lg ${accent ? 'bg-primary-foreground/15' : 'bg-muted'}`}>
          <Icon className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
};

export default KPICard;
