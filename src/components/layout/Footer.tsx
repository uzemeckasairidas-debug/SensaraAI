import { Link } from 'react-router-dom';
import { Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-xl font-semibold text-white">Sensara AI</span>
            </Link>
            <p className="text-white/60 max-w-sm leading-relaxed">
              Intelligent AI systems for high-growth enterprises. Automate patient acquisition,
              lead management, and complex workflows.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Solutions</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/solutions/dental" className="text-white/60 hover:text-white transition-colors">
                  Dental & Medical
                </Link>
              </li>
              <li>
                <Link to="/#solutions" className="text-white/60 hover:text-white transition-colors">
                  Custom Automation
                </Link>
              </li>
              <li>
                <Link to="/#process" className="text-white/60 hover:text-white transition-colors">
                  Our Process
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-white/60">
                <Mail className="w-4 h-4" />
                hello@sensara.ai
              </li>
              <li className="flex items-center gap-2 text-white/60">
                <MapPin className="w-4 h-4" />
                Vilnius, Lithuania
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            {new Date().getFullYear()} Sensara AI. All rights reserved.
          </p>
          <div className="flex gap-6 text-white/40 text-sm">
            <Link to="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
