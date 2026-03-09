import { Link2, Clock, Target } from 'lucide-react';

// 技术栈标签
const techStack = [
  '多模态生成',
  'Diffusion-DiT',
  'Diffusion-DPO',
  'RoPE',
  'Python',
];

// 三大创新点数据
const innovations = [
  {
    icon: Link2,
    title: '语义特征深度融合',
    description: '引入 REG 机制，将文本风格 Token 与音频潜变量同步加噪，实现底层特征维度的精准纠缠，使目标风格精准嵌入旋律语义。',
    color: 'text-rose-500',
    bgColor: 'bg-rose-50',
  },
  {
    icon: Clock,
    title: '时序维度风格一致',
    description: '突破传统绝对位置编码限制，在 DiT 注意力模块中引入旋转位置嵌入 (RoPE)，保障长程序列音频生成中的横向时间轴稳定性。',
    color: 'text-pink-500',
    bgColor: 'bg-pink-50',
  },
  {
    icon: Target,
    title: 'Diffusion-DPO 偏好对齐',
    description: '无需引入强化学习奖励模型，通过对比学习直接优化偏好概率，解决少样本特征畸变，确立资源友好的风格迁移训练新范式。',
    color: 'text-rose-500',
    bgColor: 'bg-rose-50',
  },
];

export default function AcademicSection() {
  return (
    <section id="academic" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* 标题区域 */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            学术实践
          </h2>
          <p className="text-base sm:text-lg text-slate-500 max-w-3xl mx-auto leading-relaxed">
            聚焦多模态生成与大模型偏好对齐，探索前沿AI在音频领域的应用边界
          </p>
        </div>

        {/* 高光焦点卡片 */}
        <div className="max-w-5xl mx-auto">
          <div className="
            bg-white 
            rounded-2xl 
            border border-rose-50
            shadow-sm 
            hover:shadow-md
            transition-shadow 
            duration-300
            p-8 sm:p-12
          ">
            {/* Top: 课题属性与标题 */}
            <div className="mb-8">
              {/* 学校标签 - 玫瑰色 */}
              <span className="
                inline-block 
                px-3 py-1 
                rounded-lg 
                text-xs font-semibold
                bg-rose-100 
                text-rose-700
                mb-4
              ">
                东南大学硕士学位课题
              </span>

              {/* 大标题 */}
              <h3 className="
                text-2xl sm:text-3xl 
                font-bold 
                text-gray-800 
                leading-tight
                mb-5
              ">
                基于语义特征融合与直接偏好对齐的少样本音乐风格迁移框架
              </h3>

              {/* 技术栈标签云 */}
              <div className="flex flex-wrap gap-2">
                {techStack.map((tag, index) => (
                  <span
                    key={index}
                    className="
                      px-3 py-1 
                      rounded-full 
                      text-xs font-medium
                      border border-rose-200
                      text-rose-600
                      bg-rose-50/50
                    "
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Middle: 分割线 */}
            <div className="border-t border-gray-100 my-8" />

            {/* Bottom: 三大核心创新点 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {innovations.map((item, index) => {
                const IconComponent = item.icon;
                
                return (
                  <div key={index} className="flex flex-col">
                    {/* Icon + 标题 */}
                    <div className="flex items-start gap-3 mb-3">
                      <div className={`
                        w-10 h-10 
                        rounded-xl 
                        ${item.bgColor}
                        flex items-center justify-center
                        flex-shrink-0
                      `}>
                        <IconComponent className={`w-5 h-5 ${item.color}`} />
                      </div>
                      <h4 className={`
                        text-base font-bold 
                        ${item.color}
                        pt-2
                      `}>
                        {item.title}
                      </h4>
                    </div>
                    
                    {/* 正文描述 */}
                    <p className="text-sm text-gray-600 leading-relaxed pl-[52px]">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
