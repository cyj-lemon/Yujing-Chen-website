import { Brain, Code2, Eye, Target } from 'lucide-react';

// 卡片数据 - 四个独立色系（带高级装饰配置）
const competencyCards = [
  {
    id: 'algorithm',
    icon: Brain,
    title: 'AI技术架构',
    description: '关注 AI 行业动态，熟悉 Harness、Agentic RL 等主流 AI 技术架构与应用逻辑，了解 Post-training 与 AI 算法常识。',
    tags: ['Harness', 'Agentic RL', 'Post-training', 'AI算法'],
    theme: {
      topLine: 'bg-gradient-to-r from-blue-400 to-sky-300',
      iconBg: 'bg-blue-50',
      icon: 'text-blue-500',
      watermark: 'text-blue-900',
      tagBg: 'bg-blue-50',
      tagText: 'text-gray-900',
      tagBorder: 'border-blue-100/50',
    },
  },
  {
    id: 'engineering',
    icon: Code2,
    title: 'AI工程交付',
    description: '工作中产出多个 Skills 供业务使用，拥有丰富的 Vibe Coding 与 Prompt Engineering 实践经验，善于利用前沿 AI 生态工具快速实现业务交付。',
    tags: ['Skills', 'Vibe Coding', 'Prompt Engineering'],
    theme: {
      topLine: 'bg-gradient-to-r from-teal-400 to-emerald-300',
      iconBg: 'bg-teal-50',
      icon: 'text-teal-500',
      watermark: 'text-teal-900',
      tagBg: 'bg-teal-50',
      tagText: 'text-gray-900',
      tagBorder: 'border-teal-100/50',
    },
  },
  {
    id: 'user-insight',
    icon: Eye,
    title: '用户洞察',
    description: '结合用户增长实践经验进行策略设计，探索AI在增长方向的业务潜力。',
    tags: ['用户研究', '增长策略'],
    theme: {
      topLine: 'bg-gradient-to-r from-pink-400 to-rose-300',
      iconBg: 'bg-pink-50',
      icon: 'text-pink-500',
      watermark: 'text-pink-900',
      tagBg: 'bg-pink-50',
      tagText: 'text-gray-900',
      tagBorder: 'border-pink-100/50',
    },
  },
  {
    id: 'evaluation',
    icon: Target,
    title: '评测体系',
    description: '评测体系0→1搭建，设计模型推理评测模块核心架构，覆盖主流大模型评测场景。',
    tags: ['评测指标', '动态评估', '策略迭代'],
    theme: {
      topLine: 'bg-gradient-to-r from-indigo-400 to-violet-300',
      iconBg: 'bg-indigo-50',
      icon: 'text-indigo-500',
      watermark: 'text-indigo-900',
      tagBg: 'bg-indigo-50',
      tagText: 'text-gray-900',
      tagBorder: 'border-indigo-100/50',
    },
  },
];

export default function CoreCompetenciesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* 标题区域 */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            核心竞争力
          </h2>
          <p className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            AI边界与用户体验的交叉融合，构建真正理解用户的AI产品
          </p>
        </div>

        {/* 2x2 Grid 卡片区域 - 紧凑布局 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {competencyCards.map((card) => {
            const IconComponent = card.icon;
            const t = card.theme;
            
            return (
              <div
                key={card.id}
                className="relative overflow-hidden bg-white rounded-2xl border border-gray-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group p-5"
              >
                {/* 顶部渐变彩色线 */}
                <div className={`absolute top-0 left-0 w-full h-1 ${t.topLine}`} />

                {/* 背景水印大图标 */}
                <IconComponent
                  className={`absolute -right-4 -bottom-4 w-24 h-24 ${t.watermark} opacity-5 transform group-hover:scale-110 transition-transform duration-500 pointer-events-none`}
                />

                {/* 顶部：Icon + 标题 - 紧凑间距 */}
                <div className="flex items-center gap-3 mb-2">
                  <div className={`p-2.5 rounded-xl ${t.iconBg} ${t.icon}`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-gray-800 font-bold text-lg">{card.title}</h3>
                </div>

                {/* 中间：描述文字 */}
                <p className="text-gray-500 text-sm leading-snug mb-3">
                  {card.description}
                </p>

                {/* 底部：标签区域 - 同色系 */}
                <div className="flex flex-wrap gap-2">
                  {card.tags.map((tag, index) => (
                    <span
                      key={index}
                      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${t.tagBg} ${t.tagText} ${t.tagBorder}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
