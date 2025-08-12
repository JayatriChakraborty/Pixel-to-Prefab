import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Zap, 
  Eye, 
  Copy, 
  Download, 
  Palette, 
  Type, 
  Layout, 
  Code2, 
  Smartphone, 
  Monitor,
  ArrowRight,
  Check
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Instant Code Generation",
      description: "Upload your design and get production-ready code in seconds, not hours.",
      details: ["React, Vue, HTML support", "Tailwind CSS integration", "TypeScript compatible"]
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Live Preview",
      description: "See your generated code rendered live before copying or downloading.",
      details: ["Real-time rendering", "Interactive preview", "Mobile responsive"]
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Color Extraction",
      description: "Automatically detect and extract exact color palettes from your designs.",
      details: ["HEX & HSL values", "Color accessibility", "Brand consistency"]
    },
    {
      icon: <Type className="w-8 h-8" />,
      title: "Typography Analysis",
      description: "Identify fonts, sizes, and spacing with pixel-perfect accuracy.",
      details: ["Font family detection", "Line height calculation", "Letter spacing"]
    },
    {
      icon: <Layout className="w-8 h-8" />,
      title: "Layout Intelligence",
      description: "Smart component recognition and responsive layout generation.",
      details: ["Flexbox & Grid", "Component mapping", "Responsive breakpoints"]
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Clean Code Output",
      description: "Generate semantic, accessible, and maintainable code every time.",
      details: ["Semantic HTML", "ARIA compliance", "Best practices"]
    }
  ];

  const codeFormats = [
    {
      name: "React",
      description: "Modern React components with hooks",
      features: ["JSX syntax", "TypeScript support", "Tailwind classes"]
    },
    {
      name: "Vue",
      description: "Vue 3 composition API components",
      features: ["Template syntax", "Reactive data", "Scoped styles"]
    },
    {
      name: "HTML",
      description: "Vanilla HTML with CSS framework",
      features: ["Semantic markup", "CDN includes", "Cross-browser"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-hero text-white">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/30">
            ✨ All Features Included
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Everything You Need to
            <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent"> Convert Designs</span>
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto">
            From design upload to production-ready code in seconds. All features are completely free with unlimited usage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-purple-900">
              Try It Now
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
              View Examples
            </Button>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Every tool you need to transform any design into clean, production-ready code
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all group">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <div className="text-primary">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Code Formats */}
      <section className="py-20 px-6 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Multiple Output Formats</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get your code in the format that fits your workflow
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {codeFormats.map((format, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{format.name}</h3>
                <p className="text-muted-foreground mb-6">{format.description}</p>
                <ul className="space-y-3">
                  {format.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center justify-center gap-2">
                      <Check className="w-4 h-4 text-primary" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Device Support */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Works Everywhere</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your generated code is responsive and works perfectly across all devices
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Responsive by Default</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Smartphone className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Mobile First</h4>
                    <p className="text-sm text-muted-foreground">Optimized for touch and small screens</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Monitor className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Desktop Ready</h4>
                    <p className="text-sm text-muted-foreground">Scales beautifully to large screens</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-hero rounded-2xl p-8 text-white">
                <h4 className="text-lg font-semibold mb-4">Generated Code Preview</h4>
                <div className="bg-white/10 rounded-lg p-4 font-mono text-sm">
                  <div className="text-purple-200">{'<div className="'}</div>
                  <div className="text-white ml-4">grid md:grid-cols-2</div>
                  <div className="text-white ml-4">gap-4 p-6</div>
                  <div className="text-white ml-4">hover:shadow-lg</div>
                  <div className="text-purple-200">{'"/>'}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Designs?</h2>
          <p className="text-xl text-purple-100 mb-8">
            Join thousands of designers and developers who save hours every day
          </p>
          <Button size="lg" variant="secondary" className="text-purple-900">
            Start Converting Now
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Features;