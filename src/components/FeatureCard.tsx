import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="group relative p-8 bg-card/80 backdrop-blur-sm rounded-2xl border border-border/50 hover:shadow-large transition-smooth hover:border-primary/30 hover:bg-card/90 hover:-translate-y-2">
      <div className="flex items-start space-x-6">
        <div className="flex-shrink-0 p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl group-hover:from-primary/20 group-hover:to-accent/20 transition-smooth shadow-soft group-hover:shadow-medium">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{title}</h3>
          <p className="text-muted-foreground leading-relaxed text-base">{description}</p>
        </div>
      </div>
      
      {/* Subtle glow effect on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
    </div>
  );
};

export default FeatureCard;