import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Copy, Check, Download, Eye, Code, Palette, Type, Layout, Upload } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface AnalysisInterfaceProps {
  designFile?: File;
  designUrl?: string;
}

export const AnalysisInterface = ({ designFile, designUrl }: AnalysisInterfaceProps) => {
  const [isAnalyzing, setIsAnalyzing] = useState(true);
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'html' | 'react' | 'vue'>('react');
  const { toast } = useToast();

  // Simulated analysis process
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnalyzing(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // Simulated generated code
  const generatedCode = {
    html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Generated Design</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
    <div class="min-h-screen bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center p-6">
        <div class="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
            <h1 class="text-2xl font-bold text-gray-900 mb-4">Welcome Back</h1>
            <p class="text-gray-600 mb-6">Sign in to your account</p>
            <form class="space-y-4">
                <input type="email" placeholder="Email" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500">
                <input type="password" placeholder="Password" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500">
                <button class="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700">Sign In</button>
            </form>
        </div>
    </div>
</body>
</html>`,
    react: `import React from 'react';

const LoginCard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Welcome Back</h1>
        <p className="text-gray-600 mb-6">Sign in to your account</p>
        <form className="space-y-4">
          <input 
            type="email" 
            placeholder="Email" 
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
          />
          <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginCard;`,
    vue: `<template>
  <div class="min-h-screen bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center p-6">
    <div class="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
      <h1 class="text-2xl font-bold text-gray-900 mb-4">Welcome Back</h1>
      <p class="text-gray-600 mb-6">Sign in to your account</p>
      <form @submit.prevent="handleSubmit" class="space-y-4">
        <input 
          v-model="email"
          type="email" 
          placeholder="Email" 
          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
        />
        <input 
          v-model="password"
          type="password" 
          placeholder="Password" 
          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
        />
        <button class="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
          Sign In
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    handleSubmit() {
      // Handle form submission
    }
  }
}
</script>`
  };

  const analysisResults = {
    colors: ['#8B5CF6', '#3B82F6', '#FFFFFF', '#1F2937', '#6B7280'],
    fonts: ['Inter', 'Helvetica', 'Arial'],
    components: ['Card', 'Input', 'Button', 'Gradient Background'],
    framework: 'Tailwind CSS'
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatedCode[activeTab]);
      setCopied(true);
      toast({
        title: "Code copied!",
        description: "The code has been copied to your clipboard.",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Copy failed",
        description: "Please select and copy the code manually.",
        variant: "destructive",
      });
    }
  };

  if (isAnalyzing) {
    return (
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <Card className="p-12 text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Eye className="w-8 h-8 text-primary animate-pulse" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Analyzing Your Design</h3>
            <p className="text-muted-foreground mb-8">
              Our AI is examining colors, typography, layout, and components...
            </p>
            <div className="space-y-3 max-w-md mx-auto">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                <span className="text-sm">Detecting color palette</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <span className="text-sm">Analyzing typography</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <span className="text-sm">Mapping layout structure</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                <span className="text-sm">Generating code</span>
              </div>
            </div>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Analysis Complete!</h2>
          <p className="text-lg text-muted-foreground">
            Here's your pixel-perfect code generated from the design
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Analysis Results */}
          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-6">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Palette className="w-5 h-5" />
                Design Analysis
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-3 flex items-center gap-2">
                    <Palette className="w-4 h-4" />
                    Color Palette
                  </h4>
                  <div className="flex gap-2 flex-wrap">
                    {analysisResults.colors.map((color, index) => (
                      <div
                        key={index}
                        className="w-8 h-8 rounded-lg border border-border shadow-sm"
                        style={{ backgroundColor: color }}
                        title={color}
                      ></div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-3 flex items-center gap-2">
                    <Type className="w-4 h-4" />
                    Typography
                  </h4>
                  <div className="space-y-2">
                    {analysisResults.fonts.map((font, index) => (
                      <Badge key={index} variant="secondary">{font}</Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-3 flex items-center gap-2">
                    <Layout className="w-4 h-4" />
                    Components
                  </h4>
                  <div className="space-y-2">
                    {analysisResults.components.map((component, index) => (
                      <Badge key={index} variant="outline">{component}</Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-3 flex items-center gap-2">
                    <Code className="w-4 h-4" />
                    Framework
                  </h4>
                  <Badge variant="default">{analysisResults.framework}</Badge>
                </div>
              </div>
            </Card>
          </div>

          {/* Code Output */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden">
              {/* Code Tabs */}
              <div className="border-b bg-muted/50 px-6 py-3">
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {(['html', 'react', 'vue'] as const).map((tab) => (
                      <Button
                        key={tab}
                        variant={activeTab === tab ? 'default' : 'ghost'}
                        size="sm"
                        onClick={() => setActiveTab(tab)}
                        className="capitalize"
                      >
                        {tab}
                      </Button>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={copyToClipboard}
                      className="flex items-center gap-2"
                    >
                      {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      {copied ? 'Copied!' : 'Copy'}
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4" />
                      Download
                    </Button>
                  </div>
                </div>
              </div>

              {/* Code Content */}
              <div className="relative">
                <pre className="p-6 overflow-x-auto text-sm bg-background border-0">
                  <code className="language-javascript text-foreground">
                    {generatedCode[activeTab]}
                  </code>
                </pre>
              </div>
            </Card>

            {/* Actions */}
            <div className="mt-6 flex gap-4 justify-center">
              <Button variant="hero" size="lg">
                <Upload className="w-5 h-5" />
                Analyze Another Design
              </Button>
              <Button variant="outline" size="lg">
                <Eye className="w-5 h-5" />
                Preview Live Code
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};