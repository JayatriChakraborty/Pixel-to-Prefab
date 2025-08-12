import { useState, useCallback } from 'react';
import { Upload, Image, Link, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

interface UploadAreaProps {
  onFileUpload: (file: File) => void;
  onUrlSubmit: (url: string) => void;
}

export const UploadArea = ({ onFileUpload, onUrlSubmit }: UploadAreaProps) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [url, setUrl] = useState('');
  const [mode, setMode] = useState<'upload' | 'url'>('upload');
  const { toast } = useToast();

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const files = Array.from(e.dataTransfer.files);
    const imageFile = files.find(file => file.type.startsWith('image/'));
    
    if (imageFile) {
      onFileUpload(imageFile);
    } else {
      toast({
        title: "Invalid file",
        description: "Please upload an image file (PNG, JPG, SVG, etc.)",
        variant: "destructive",
      });
    }
  }, [onFileUpload, toast]);

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onFileUpload(file);
    }
  };

  const handleUrlSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (url.trim()) {
      if (isValidUrl(url.trim())) {
        onUrlSubmit(url.trim());
        setUrl('');
        toast({
          title: "Design URL submitted!",
          description: "Starting analysis...",
        });
      } else {
        toast({
          title: "Invalid URL",
          description: "Please enter a valid URL",
          variant: "destructive",
        });
      }
    }
  }, [url, onUrlSubmit, toast]);

  const isValidUrl = (string: string) => {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  };

  return (
    <section id="upload" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Upload Your Design</h2>
          <p className="text-lg text-muted-foreground">
            Drop an image or paste a design URL to get started
          </p>
        </div>

        {/* Mode Toggle */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-secondary rounded-lg p-1">
            <Button
              variant={mode === 'upload' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setMode('upload')}
              className="rounded-md"
            >
              <Image className="w-4 h-4" />
              Upload Image
            </Button>
            <Button
              variant={mode === 'url' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setMode('url')}
              className="rounded-md"
            >
              <Link className="w-4 h-4" />
              Design URL
            </Button>
          </div>
        </div>

        {mode === 'upload' ? (
          /* Upload Area */
          <div
            className={`relative border-2 border-dashed rounded-xl p-12 text-center transition-all duration-300 ${
              isDragOver
                ? 'border-primary bg-primary/5 scale-105'
                : 'border-muted hover:border-primary/50 hover:bg-primary/2'
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Upload className="w-8 h-8 text-primary" />
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Drop your design here</h3>
                <p className="text-muted-foreground mb-4">
                  Or click to browse your files
                </p>
                <p className="text-sm text-muted-foreground">
                  Supports PNG, JPG, SVG, Figma screenshots, and more
                </p>
              </div>

              <Button variant="outline" size="lg" className="mt-4">
                <Upload className="w-4 h-4" />
                Choose File
              </Button>

              <input
                type="file"
                accept="image/*"
                onChange={handleFileInput}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
            </div>
          </div>
        ) : (
          /* URL Input */
          <form onSubmit={handleUrlSubmit} className="max-w-2xl mx-auto">
            <div className="flex gap-3">
              <Input
                type="url"
                placeholder="https://dribbble.com/shots/... or any design URL"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="flex-1 h-12 text-base"
              />
              <Button type="submit" variant="hero" size="lg" disabled={!url.trim()}>
                Analyze Design
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-3 text-center">
              Paste links from Dribbble, Behance, Figma, or any image URL
            </p>
          </form>
        )}
      </div>
    </section>
  );
};