import { useState } from 'react';
import { ChevronDown, ChevronUp, Building2 } from 'lucide-react';

// 数据高亮函数：将数字指标加粗并着色 - 使用玫瑰色
function highlightMetrics(text: string): React.ReactNode {
  // 匹配模式：数字（包括百分比、小数、→等）
  const regex = /(\d+(?:\.\d+)?%?|\d+→\d+|90%\+)/g;
  const parts = text.split(regex);
  
  return parts.map((part, index) => {
    if (regex.test(part)) {
      return (
        <span key={index} className="font-bold text-rose-500">
          {part}
        </span>
      );
    }
    return part;
  });
}

// 项目类型定义
interface Project {
  title: string;
  background?: string;
  responsibilities: string[];
}

// 经历类型定义
interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  projects: Project[];
}

// 经历数据
const experiences: Experience[] = [
  {
    id: 'tencent',
    company: '腾讯',
    position: '微信-搜索策略产品',
    duration: '2025年11月- 至今',
    projects: [
      {
        title: '【电商搜索】微信小店流量增长与转化策略',
        background: '针对电商类搜索需求下小店转化率偏低现状，通过场景深挖探索微信小店更佳形态，提升搜索下单转化率等核心指标。',
        responsibilities: [
          '(1) 直播场景感知强化：针对小店直播转化率偏低问题，设计"直播动态大卡+右侧4商品"样式强化直播感知，通过AB优化实验后使小店曝光拉高4%、Query点击率+9%、支付数增长25%。下钻发现曝光点击率有0.3%微跌，小店与直播题材存在流量&消费置换，为平衡流量转化，推动"小店排序避让直播"策略优化用户体验；',
          '(2) 热词推荐策略构建：基于对竞品分析拆解，设计热词推荐作为促增长策略入口，基于badcase优化词源选取、引入热销品逻辑等出词策略，并上线AB实验，同时发现热词与公众号样式极易混淆，通过迭代"热词+热销品"差异化形态来强化感知；推动小店曝光有效点击率提升22%、相关商品支付数增长19%。归因异动指标-人均短点次数上涨40%。',
          '(3) 跨场景转化漏斗分析：对比直播大卡、热词、下挂商品在「综合搜索」与「视频号垂类搜索」的转化漏斗，明确综合搜索用户对公众号样式认知>直播形态，视频号用户对直播及商品图形态认知>纯文本。通过为后续差异化流量与展示策略提供方向支持，实现视频号垂搜强化商品视觉表达与直播承接。'
        ]
      },
      {
        title: '【视频号垂类搜索】搜索广告结果相关性优化策略',
        background: '视频号场景下用户需求伴随消费产生转移，优化广告短视频标准及小店搜索结果，提升电商消费体验满意度和转化率。',
        responsibilities: [
          '(1) 搜索结果广告匹配度调优：针对视频号用户在搜索结果中"低分广告高点击"现象，结构化拆解100+条分行业case，重新定义广告相关性0~3分的分层标准，设计广告应召与准出策略，建立可复用的广告评估框架，使用户搜索后的呈现结果匹配更精准；',
          '(2) 视频号小店混排策略优化：针对小店"高准低召"问题，结合三方评测体系拆解17条badcase，归因问题来源，牵引搜索算法修复高优问题，聚焦小店扩召、时效性内容打压机制、同名账号避让等策略，全量后召回率50%(+3%)，准确率80%(+1%)。'
        ]
      }
    ]
  },
  {
    id: 'meituan',
    company: '美团',
    position: '酒旅业务-增长功能产品',
    duration: '2025年04月- 2025年09月',
    projects: [
      {
        title: '打通点评与美团会员体系，强化意向uv支付转化漏斗',
        responsibilities: [
          '(1) 双平台会员体系打造：为降低用户在双平台的迁移成本，推动点评app首次接入美团大会员体系，协调对接19个研发团队资源，主持多轮跨部门需求评审，完善10+全链路交易页面同步引入会员折扣价，提升点评平台46%商家的价格竞争力；',
          '(2) 埋点数据指标拆解：梳理酒店供应链上下游，根据埋点指标设计灰度策略，预期将从页面访问到支付订单的转化率提升4.77%。'
        ]
      },
      {
        title: '优化交易下单链路用户体验，上线抽积分功能提升用户成交黏性',
        responsibilities: [
          '(1) 积分产品能力搭建：协调营销&玩法后台等团队完成优先级排期，推动抽奖后台系统、积分库存告警等产品能力快速落地；',
          '(2) 独立完成OTA交易链路竞品分析，分析拆解履约率等关键指标，通过解决交易流程内信息传递不一致问题，降低客诉30%。'
        ]
      }
    ]
  },
  {
    id: 'xiaomi',
    company: '小米',
    position: 'cloudML-AI大模型平台产品',
    duration: '2024年03月- 2024年07月',
    projects: [
      {
        title: 'AI大模型平台产品',
        responsibilities: [
          '(1) 评测体系0→1搭建：参与大模型评测体系架构的构建，独立输出10+平台的竞品分析报告，构建3类评测集标准化方案，推进模型推理评测任务配置、动态评估打分等核心功能上线，支持准确率、响应延迟等15+评估指标，覆盖主流大模型评测场景；',
          '(2) 全链路效能提升：协助完成主流大模型（含Llama2-13B、Qwen-7B等）的连续性测试分析，助力算法团队对模型的持续调优；',
          '(3) AI资源看板策略设计：主导自驾AI资源监控数据看板0→1建设，基于预加载筛选+文本关联动态渲染等方案，构建覆盖显存/GPU等24类资源监控指标体系，协调算法/研发团队推动功能落地，用户满意度90%+，支撑部门资源利用率分析决策。'
        ]
      }
    ]
  }
];

export default function WorkExperienceSection() {
  // 默认展开腾讯（第一个）
  const [expandedId, setExpandedId] = useState<string>('tencent');

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? '' : id);
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
      <div className="max-w-5xl mx-auto">
        {/* 标题区域 */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
            工作项目
          </h2>
          <p className="text-base sm:text-lg text-slate-500 max-w-4xl mx-auto leading-relaxed">
            具备3段大厂产品实习经历，覆盖腾讯微信、美团App、小米AI，涉猎策略产品、增长产品、AI产品方向，在多个核心产品项目中拿到过正反馈结果，掌握扎实的业务需求洞察理解和产品增长策略输出能力。
          </p>
        </div>

        {/* 时间轴容器 */}
        <div className="relative">
          {/* 左侧时间轴线 - 玫瑰色渐变 */}
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-rose-200 via-pink-200 to-sky-200"></div>

          {/* 经历列表 */}
          <div className="space-y-6">
            {experiences.map((exp) => {
              const isExpanded = expandedId === exp.id;
              
              return (
                <div key={exp.id} className="relative pl-12 sm:pl-16">
                  {/* 时间轴节点 - 玫瑰色 */}
                  <div className={`
                    absolute left-2 sm:left-4 top-6 
                    w-4 h-4 rounded-full 
                    border-2 border-white 
                    shadow-md
                    transition-colors duration-300
                    ${isExpanded ? 'bg-rose-500' : 'bg-rose-300'}
                  `} />

                  {/* 卡片 */}
                  <div className={`
                    rounded-2xl 
                    overflow-hidden
                    border
                    transition-all duration-300
                    ${isExpanded 
                      ? 'bg-rose-50/30 border-rose-100 shadow-md' 
                      : 'bg-white border-gray-100 shadow-sm hover:shadow-md'
                    }
                  `}>
                    {/* Header - 始终可见 */}
                    <button
                      onClick={() => toggleExpand(exp.id)}
                      className="w-full px-5 py-5 sm:px-6 sm:py-5 flex items-center justify-between text-left"
                    >
                      <div className="flex-1 min-w-0">
                        {/* 公司名称 + 职位 */}
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                          <div className="flex items-center gap-2">
                            <Building2 className="w-5 h-5 text-rose-400 flex-shrink-0" />
                            <span className="text-lg font-bold text-gray-800">
                              {exp.company}
                            </span>
                          </div>
                          <span className="hidden sm:block text-gray-300">|</span>
                          <span className="text-base text-gray-600">
                            {exp.position}
                          </span>
                        </div>
                        
                        {/* 时间 - 移动端折行 */}
                        <p className="text-sm text-gray-400 mt-1 sm:mt-0 sm:absolute sm:right-16 sm:top-1/2 sm:-translate-y-1/2">
                          {exp.duration}
                        </p>
                      </div>

                      {/* Chevron Icon */}
                      <div className="ml-4 flex-shrink-0">
                        {isExpanded ? (
                          <ChevronUp className="w-5 h-5 text-rose-400" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-400" />
                        )}
                      </div>
                    </button>

                    {/* Body - 展开后可见 */}
                    <div className={`
                      overflow-hidden transition-all duration-300 ease-in-out
                      ${isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}
                    `}>
                      <div className="px-5 pb-6 sm:px-6 sm:pb-8 space-y-6">
                        {exp.projects.map((project, pIndex) => (
                          <div key={pIndex} className="space-y-3">
                            {/* 项目标题 - 带左侧玫瑰色强调边框 */}
                            <h4 className="text-base font-bold text-rose-600 border-l-4 border-rose-400 pl-3">
                              {project.title}
                            </h4>
                            
                            {/* 项目背景 */}
                            {project.background && (
                              <p className="text-sm text-gray-500 italic pl-4">
                                背景：{project.background}
                              </p>
                            )}
                            
                            {/* 核心工作列表 */}
                            <ul className="space-y-2 pl-4">
                              {project.responsibilities.map((resp, rIndex) => (
                                <li 
                                  key={rIndex} 
                                  className="text-sm text-gray-700 leading-relaxed flex items-start gap-2"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 flex-shrink-0" />
                                  <span>{highlightMetrics(resp)}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
