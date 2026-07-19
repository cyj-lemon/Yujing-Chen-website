import { Mail, Wand2, School, Zap, Cpu, BarChart, Users } from 'lucide-react';
import type { FloatingTag } from '../types';

// 导入图片 - 使用 Vite 的 import 方式
import photo1 from '../assets/photo1.jpg';

// 获取动画类名
const getAnimationClass = (position: FloatingTag['position']): string => {
  switch (position) {
    case 'top-left':
      return 'animate-float';
    case 'top-right':
      return 'animate-float-delayed';
    case 'bottom-left':
      return 'animate-float-slow';
    default:
      return 'animate-float';
  }
};

// 获取位置样式
const getPositionStyles = (position: FloatingTag['position']): React.CSSProperties => {
  switch (position) {
    case 'top-left':
      return { top: '-5%', left: '0%' };
    case 'top-right':
      return { top: '8%', right: '-8%' };
    case 'bottom-left':
      return { bottom: '8%', left: '-5%' };
    default:
      return {};
  }
};

export default function HomeSection() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* 左侧内容 */}
          <div className="order-2 lg:order-1 space-y-6">
            {/* 简介 */}
            <p className="text-gray-500 text-base">东南大学软件工程硕士在读</p>

            {/* 姓名 */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-800 tracking-tight">
              陈雨靖
            </h1>

            {/* 定位 */}
            <p className="text-xl sm:text-2xl font-semibold text-gray-600">
              AI产品经理 · 计算机背景
            </p>

            {/* Slogan - 视觉强化：左边框+加粗放大 */}
            <div className="border-l-4 border-pink-500 pl-4 py-1">
              <p className="text-lg font-bold text-gray-600 leading-relaxed">
                做一个了解AI能力边界的产品经理，既拓展业务上限，又真正理解用户。
              </p>
            </div>

            {/* 第一排：教育背景 - 天空蓝系 */}
            <div className="pt-2">
              {/* 引导标题 */}
              <div className="flex items-center gap-1.5 mb-2">
                <School className="w-4 h-4 text-sky-500" />
                <span className="text-sm font-bold text-gray-900">教育背景</span>
              </div>
              {/* 标签 - 最大号 */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white text-sky-600 border border-gray-200 shadow-sm">
                  <span className="font-bold text-gray-900">东南大学</span>
                  <span className="text-gray-300 font-normal mx-1.5">|</span>
                  <span className="text-gray-900">硕士(</span>
                  <span className="font-normal text-gray-900">保研</span>
                  <span className="text-gray-900">)</span>
                </span>
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white text-sky-600 border border-gray-200 shadow-sm">
                  <span className="font-bold text-gray-900">合肥工业大学</span>
                  <span className="text-gray-300 font-normal mx-1.5">|</span>
                  <span className="font-normal text-gray-900">软件工程本科</span>
                </span>
              </div>
            </div>

            {/* 第二排：核心能力 - 丁香紫系 */}
            <div className="mt-4">
              {/* 引导标题 */}
              <div className="flex items-center gap-1.5 mb-2">
                <Zap className="w-4 h-4 text-purple-500" />
                <span className="text-sm font-bold text-gray-900">核心能力</span>
              </div>
              {/* 标签 - 中号 */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-bold bg-white text-gray-900 border border-gray-200 shadow-sm">
                  <Cpu className="w-4 h-4 text-blue-500" />
                  AI技术架构
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-bold bg-white text-gray-900 border border-gray-200 shadow-sm">
                  <Wand2 className="w-4 h-4 text-pink-500" />
                  Prompt Engineering
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-bold bg-white text-gray-900 border border-gray-200 shadow-sm">
                  <BarChart className="w-4 h-4 text-purple-500" />
                  评测体系
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-bold bg-white text-gray-900 border border-gray-200 shadow-sm">
                  <Users className="w-4 h-4 text-amber-500" />
                  用户洞察
                </span>
              </div>
            </div>

            {/* 第三排：奖项与比赛 - 暖金色系 */}
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-sm font-medium bg-amber-50 text-amber-700 border border-amber-200">
                校二等奖学金(连续三年)
              </span>
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-sm font-medium bg-amber-50 text-amber-700 border border-amber-200">
                全国互联网产品大赛省级金奖
              </span>
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-sm font-medium bg-amber-50 text-amber-700 border border-amber-200">
                大模型生成方向
              </span>
            </div>

            {/* 第四排：联系方式 */}
            <div className="pt-4">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-pink-100 to-rose-100 text-rose-700 shadow-sm border border-pink-200">
                <Mail className="w-5 h-5 text-rose-700" />
                <span className="font-medium">lemontea.Cyj@foxmail.com</span>
              </div>
            </div>
          </div>

          {/* 右侧：头像与悬浮标签 */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end lg:pr-16">
            <div className="relative">
              {/* 头像容器 - 正圆形 */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                <div className="w-full h-full rounded-full overflow-hidden shadow-2xl shadow-pink-200/50 bg-gradient-to-br from-pink-100 to-sky-100 border-4 border-white">
                  <img
                    src={photo1}
                    alt="陈雨靖"
                    className="w-full h-full object-cover rounded-full"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `
                          <div class="w-full h-full flex flex-col items-center justify-center text-gray-400 bg-gradient-to-br from-pink-50 to-sky-50">
                            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                            <span class="mt-4 text-sm">请上传个人照片</span>
                          </div>
                        `;
                      }
                    }}
                  />
                </div>

                {/* 悬浮标签 - 毛玻璃效果 + 动画 + 三色 */}
                <div
                  className={`absolute px-4 py-2 rounded-full text-sm font-bold bg-blue-500/80 backdrop-blur-md border border-blue-400/50 text-white shadow-md whitespace-nowrap flex items-center ${getAnimationClass('top-left')}`}
                  style={getPositionStyles('top-left')}
                >
                  多模态Agent
                </div>
                <div
                  className={`absolute px-4 py-2 rounded-full text-sm font-bold bg-rose-400/80 backdrop-blur-md border border-rose-300/50 text-white shadow-md whitespace-nowrap flex items-center ${getAnimationClass('top-right')}`}
                  style={getPositionStyles('top-right')}
                >
                  全栈产品思维
                </div>
                <div
                  className={`absolute px-4 py-2 rounded-full text-sm font-bold bg-violet-500/80 backdrop-blur-md border border-violet-400/50 text-white shadow-md whitespace-nowrap flex items-center ${getAnimationClass('bottom-left')}`}
                  style={getPositionStyles('bottom-left')}
                >
                  生成式AI/扩散模型
                </div>
              </div>

              {/* 装饰光晕 */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-pink-200/30 to-sky-200/30 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
