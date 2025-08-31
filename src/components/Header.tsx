import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full border-b border-border/30 bg-card/80 backdrop-blur-xl sticky top-0 z-50 shadow-soft">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/b8804ae4-8c4b-4c66-9efe-ab12f66aba51.png" 
              alt="TAG Logo" 
              className="h-10 w-auto"
            />
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#home" 
              className="text-foreground hover:text-primary transition-colors cursor-pointer font-medium"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Home
            </a>
            <a 
              href="#features" 
              className="text-foreground hover:text-primary transition-colors cursor-pointer font-medium"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Features
            </a>
            <a 
              href="#docs" 
              className="text-foreground hover:text-primary transition-colors cursor-pointer font-medium"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('docs')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Documentation
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="hidden md:inline-flex hover:bg-primary/10 hover:text-primary transition-smooth">
              Sign In
            </Button>
            <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary-dark hover:to-accent border-0 shadow-medium hover:shadow-glow transition-smooth px-6">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;