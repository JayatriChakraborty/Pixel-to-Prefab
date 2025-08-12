import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Eye, Monitor, Smartphone, Tablet, X, RefreshCw } from 'lucide-react';

interface LivePreviewProps {
  code: string;
  framework: 'html' | 'react' | 'vue';
}

export const LivePreview = ({ code, framework }: LivePreviewProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  // Convert code to HTML for iframe rendering
  const getPreviewHtml = () => {
    if (framework === 'html') {
      return code;
    }
    
    if (framework === 'react') {
      // For demo purposes, convert React JSX to HTML
      return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Live Preview</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
      body { margin: 0; padding: 0; }
    </style>
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
</html>`;
    }
    
    // For Vue, also convert to HTML for demo
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Live Preview</title>
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
</html>`;
  };

  const getViewportDimensions = () => {
    switch (viewMode) {
      case 'mobile':
        return { width: '375px', height: '667px' };
      case 'tablet':
        return { width: '768px', height: '1024px' };
      default:
        return { width: '100%', height: '600px' };
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="lg">
          <Eye className="w-5 h-5" />
          Preview Live Code
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-6xl h-[90vh]">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <DialogTitle className="text-xl">Live Preview</DialogTitle>
              <Badge variant="secondary" className="capitalize">{framework}</Badge>
            </div>
            <div className="flex items-center gap-2">
              {/* Viewport Controls */}
              <div className="flex items-center gap-1 border rounded-lg p-1">
                <Button
                  variant={viewMode === 'desktop' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('desktop')}
                  className="p-2"
                >
                  <Monitor className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === 'tablet' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('tablet')}
                  className="p-2"
                >
                  <Tablet className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === 'mobile' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('mobile')}
                  className="p-2"
                >
                  <Smartphone className="w-4 h-4" />
                </Button>
              </div>
              <Button variant="outline" size="sm">
                <RefreshCw className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </DialogHeader>
        
        <div className="flex-1 border rounded-lg overflow-hidden bg-muted">
          <div className="h-full flex items-center justify-center p-4">
            <div 
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300"
              style={getViewportDimensions()}
            >
              <iframe
                srcDoc={getPreviewHtml()}
                className="w-full h-full border-0"
                title="Live Preview"
                sandbox="allow-scripts"
              />
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Eye className="w-4 h-4" />
            Live preview of your generated {framework.toUpperCase()} code
          </div>
          <div className="text-sm text-muted-foreground">
            {viewMode === 'desktop' ? 'Desktop View' : 
             viewMode === 'tablet' ? 'Tablet View (768px)' : 
             'Mobile View (375px)'}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};