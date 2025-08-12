import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen, 
  Code2, 
  Zap, 
  Upload, 
  Eye, 
  Copy, 
  Download,
  HelpCircle,
  ExternalLink,
  ChevronRight,
  Search
} from 'lucide-react';
import { Input } from '@/components/ui/input';

const Docs = () => {
  const quickStart = [
    {
      step: 1,
      title: "Upload Your Design",
      description: "Drag and drop your design file or paste a URL to any design",
      icon: <Upload className="w-6 h-6" />
    },
    {
      step: 2,
      title: "AI Analysis",
      description: "Our AI analyzes colors, fonts, layout, and components automatically",
      icon: <Eye className="w-6 h-6" />
    },
    {
      step: 3,
      title: "Get Your Code",
      description: "Copy clean, production-ready code in React, Vue, or HTML",
      icon: <Code2 className="w-6 h-6" />
    }
  ];

  const features = [
    {
      title: "Supported File Types",
      items: [
        "PNG, JPG, JPEG images",
        "Figma design URLs",
        "Sketch file exports",
        "Adobe XD designs",
        "Web screenshots"
      ]
    },
    {
      title: "Output Formats",
      items: [
        "React components (JSX)",
        "Vue.js components",
        "HTML with CSS",
        "Tailwind CSS classes",
        "Semantic markup"
      ]
    },
    {
      title: "Analysis Features",
      items: [
        "Color palette extraction",
        "Font family detection",
        "Layout structure mapping",
        "Component identification",
        "Responsive breakpoints"
      ]
    }
  ];

  const faqs = [
    {
      question: "How accurate is the code generation?",
      answer: "Our AI achieves 95%+ accuracy in layout recreation and color matching. Complex designs may require minor adjustments, but the generated code provides an excellent starting point."
    },
    {
      question: "What frameworks are supported?",
      answer: "We generate code for React (with TypeScript), Vue.js 3, and vanilla HTML/CSS. All outputs use modern best practices and are production-ready."
    },
    {
      question: "Is there a limit on uploads?",
      answer: "No! DesignToCode is completely free with unlimited uploads and code generation. No account required, no hidden fees."
    },
    {
      question: "How do I handle complex animations?",
      answer: "Static designs are converted perfectly. For animations, we provide CSS transition classes and animation hooks that you can customize for your specific needs."
    },
    {
      question: "Can I customize the generated code?",
      answer: "Absolutely! The generated code is clean and well-structured, making it easy to modify. You can adjust styles, add functionality, or integrate with your existing codebase."
    },
    {
      question: "What about responsive design?",
      answer: "All generated code includes responsive breakpoints using Tailwind CSS. The layout automatically adapts to different screen sizes based on your design structure."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/30">
            📚 Documentation
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Everything You Need
            <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent"> to Get Started</span>
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Complete guides, tutorials, and API documentation to help you convert designs to code efficiently.
          </p>
          <div className="max-w-md mx-auto relative">
            <Input 
              placeholder="Search documentation..." 
              className="pl-10 bg-white/10 border-white/30 text-white placeholder:text-purple-200"
            />
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-200" />
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Quick Start Guide</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get up and running in under 3 minutes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {quickStart.map((item, index) => (
              <Card key={index} className="p-6 text-center relative">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-primary">{item.icon}</div>
                </div>
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
                {index < quickStart.length - 1 && (
                  <ChevronRight className="w-6 h-6 text-muted-foreground absolute -right-3 top-1/2 transform -translate-y-1/2 hidden md:block" />
                )}
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="default" onClick={() => window.location.href = '/'}>
              <Zap className="w-5 h-5" />
              Try It Now
            </Button>
          </div>
        </div>
      </section>

      {/* Features Documentation */}
      <section className="py-20 px-6 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Features Overview</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive breakdown of all platform capabilities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <ul className="space-y-3">
                  {feature.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* API Reference */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-6">Code Integration</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Learn how to integrate generated code into your projects
              </p>
              
              <div className="space-y-6">
                <Card className="p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Code2 className="w-5 h-5 text-primary" />
                    <h4 className="font-semibold">React Integration</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Import components directly into your React app with TypeScript support
                  </p>
                </Card>
                
                <Card className="p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Copy className="w-5 h-5 text-primary" />
                    <h4 className="font-semibold">Copy & Paste</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    One-click copy to clipboard for instant code integration
                  </p>
                </Card>
                
                <Card className="p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Download className="w-5 h-5 text-primary" />
                    <h4 className="font-semibold">File Download</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Download complete component files with dependencies
                  </p>
                </Card>
              </div>
            </div>
            
            <div>
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Sample Integration</h3>
                <pre className="text-sm bg-muted/50 p-4 rounded-lg overflow-x-auto">
{`// Install dependencies
npm install tailwindcss

// Import generated component
import { DesignComponent } from './components';

// Use in your app
function App() {
  return (
    <div className="app">
      <DesignComponent />
    </div>
  );
}`}
                </pre>
                <div className="mt-4 flex gap-2">
                  <Button size="sm" variant="outline">
                    <Copy className="w-4 h-4" />
                    Copy
                  </Button>
                  <Button size="sm" variant="outline">
                    <ExternalLink className="w-4 h-4" />
                    View Full Example
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about DesignToCode
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                    <HelpCircle className="w-4 h-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Need More Help?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Can't find what you're looking for? Get in touch with our support team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg" onClick={() => window.location.href = '/examples'}>
              <BookOpen className="w-5 h-5" />
              Browse Tutorials
            </Button>
            <Button variant="outline" size="lg" onClick={() => window.open('mailto:support@designtocode.com', '_blank')}>
              <ExternalLink className="w-5 h-5" />
              Contact Support
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Docs;