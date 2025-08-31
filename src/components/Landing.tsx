import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import CodeEditor from "@/components/CodeEditor";
import FeatureCard from "@/components/FeatureCard";
import { Cloud, Zap, Database, Shield, Code, Users, GitBranch, Terminal, Play, Eye } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Landing = () => {
  const { toast } = useToast();

  const handleGetStarted = () => {
    toast({
      title: "Welcome to TAG!",
      description: "Your cloud IDE is being set up. You'll be coding in seconds!",
    });
  };

  const handleWatchDemo = () => {
    toast({
      title: "Demo Video",
      description: "Demo video would be shown here in a modal or new tab",
    });
  };

  const handleAPIDemo = () => {
    toast({
      title: "API Documentation",
      description: "Opening comprehensive API documentation...",
    });
  };

  const handleSDKDownload = () => {
    toast({
      title: "SDK Download",
      description: "Starting download of TAG development SDK...",
    });
  };
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section id="home" className="relative py-32 px-4 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary-dark/5"></div>
        
        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-xl float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-accent/20 rounded-full blur-xl float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/3 w-20 h-20 bg-primary-light/20 rounded-full blur-xl float" style={{animationDelay: '4s'}}></div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className="mb-8 relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <img 
              src="/lovable-uploads/b8804ae4-8c4b-4c66-9efe-ab12f66aba51.png" 
              alt="TAG Logo" 
              className="h-20 w-auto mx-auto mb-6 hover-glow transition-all duration-300 group-hover:scale-110 relative z-10"
            />
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Cloud-powered</span>
            <br />
            <span className="text-foreground">Online IDE</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-16 max-w-3xl mx-auto leading-relaxed">
            Access your personal, containerized coding environment with 
            <span className="text-primary font-semibold"> real-time execution</span>, 
            <span className="text-accent font-semibold"> collaborative features</span>, and 
            <span className="text-primary font-semibold"> unlimited possibilities</span>.
          </p>
          
          {/* Code Editor Demo */}
          <div className="mb-16 hover-glow transition-smooth">
            <CodeEditor />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="px-12 py-4 text-lg font-semibold shadow-hero hover:shadow-glow transition-smooth bg-gradient-to-r from-primary to-accent hover:from-primary-dark hover:to-accent border-0 group"
              onClick={handleGetStarted}
            >
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Start Coding Free
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-4 text-lg border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-smooth group"
              onClick={handleWatchDemo}
            >
              <Eye className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-4 relative">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Powerful Features</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need for modern development in one seamless platform
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <FeatureCard
              icon={<Cloud className="w-8 h-8 text-primary" />}
              title="Containerized Environments"
              description="Isolated, secure coding spaces with Docker containers for consistent development across all projects and platforms"
            />
            
            <FeatureCard
              icon={<Zap className="w-8 h-8 text-accent" />}
              title="Real-time Execution"
              description="Immediate feedback on code with lightning-fast compilation and execution powered by our cloud infrastructure"
            />
            
            <FeatureCard
              icon={<Database className="w-8 h-8 text-primary" />}
              title="Persistent Storage"
              description="Your code autosaves to persistent storage with automatic backups and seamless version control integration"
            />
            
            <FeatureCard
              icon={<Shield className="w-8 h-8 text-accent" />}
              title="Sandboxed Execution"
              description="Secure execution environment with resource limits and timeouts to protect your system and ensure stability"
            />
            
            <FeatureCard
              icon={<Users className="w-8 h-8 text-primary" />}
              title="Real-time Collaboration"
              description="Code together with your team in real-time with synchronized cursors, live comments, and shared workspaces"
            />
            
            <FeatureCard
              icon={<GitBranch className="w-8 h-8 text-accent" />}
              title="Git Integration"
              description="Built-in Git support with visual merge tools, branch management, and seamless GitHub/GitLab integration"
            />
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-24 px-4 relative bg-gradient-to-br from-muted/30 via-background to-primary/5">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">Language</span> <span className="gradient-text">Support</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Full-featured development environments for all major programming languages
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Python", version: "3.9+", color: "from-green-500 to-green-600", icon: <Code className="w-6 h-6" /> },
              { name: "JavaScript", version: "ES2023", color: "from-yellow-500 to-yellow-600", icon: <Code className="w-6 h-6" /> },
              { name: "TypeScript", version: "5.0+", color: "from-blue-500 to-blue-600", icon: <Code className="w-6 h-6" /> },
              { name: "Java", version: "17 LTS", color: "from-orange-500 to-orange-600", icon: <Code className="w-6 h-6" /> },
              { name: "C++", version: "C++20", color: "from-blue-600 to-blue-700", icon: <Code className="w-6 h-6" /> },
              { name: "Go", version: "1.21+", color: "from-cyan-500 to-cyan-600", icon: <Code className="w-6 h-6" /> },
              { name: "Rust", version: "1.70+", color: "from-orange-600 to-red-600", icon: <Code className="w-6 h-6" /> },
              { name: "PHP", version: "8.2+", color: "from-purple-500 to-purple-600", icon: <Code className="w-6 h-6" /> },
              { name: "Ruby", version: "3.2+", color: "from-red-500 to-red-600", icon: <Code className="w-6 h-6" /> }
            ].map((lang, index) => (
              <div key={index} className="group bg-card/80 backdrop-blur-sm p-6 rounded-xl shadow-medium hover:shadow-large transition-smooth border border-border/50 hover:border-primary/30">
                <div className="flex items-center gap-4 mb-3">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${lang.color} text-white shadow-medium`}>
                    {lang.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">{lang.name}</h3>
                    <p className="text-sm text-muted-foreground">{lang.version}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">Full IDE support with syntax highlighting, debugging, and package management</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Section */}
      <section id="docs" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">Developer</span> <span className="gradient-text">Resources</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive guides and documentation to accelerate your development workflow
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-card/80 backdrop-blur-sm p-8 rounded-2xl shadow-medium hover:shadow-large transition-smooth border border-border/50">
                <h3 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <div className="w-2 h-8 bg-gradient-to-b from-primary to-accent rounded-full"></div>
                  Quick Start Guide
                </h3>
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                  Get up and running in minutes with our streamlined onboarding process. No downloads, no setup complexity.
                </p>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Create your account in under 30 seconds
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    Choose from 15+ programming languages
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Start coding instantly in your browser
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    Deploy and share your projects seamlessly
                  </li>
                </ul>
              </div>
              
              <div className="bg-card/80 backdrop-blur-sm p-8 rounded-2xl shadow-medium hover:shadow-large transition-smooth border border-border/50">
                <h3 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <Terminal className="w-8 h-8 text-primary" />
                  Advanced Features
                </h3>
                <ul className="space-y-4 text-muted-foreground">
                  {[
                    "Intelligent syntax highlighting & auto-completion",
                    "AI-powered code suggestions and debugging",
                    "Real-time collaborative editing with voice chat",
                    "Integrated terminal with full shell access",
                    "Custom themes, extensions, and workspace layouts",
                    "Built-in database management and API testing",
                    "Automated testing and CI/CD pipeline integration",
                    "Advanced profiling and performance monitoring"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/30 transition-colors">
                      <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-2xl shadow-medium hover:shadow-large transition-smooth border border-primary/20">
                <h3 className="text-3xl font-bold text-foreground mb-4">API & Integrations</h3>
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                  Extend TAG with our comprehensive RESTful API and webhook system. Build custom workflows and integrate with your existing tools.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <Button 
                    className="bg-gradient-to-r from-primary to-accent hover:from-primary-dark hover:to-accent border-0 shadow-medium hover:shadow-glow transition-smooth"
                    onClick={handleAPIDemo}
                  >
                    Explore API Docs
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-smooth"
                    onClick={handleSDKDownload}
                  >
                    Download SDK
                  </Button>
                </div>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span>RESTful API with OpenAPI 3.0 specification</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span>WebSocket support for real-time features</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span>SDKs available for Python, JavaScript, and Go</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-card/80 backdrop-blur-sm p-8 rounded-2xl shadow-medium hover:shadow-large transition-smooth border border-border/50">
                <h3 className="text-3xl font-bold text-foreground mb-6">Community & Support</h3>
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                  Join thousands of developers in our thriving community. Get help, share projects, and collaborate on open-source initiatives.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 rounded-lg bg-gradient-to-br from-muted/50 to-muted/30 hover:from-primary/10 hover:to-accent/10 transition-colors">
                    <div className="text-2xl font-bold text-primary mb-1">50K+</div>
                    <div className="text-sm text-muted-foreground">Active Developers</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-gradient-to-br from-muted/50 to-muted/30 hover:from-primary/10 hover:to-accent/10 transition-colors">
                    <div className="text-2xl font-bold text-accent mb-1">24/7</div>
                    <div className="text-sm text-muted-foreground">Support Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 bg-gradient-to-t from-muted/50 to-background border-t border-border/50 relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className="mb-8 relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <img 
              src="/lovable-uploads/b8804ae4-8c4b-4c66-9efe-ab12f66aba51.png" 
              alt="TAG Logo" 
              className="h-12 w-auto mx-auto mb-4 transition-transform duration-300 group-hover:scale-105 relative z-10"
            />
          </div>
          <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
            Empowering developers with cloud-native coding environments since 2025
          </p>
          
          <div className="flex justify-center items-center gap-8 mb-8">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">Terms of Service</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">Support Center</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">Status</a>
          </div>
          
          <p className="text-muted-foreground/70 text-sm">
            © 2025 TAG Online IDE. All rights reserved. Built with ❤️ for developers worldwide.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;