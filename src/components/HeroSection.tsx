import { Button } from "@/components/ui/button";
import { Upload, Zap, Code2 } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-subtle">
        <img 
          src={heroImage} 
          alt="Design to code transformation" 
          className="w-full h-full object-cover opacity-5"
        />
      </div>
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-primary-glow/20 rounded-lg animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-primary/15 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-white/40 rounded-full px-4 py-2 mb-8">
          <Zap className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-foreground">Free unlimited design analysis</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent mb-6 leading-tight">
          Transform Designs
          <br />
          Into Perfect Code
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Upload any design and get pixel-perfect frontend code instantly. 
          Trusted by designers worldwide for accurate, production-ready results.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button variant="hero" size="lg" className="text-base px-8 py-3">
            <Upload className="w-5 h-5" />
            Start Converting Designs
          </Button>
          <Button variant="ghost" size="lg" className="text-base">
            <Code2 className="w-5 h-5" />
            View Sample Output
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground">100%</div>
            <div className="text-sm text-muted-foreground">Accurate</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground">∞</div>
            <div className="text-sm text-muted-foreground">Free Uses</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground">3s</div>
            <div className="text-sm text-muted-foreground">Avg Time</div>
          </div>
        </div>
      </div>
    </section>
  );
};