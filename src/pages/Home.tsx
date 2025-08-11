import { useState } from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { UploadArea } from '@/components/UploadArea';
import { AnalysisInterface } from '@/components/AnalysisInterface';

const Home = () => {
  const [designFile, setDesignFile] = useState<File | null>(null);
  const [designUrl, setDesignUrl] = useState<string>('');
  const [showAnalysis, setShowAnalysis] = useState(false);

  const handleFileUpload = (file: File) => {
    setDesignFile(file);
    setDesignUrl('');
    setShowAnalysis(true);
  };

  const handleUrlSubmit = (url: string) => {
    setDesignUrl(url);
    setDesignFile(null);
    setShowAnalysis(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {!showAnalysis ? (
        <>
          <HeroSection />
          <UploadArea 
            onFileUpload={handleFileUpload} 
            onUrlSubmit={handleUrlSubmit} 
          />
        </>
      ) : (
        <div className="pt-20">
          <AnalysisInterface 
            designFile={designFile || undefined}
            designUrl={designUrl || undefined}
          />
        </div>
      )}
    </div>
  );
};

export default Home;