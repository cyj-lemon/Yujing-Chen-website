import { useState, useEffect, useCallback } from 'react';
import { Menu, X, Mail, Check } from 'lucide-react';
import type { NavItem } from '../types';

const navItems: NavItem[] = [
  { id: 'home', label: '首页' },
  { id: 'projects', label: '工作项目' },
  { id: 'academic', label: '学术实践' },
  { id: 'skills', label: '技能' },
];

const EMAIL = 'lemontea.Cyj@foxmail.com';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copied'>('idle');

  // Handle scroll event for dynamic background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle email copy
  const handleCopyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopyStatus('copied');
      
      // Reset after 2 seconds
      setTimeout(() => {
        setCopyStatus('idle');
      }, 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
      // Fallback for browsers that don't support clipboard API
      const textArea = document.createElement('textarea');
      textArea.value = EMAIL;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopyStatus('copied');
      setTimeout(() => setCopyStatus('idle'), 2000);
    }
  }, []);

  // Smooth scroll to section
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
          isScrolled
            ? 'glass-nav py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left: Name and Nav Links */}
            <div className="flex items-center gap-8">
              {/* Name */}
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('home');
                }}
                className={`text-lg font-bold transition-colors duration-300 ${
                  isScrolled ? 'text-gray-800' : 'text-gray-800'
                } hover:text-rose-500`}
              >
                Yujing Chen
              </a>

              {/* Desktop Navigation Links */}
              <nav className="hidden md:flex items-center gap-6">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.id);
                    }}
                    className={`text-sm font-medium transition-colors duration-200 hover:text-rose-500 ${
                      isScrolled ? 'text-gray-600' : 'text-gray-600'
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Right: Contact Button (Desktop) */}
            <div className="hidden md:block">
              <button
                onClick={handleCopyEmail}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  copyStatus === 'copied'
                    ? 'bg-green-100 text-green-700 border border-green-300'
                    : 'bg-rose-100 text-rose-700 border border-rose-200 hover:bg-rose-200 hover:border-rose-300'
                }`}
              >
                {copyStatus === 'copied' ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>已复制邮箱，快来联系我吧</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-4 h-4" />
                    <span>联系我</span>
                  </>
                )}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-rose-50 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={`absolute top-[72px] left-4 right-4 bg-white rounded-2xl shadow-xl p-6 transition-all duration-300 ${
            isMobileMenuOpen
              ? 'translate-y-0 opacity-100'
              : '-translate-y-4 opacity-0'
          }`}
        >
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
                className="px-4 py-3 rounded-xl text-gray-700 font-medium hover:bg-rose-50 hover:text-rose-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Contact Button */}
          <div className="mt-4 pt-4 border-t border-gray-100">
            <button
              onClick={handleCopyEmail}
              className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                copyStatus === 'copied'
                  ? 'bg-green-100 text-green-700'
                  : 'bg-rose-100 text-rose-700 hover:bg-rose-200'
              }`}
            >
              {copyStatus === 'copied' ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>已复制邮箱，快来联系我吧</span>
                </>
              ) : (
                <>
                  <Mail className="w-4 h-4" />
                  <span>联系我 ({EMAIL})</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
