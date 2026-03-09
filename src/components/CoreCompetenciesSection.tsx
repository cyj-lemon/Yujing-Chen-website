import { 
  Brain, 
  Code2, 
  Eye, 
  Target,
} from 'lucide-react';

// 卡片数据配置
const competencyCards = [
  {
    id: 'algorithm',
    icon: Brain,
    title: '算法策略',
    description: '具备 SFT、RM/RL 训练数据构建经验，擅长意图判断与链路设计。',
    tags: ['SFT/RL', 'HF', '模型微调', '数据标注'],
    bgColor: 'bg-rose-50',
    iconColor: 'text-rose-500',
    borderColor: 'border-rose-100',
  },
  {
    id: 'engineering',
    icon: Code2,
    title: '工程落地',
    description: '熟练使用 Python (SQL)、C++ 及多智能体框架，具备 LoRA 微调实践经验。',
    tags: ['Python', 'C++', '多智能体Agent'],
    bgColor: 'bg-sky-50',
    iconColor: 'text-sky-500',
    borderColor: 'border-sky-100',
  },
  {
    id: 'user-insight',
    icon: Eye,
    title: '用户洞察',
    description: '结合心理学背景进行场景建模，提升 AI 主动性与情感价值。',
    tags: ['用户研究', '场景建模'],
    bgColor: 'bg-rose-50',
    iconColor: 'text-rose-500',
    borderColor: 'border-rose-100',
  },
  {
    id: 'evaluation',
    icon: Target,
    title: '评测体系',
    description: '沉淀评测方法论，量化主观体验，搭建自动化巡检的闭环流水线。',
    tags: ['评测', '设计自动化', '数据分析'],
    bgColor: 'bg-sky-50',
    iconColor: 'text-sky-500',
    borderColor: 'border-sky-100',
  },
];

export default function CoreCompetenciesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* 标题区域 */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            核心竞争力
          </h2>
          <p className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            技术深度与心理学洞察的交叉融合，构建真正理解用户的AI产品
          </p>
        </div>

        {/* 2x2 Grid 卡片区域 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {competencyCards.map((card) => {
            const IconComponent = card.icon;
            
            return (
              <div
                key={card.id}
                className={`
                  ${card.bgColor} 
                  ${card.borderColor}
                  rounded-2xl 
                  p-6 sm:p-8 
                  border 
                  transition-all 
                  duration-300 
                  ease-out
                  hover:-translate-y-1 
                  hover:shadow-rose-100
                  flex 
                  flex-col
                  min-h-[280px]
                `}
              >
                {/* 顶部：Icon + 标题 */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`
                    w-10 h-10 
                    rounded-xl 
                    bg-white/80 
                    flex 
                    items-center 
                    justify-center 
                    shadow-sm
                    ${card.iconColor}
                  `}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {card.title}
                  </h3>
                </div>

                {/* 中间：描述文字 */}
                <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                  {card.description}
                </p>

                {/* 底部：标签区域 */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {card.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="
                        px-3 py-1 
                        rounded-full 
                        text-xs 
                        font-medium
                        bg-white/70
                        text-gray-700
                        border border-white/50
                        backdrop-blur-sm
                      "
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
