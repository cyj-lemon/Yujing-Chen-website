import { GraduationCap, Target, Mail } from 'lucide-react';
import type { FloatingTag } from '../types';

// Floating tags data with positions
const floatingTags: FloatingTag[] = [
  { id: '1', text: '多模态/VLM', position: 'top-left' },
  { id: '2', text: '生成式AI/扩散模型', position: 'top-right' },
  { id: '3', text: 'RLHF/模型对齐', position: 'bottom-left' },
  { id: '4', text: '全栈产品思维', position: 'bottom-right' },
];

// Get animation class based on position
const getAnimationClass = (position: FloatingTag['position']): string => {
  switch (position) {
    case 'top-left':
      return 'animate-float';
    case 'top-right':
      return 'animate-float-delayed';
    case 'bottom-left':
      return 'animate-float-slow';
    case 'bottom-right':
      return 'animate-float-slower';
    default:
      return 'animate-float';
  }
};

// Get position styles for floating tags
const getPositionStyles = (position: FloatingTag['position']): React.CSSProperties => {
  const baseOffset = '-10%';
  switch (position) {
    case 'top-left':
      return { top: baseOffset, left: '-5%' };
    case 'top-right':
      return { top: '5%', right: '-5%' };
    case 'bottom-left':
      return { bottom: '10%', left: '0%' };
    case 'bottom-right':
      return { bottom: '5%', right: '-5%' };
    default:
      return {};
  }
};

export default function HomeSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 pb-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content - Text & Tags */}
          <div className="order-2 lg:order-1 space-y-6">
            {/* 1. 简介 */}
            <p className="text-gray-500 text-base">
              东南大学软件工程硕士在读
            </p>

            {/* 2. 姓名 */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-800 tracking-tight">
              陈雨靖
            </h1>

            {/* 3. 定位 */}
            <p className="text-xl sm:text-2xl font-semibold text-rose-500">
              AI产品经理 · 计算机背景
            </p>

            {/* 4. Slogan 占位符 */}
            <p className="text-gray-400 italic">
              做一个了解AI能力边界的产品经理，既拓展业务上限，又真正理解用户
            </p>

            {/* 5. 教育背景 */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <GraduationCap className="w-5 h-5 text-rose-400" />
              <span className="tag-solid">东南大学硕士 GPA 3.9/4.0</span>
              <span className="tag-solid">合肥工业大学软件工程本科 排名19/160</span>
            </div>

            {/* 6. 核心能力 */}
            <div className="flex flex-wrap items-center gap-3">
              <Target className="w-5 h-5 text-pink-400" />
              <span className="tag-outline">算法策略</span>
              <span className="tag-outline">工程落地</span>
              <span className="tag-outline">用户洞察</span>
              <span className="tag-outline">评测体系</span>
            </div>

            {/* 7. 荣誉与方向 */}
            <div className="flex flex-wrap gap-3">
              <span className="tag-soft">校二等奖学金(连续三年)</span>
              <span className="tag-soft">大模型生成方向</span>
              <span className="tag-soft">学业奖学金</span>
            </div>

            {/* 8. 底部邮箱 */}
            <div className="pt-4">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-rose-50 to-sky-50 border border-rose-100 text-gray-700">
                <Mail className="w-5 h-5 text-rose-400" />
                <span className="font-medium">lemontea.Cyj@foxmail.com</span>
              </div>
            </div>
          </div>

          {/* Right Content - Image & Floating Tags */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                {/* Image placeholder */}
                <div className="w-full h-full rounded-3xl overflow-hidden shadow-2xl shadow-rose-200/50 bg-gradient-to-br from-rose-100 to-sky-100 border-4 border-white">
                  <img
                    src="/photo1.jpg"
                    alt="陈雨靖"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // 图片加载失败时显示占位符
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `
                          <div class="w-full h-full flex flex-col items-center justify-center text-gray-400 bg-gradient-to-br from-rose-50 to-sky-50">
                            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                            <span class="mt-4 text-sm">请上传个人照片</span>
                          </div>
                        `;
                      }
                    }}
                  />
                </div>

                {/* Floating Tags */}
                {floatingTags.map((tag) => (
                  <div
                    key={tag.id}
                    className={`absolute floating-tag ${getAnimationClass(tag.position)}`}
                    style={getPositionStyles(tag.position)}
                  >
                    {tag.text}
                  </div>
                ))}
              </div>

              {/* Decorative elements */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-rose-200/30 to-sky-200/30 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
