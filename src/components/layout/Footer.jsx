import { ArrowUp } from 'lucide-react';
import MagneticButton from '../common/MagneticButton';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full py-8 border-t border-white/5 mt-20">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-mono text-sm text-text/60">
          Designed & built by You · {new Date().getFullYear()}
        </p>
        
        <MagneticButton onClick={scrollToTop} className="group">
          <div className="flex items-center space-x-2 text-text/80 hover:text-accent transition-colors font-mono text-sm">
            <span>Back to top</span>
            <div className="p-2 rounded-full border border-white/10 group-hover:border-accent transition-colors">
              <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
            </div>
          </div>
        </MagneticButton>
      </div>
    </footer>
  );
}
