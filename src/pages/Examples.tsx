import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code2, ExternalLink, Copy, Eye } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Examples = () => {
  const { toast } = useToast();

  const examples = [
    {
      title: "Login Form",
      description: "Modern authentication interface with gradient background",
      image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=400&h=300&fit=crop",
      tags: ["Forms", "Authentication", "Gradients"],
      frameworks: ["React", "HTML", "Vue"],
      complexity: "Simple"
    },
    {
      title: "Dashboard Card",
      description: "Clean analytics card with charts and metrics",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      tags: ["Dashboard", "Cards", "Analytics"],
      frameworks: ["React", "Vue"],
      complexity: "Medium"
    },
    {
      title: "E-commerce Product",
      description: "Product showcase with gallery and purchase options",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      tags: ["E-commerce", "Product", "Shopping"],
      frameworks: ["React", "HTML", "Vue"],
      complexity: "Complex"
    },
    {
      title: "Landing Page Hero",
      description: "Eye-catching hero section with call-to-action",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      tags: ["Landing", "Hero", "Marketing"],
      frameworks: ["React", "HTML"],
      complexity: "Medium"
    },
    {
      title: "Navigation Menu",
      description: "Responsive navigation with dropdowns and mobile menu",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      tags: ["Navigation", "Menu", "Responsive"],
      frameworks: ["React", "Vue", "HTML"],
      complexity: "Simple"
    },
    {
      title: "Pricing Table",
      description: "Feature comparison table with multiple pricing tiers",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop",
      tags: ["Pricing", "Tables", "Features"],
      frameworks: ["React", "HTML"],
      complexity: "Medium"
    }
  ];

  const handleViewCode = (title: string) => {
    toast({
      title: "Code Preview",
      description: `Opening code preview for ${title}`,
    });
  };

  const handleCopyCode = (title: string) => {
    toast({
      title: "Code Copied",
      description: `${title} code copied to clipboard`,
    });
  };

  const handleTryDesign = (title: string) => {
    toast({
      title: "Try This Design",
      description: `Loading ${title} for analysis`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-hero text-white">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/30">
            🎨 Real Examples
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            See What's Possible
            <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent"> With Our AI</span>
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Explore real designs converted to production-ready code. Each example shows the original design and generated output.
          </p>
          <Button size="lg" variant="secondary" className="text-purple-900" onClick={() => window.location.href = '/'}>
            Upload Your Design
          </Button>
        </div>
      </section>

      {/* Examples Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Examples</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real designs converted to clean, production-ready code
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {examples.map((example, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-elegant transition-all group">
                <div className="relative overflow-hidden">
                  <img 
                    src={example.image} 
                    alt={example.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                      <Button size="sm" variant="secondary" className="flex-1" onClick={() => handleViewCode(example.title)}>
                        <Eye className="w-4 h-4" />
                        View Code
                      </Button>
                      <Button size="sm" variant="outline" className="border-white/30 text-white hover:bg-white/10" onClick={() => handleCopyCode(example.title)}>
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                    {example.complexity}
                  </Badge>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{example.title}</h3>
                  <p className="text-muted-foreground mb-4">{example.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {example.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1">
                      {example.frameworks.map((framework, fIndex) => (
                        <Badge key={fIndex} variant="outline" className="text-xs">
                          {framework}
                        </Badge>
                      ))}
                    </div>
                    <Button size="sm" variant="ghost" onClick={() => handleTryDesign(example.title)}>
                      <Code2 className="w-4 h-4" />
                      Try This
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Code Showcase */}
      <section className="py-20 px-6 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Code Quality</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Clean, semantic, and production-ready code every time
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">What You Get</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold">Semantic HTML</h4>
                    <p className="text-sm text-muted-foreground">Proper structure with accessibility in mind</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold">Modern CSS</h4>
                    <p className="text-sm text-muted-foreground">Flexbox, Grid, and responsive design</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold">Framework Ready</h4>
                    <p className="text-sm text-muted-foreground">React, Vue, or vanilla HTML output</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-background border rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium">Generated Code</span>
                  <Button size="sm" variant="outline">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
                <pre className="text-sm text-muted-foreground overflow-hidden">
{`<div className="flex flex-col gap-4 p-6
  bg-white rounded-lg shadow-lg">
  <h2 className="text-xl font-bold">
    Welcome Back
  </h2>
  <form className="space-y-4">
    <input className="w-full px-3 py-2
      border rounded-lg" />
    <button className="w-full bg-blue-600
      text-white py-2 rounded-lg">
      Sign In
    </button>
  </form>
</div>`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Convert Your Design?</h2>
          <p className="text-xl text-purple-100 mb-8">
            Upload your design and get the same quality code in seconds
          </p>
          <Button size="lg" variant="secondary" className="text-purple-900" onClick={() => window.location.href = '/'}>
            Start Converting Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Examples;