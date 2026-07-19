import { Terminal, Sparkles, PenTool, Check } from 'lucide-react';

// 技能卡片数据
const skillCards = [
  {
    id: 'programming',
    icon: Terminal,
    title: '编程与 AI 开发',
    iconBgColor: 'bg-pink-50',
    iconColor: 'text-pink-500',
    skills: [
      '扎实的全栈 Web 开发能力 (React, Tailwind CSS, Flask)，能快速构建验证型 MVP。',
      '深入理解 Transformer 原理与 Agent 智能体框架，熟悉应用架构设计。',
      '熟悉强化学习对齐算法 (PPO, DPO, GRPO) 等底层逻辑，洞悉模型能力边界。',
      '熟练使用前沿 AI 编程助手 (Kimi Code, Trae, Cursor 等) 实现高效开发与落地。',
    ],
  },
  {
    id: 'ai-tools',
    icon: Sparkles,
    title: 'AI 工具效率栈',
    iconBgColor: 'bg-pink-50',
    iconColor: 'text-pink-500',
    skills: [
      '熟练使用 ChatGPT/Claude ，擅长 Prompt框架 编写、逻辑重构与自动化工作流设计。',
      '熟练使用图像生成工具 (Nano Banana 等) 辅助视觉表达。',
      '拥有极强的信息敏锐度，持续追踪大语言模型 (LLM) 前沿热点与多模态技术发展趋势。',
    ],
  },
  {
    id: 'pm-core',
    icon: PenTool,
    title: '产品经理核心功底',
    iconBgColor: 'bg-pink-50',
    iconColor: 'text-pink-500',
    skills: [
      '熟练使用墨刀 (Modao)、Penpot、 Figma 等高保真原型设计与协同工具。',
      '具备扎实的竞品分析、PRD 需求文档撰写及复杂业务流程梳理能力。',
      '从用户需求出发，结合 AI 技术与产品应用场景，完成场景化产品的设计与创新。',
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
      <div className="max-w-6xl mx-auto">
        {/* 标题区域 */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            技能与工具
          </h2>
          <p className="text-base sm:text-lg text-slate-500 max-w-3xl mx-auto leading-relaxed">
            跨界融合产品思维、开发能力与前沿 AI 效率工具
          </p>
        </div>

        {/* 三列技能卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCards.map((card) => {
            const IconComponent = card.icon;
            
            return (
              <div
                key={card.id}
                className="
                  bg-white
                  rounded-xl
                  border border-pink-50
                  p-6 sm:p-8
                  shadow-sm
                  hover:shadow-lg
                  hover:-translate-y-1
                  transition-all
                  duration-300
                  ease-out
                "
              >
                {/* Icon 容器 */}
                <div className="mb-6">
                  <div className={`
                    w-14 h-14
                    rounded-full
                    ${card.iconBgColor}
                    flex items-center justify-center
                  `}>
                    <IconComponent className={`w-7 h-7 ${card.iconColor}`} />
                  </div>
                </div>

                {/* 标题 */}
                <h3 className="text-lg font-bold text-gray-800 mb-5">
                  {card.title}
                </h3>

                {/* 技能列表 - 增加行高 leading-relaxed */}
                <ul className="space-y-4">
                  {card.skills.map((skill, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-sm text-gray-600 leading-relaxed"
                    >
                      <Check className="w-4 h-4 text-pink-400 mt-0.5 flex-shrink-0" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
