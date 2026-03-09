import { Rocket } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-t from-rose-50/50 to-transparent border-t border-rose-100/50">
      <div className="max-w-6xl mx-auto text-center space-y-3">
        {/* 第一行：核心声明 - 极客感 */}
        <div className="flex items-center justify-center gap-2 text-base font-semibold text-rose-600">
          <Rocket className="w-5 h-5" />
          <span>100% Built with AI Coding Assistants</span>
          <span className="text-gray-300 mx-1">|</span>
          <span>本网站由 AI 编程工具全栈生成，展现 AI 驱动的工程落地能力</span>
        </div>

        {/* 第二行：版权声明 */}
        <p className="text-sm text-gray-400">
          © {currentYear} Yujing Chen. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
