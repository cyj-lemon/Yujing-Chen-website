import { useState } from 'react';
import { ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';
import tencentLogo from '../assets/tencent-logo.png';
import meituanLogo from '../assets/meituan-logo.png';
import xiaomiLogo from '../assets/xiaomi-logo.png';

// 颜色主题配置
type ThemeConfig = {
  cardBg: string;
  cardBorder: string;
  valueGradient: string;
};

const themes: Record<string, ThemeConfig> = {
  tencent: {
    cardBg: 'bg-rose-50/50',
    cardBorder: 'border-rose-100',
    valueGradient: 'from-pink-400 to-rose-300',
  },
  meituan: {
    cardBg: 'bg-emerald-50/50',
    cardBorder: 'border-emerald-100',
    valueGradient: 'from-emerald-400 to-teal-400',
  },
  xiaomi: {
    cardBg: 'bg-amber-50/50',
    cardBorder: 'border-amber-100',
    valueGradient: 'from-amber-400 to-orange-400',
  },
};

// 数据标签类型 - 三段式复合结构
type DataTag = {
  desc: string;     // 第一行：描述维度
  value: string;    // 第二行：大数字
  suffix: string;   // 第二行：后缀/辅助说明
};

// 项目类型定义
interface Project {
  title: string;
  background?: string;
  points: string[];
  tags: DataTag[];
  label?: string;   // 标题右侧标签
}

// 经历类型定义
interface Experience {
  id: string;
  company: string;
  logo: string;
  position: string;
  duration: string;
  projects: Project[];
  theme: string;    // 主题标识
}

// 经历数据 - 重构为三段式数据标签结构
const experiences: Experience[] = [
  {
    id: 'tencent',
    company: '腾讯',
    logo: tencentLogo,
    position: '微信-AI搜索商业化策略产品',
    duration: '2025年11月- 至今',
    theme: 'tencent',
    projects: [
      {
        title: '【视频号搜索】AI驱动广告意图识别与召回策略重构',
        background: '视频号场景下，通过对用户意图识别扩展，构建自动化 Query-广告关联打分体系，提升商业化变现效率。',
        points: [
          '搭建大模型离线意图挖掘架构：构建“低分高 CTR”广告数据集，结合轻量级广告模型与前序信号，优化用户 Query 意图识别扩展能力；离线挖掘推理广告标签并存入离线 KV 数据库，支持广告库随机向量检索匹配、相似性计算和用户实时搜索调用。',
          '重构短视频广告评测标准：通过 Query 分层抽样，结合广告后验 CVR 与负反馈，利用大模型改写重构广告相关性 0~3 分标准，牵引优选广告召回与准出策略，建立可复用的广告评估框架；设计多重规则校验大模型幻觉，平衡用户体验与商业化收入。',
        ],
        tags: [
          { desc: '意图挖掘架构', value: '0→1', suffix: '搭建' },
          { desc: '广告相关性标准', value: '0~3分', suffix: '重构' },
          { desc: '广告评估框架', value: '可复用', suffix: '建立' },
        ],
        label: 'AI意图识别',
      },
      {
        title: '【搜推全链路出词】搜索Query商业化提收策略',
        background: '在搜推全链路场景，提升高商业价值 Query 的分发规模及流量占比，挖掘潜在广告提收空间。',
        points: [
          '大模型出词扩召：针对 hint 高 CVR 特性，落地 LLM 横向扩召策略，引入个性化商业召回因子，优化大模型过召与幻觉问题。AB 实验达成搜索量级和收入双提升，人均 hint QV +10.55%，广告可视曝光数增长 0.89%，收入稳定提升 1.22%，已全量。',
          'sug 广告推荐词迭代：针对商业化 sug 词条“提权则干扰用户体验，降排序则收入下跌”的困境，通过避让用户关键需求、引入分钟级广告时效信号，确保广告全链路漏斗提升。上线后无损用户体验，广告填充率 +5%，有效曝光数 +0.61%，人均点击 PV +1.06%，收入提升 2.03%，已全量。',
        ],
        tags: [
          { desc: '人均 hint QV', value: '+10.55%', suffix: '提升' },
          { desc: 'LLM策略收入', value: '+1.22%', suffix: '提升' },
          { desc: '广告填充率', value: '+5%', suffix: '提升' },
          { desc: '有效曝光数', value: '+0.61%', suffix: '提升' },
          { desc: '人均点击 PV', value: '+1.06%', suffix: '提升' },
          { desc: 'sug策略收入', value: '+2.03%', suffix: '提升' },
        ],
        label: '商业化提收',
      },
      {
        title: '【电商搜索】微信小店流量增长与转化策略',
        background: '针对电商类搜索需求下小店转化率偏低现状，通过探索微信小店更佳形态，提升搜索下单转化率等核心指标。',
        points: [
          '直播流量转化策略：针对小店直播转化率偏低问题，设计“直播动态大卡+右侧4商品”样式强化直播感知。AB 实验优化后小店曝光拉高 4%、CTR +9%、支付数增长 25%；下钻发现小店与直播题材存在流量和消费置换，进一步优化排序策略以平衡流量转化。',
          '热词推荐增长策略：基于竞品分析拆解，将热词推荐设计为增长策略入口，通过优化词源选取、引入热销品逻辑等出词策略上线 AB 实验；针对热词与公众号样式易混淆问题，迭代“热词+热销品”差异化形态强化感知。推动小店曝光有效点击率提升 22%、相关商品支付数增长 19%，并归因异动指标人均短点次数上涨 40%。',
        ],
        tags: [
          { desc: '小店曝光', value: '+4%', suffix: '提升' },
          { desc: '直播样式 CTR', value: '+9%', suffix: '提升' },
          { desc: '直播样式支付数', value: '+25%', suffix: '增长' },
          { desc: '曝光有效点击率', value: '+22%', suffix: '提升' },
          { desc: '相关商品支付数', value: '+19%', suffix: '增长' },
          { desc: '人均短点次数', value: '+40%', suffix: '异动归因' },
        ],
        label: '增长转化',
      },
    ],
  },
  {
    id: 'meituan',
    company: '美团',
    logo: meituanLogo,
    position: '酒旅业务-用户增长产品',
    duration: '2025年04月- 2025年09月',
    theme: 'meituan',
    projects: [
      {
        title: '打通点评&美团会员体系，提升意向uv支付转化率',
        points: [
          '推动点评app首次接入美团大会员体系，提升点评平台46%商家的价格竞争力',
          '梳理酒店供应链上下游并设计灰度策略，预期提升点评意向uv-支付订单转化率4.77%',
        ],
        tags: [
          { desc: '商家价格竞争力', value: '+46%', suffix: '提升' },
          { desc: '意向UV转化率', value: '4.77%', suffix: '提升' },
        ],
        label: 'Project Owner',
      },
      {
        title: '优化C端交易下单链路用户体验，上线暑期活动促进用户增长',
        points: [
          '推动抽奖后台系统等落地，活动曝光UV日均14w+，抽奖CTR约7%',
          '主导优化早餐权益链路交互设计，降低用户权益相关客诉数量30%',
        ],
        tags: [
          { desc: '活动曝光UV日均', value: '14w+', suffix: '达成' },
          { desc: '活动抽奖CTR', value: '7%', suffix: '达成' },
          { desc: '权益客诉数量', value: '30%', suffix: '降低' },
        ],
        label: 'Project Owner',
      },
      {
        title: '强化商家对开通神券的收益感知，减少商家流失（B端）',
        points: [
          '重构商家后台订单&神券数据中心指标，新增竞争圈数据看板并推动上线',
          '设计补贴透传策略与差异化展示，提升商家价格竞争力与订单增长',
        ],
        tags: [],
        label: '神券补贴',
      },
    ],
  },
  {
    id: 'xiaomi',
    company: '小米',
    logo: xiaomiLogo,
    position: 'cloudML-AI大模型平台产品',
    duration: '2024年03月- 2024年07月',
    theme: 'xiaomi',
    projects: [
      {
        title: '大模型评测体系架构构建',
        points: [
          '主导设计模型推理评测模块核心架构，推动评测模块1.0版本上线',
          '推动评测体系2.0升级，新增动态评估配置能力并支持15+评估指标',
        ],
        tags: [
          { desc: '支持评估指标', value: '15+', suffix: '覆盖' },
          { desc: '平台竞品分析', value: '10+', suffix: '输出' },
          { desc: '评测集方案', value: '3类', suffix: '标准化' },
        ],
        label: 'Project Owner',
      },
      {
        title: 'AI资源监控看板展示策略设计',
        points: [
          '独立主导自动驾驶领域AI资源监控数据看板0→1建设，上线后两周内用户满意度达90%+',
          '基于用户反馈重构看板展示策略，构建覆盖24类资源的监控指标体系',
        ],
        tags: [
          { desc: '用户满意度', value: '90%+', suffix: '达成' },
          { desc: '覆盖资源指标', value: '24类', suffix: '构建' },
        ],
        label: 'Project Owner',
      },
      {
        title: '大模型平台能力优化策略',
        points: [
          '独立设计平台全局新手指引策略0→1上线，降低此类客服工单咨询量40%',
          '主导全集群模块功能梳理，完成12个主流大模型连续性测试分析报告',
        ],
        tags: [
          { desc: '工单咨询量', value: '40%', suffix: '降低' },
          { desc: '大模型连续性测试', value: '12个', suffix: '完成' },
          { desc: '机型资源适配', value: '7类', suffix: '覆盖' },
        ],
        label: '连续性测试',
      },
    ],
  },
];

// 项目折叠卡片组件
function ProjectCard({ project, theme, isExpanded, onToggle }: {
  project: Project;
  theme: ThemeConfig;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 rounded-xl mb-4 overflow-hidden">
      {/* 标题区 - 可点击折叠 */}
      <div
        onClick={onToggle}
        className="flex items-center justify-between cursor-pointer hover:bg-gray-50/50 transition-colors px-5 py-3.5 w-full"
      >
        <div className="flex min-w-0 flex-1 flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-3">
          <h4 className="text-gray-900 font-bold text-base leading-snug">
            {project.title}
          </h4>
          <span className={`flex-shrink-0 whitespace-nowrap ${theme.cardBg} ${theme.cardBorder} text-gray-700 text-xs font-medium px-2.5 py-1 rounded-md tracking-wide shadow-sm`}>
            {project.label || 'Project Owner'}
          </span>
        </div>
        <div className="flex-shrink-0 ml-2">
          {isExpanded ? (
            <ChevronUp className="w-5 h-5 text-gray-400" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-400" />
          )}
        </div>
      </div>

      {/* 内容区 - 可折叠 */}
      <div className={`
        overflow-hidden transition-all duration-300 ease-in-out border-t border-gray-50
        ${isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}
      `}>
        <div className="px-5 pb-5 pt-1">
          {project.background && (
            <p className="mb-4 border-l-2 border-rose-200 pl-3 text-sm leading-relaxed text-gray-500">
              <span className="font-semibold text-gray-700">项目背景：</span>
              {project.background}
            </p>
          )}

          {/* 核心工作列表 */}
          <ul className="space-y-2 mb-4">
            {project.points.map((point, rIndex) => (
              <li
                key={rIndex}
                className="flex items-start gap-2"
              >
                <CheckCircle2 className="w-4 h-4 text-gray-400 mt-1 shrink-0" />
                <span className="text-sm text-gray-700 leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>

          {/* 数据指标卡 - 三段式复合结构 */}
          <div className="flex gap-3 flex-wrap">
            {project.tags.map((tag, tIndex) => (
              <div
                key={tIndex}
                className={`${theme.cardBg} ${theme.cardBorder} rounded-lg px-4 py-2 min-w-[120px]`}
              >
                {/* 第一行：描述维度 */}
                <div className="text-xs text-gray-500 mb-0.5">{tag.desc}</div>
                {/* 第二行：数据容器 */}
                <div className="flex items-baseline gap-1">
                  <span className={`text-xl font-extrabold bg-gradient-to-r ${theme.valueGradient} bg-clip-text text-transparent`}>{tag.value}</span>
                  <span className="text-sm font-medium text-gray-700">{tag.suffix}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function WorkExperienceSection() {
  // 默认展开腾讯（第一个）
  const [expandedId, setExpandedId] = useState<string>('tencent');
  // 项目展开状态管理 - 默认全部展开
  const [expandedProjects, setExpandedProjects] = useState<Record<string, boolean>>({
    'tencent-0': true,
    'tencent-1': true,
    'tencent-2': true,
    'meituan-0': true,
    'meituan-1': true,
    'meituan-2': true,
    'xiaomi-0': true,
    'xiaomi-1': true,
    'xiaomi-2': true,
  });

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? '' : id);
  };

  const toggleProject = (key: string) => {
    setExpandedProjects(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
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
            具备 3 段大厂产品实习经历，覆盖微信商业化、美团 APP、小米 AI 大模型，涉猎 AI 产品、策略产品、增长产品多个方向。
          </p>
        </div>

        {/* 时间轴容器 */}
        <div className="relative">
          {/* 左侧时间轴线 */}
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-200 via-pink-100 to-sky-200"></div>

          {/* 经历列表 */}
          <div className="space-y-6">
            {experiences.map((exp) => {
              const isExpanded = expandedId === exp.id;
              const theme = themes[exp.theme];
              
              return (
                <div key={exp.id} className="relative pl-12 sm:pl-16">
                  {/* 时间轴节点 */}
                  <div className={`
                    absolute left-2 sm:left-4 top-6 
                    w-4 h-4 rounded-full 
                    border-2 border-white 
                    shadow-md
                    transition-colors duration-300
                    ${isExpanded ? 'bg-pink-500' : 'bg-pink-300'}
                  `} />

                  {/* 卡片 */}
                  <div className={`
                    rounded-2xl 
                    overflow-hidden
                    border
                    transition-all duration-300
                    ${isExpanded 
                      ? 'bg-pink-50/30 border-pink-100 shadow-md'
                      : 'bg-white border-gray-100 shadow-sm hover:shadow-md'
                    }
                  `}>
                    {/* Header - 带Logo和固定布局 */}
                    <button
                      onClick={() => toggleExpand(exp.id)}
                      className="w-full px-5 py-5 sm:px-6 sm:py-5"
                    >
                      {/* 使用 flex justify-between 确保布局稳定 */}
                      <div className="flex justify-between items-center w-full gap-4">
                        {/* 左侧：Logo + 公司与职位 */}
                        <div className="flex-1 min-w-0 text-left">
                          <div className="flex items-center gap-3">
                            {/* 公司 Logo */}
                            <img
                              src={exp.logo}
                              alt={`${exp.company} Logo`}
                              className="w-10 h-10 rounded-lg border border-gray-100 shadow-sm object-contain bg-white flex-shrink-0"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                              }}
                            />
                            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                              <span className="text-lg font-bold text-gray-800">
                                {exp.company}
                              </span>
                              <span className="hidden sm:block text-gray-300">|</span>
                              <span className="text-base text-gray-600">
                                {exp.position}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* 右侧：时间与 Chevron - 固定位置 */}
                        <div className="flex items-center gap-3 flex-shrink-0">
                          <span className="text-sm text-gray-400 hidden sm:block">
                            {exp.duration}
                          </span>
                          <div className="w-5 h-5 flex items-center justify-center">
                            {isExpanded ? (
                              <ChevronUp className="w-5 h-5 text-pink-500" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-gray-400" />
                            )}
                          </div>
                        </div>
                      </div>

                      {/* 移动端时间显示 */}
                      <div className="sm:hidden text-left mt-2 pl-[52px]">
                        <span className="text-sm text-gray-400">
                          {exp.duration}
                        </span>
                      </div>
                    </button>

                    {/* Body - 展开后可见 */}
                    <div className={`
                      overflow-hidden transition-all duration-300 ease-in-out
                      ${isExpanded ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0'}
                    `}>
                      <div className="px-5 pb-6 sm:px-6 sm:pb-8">
                        {exp.projects.map((project, pIndex) => (
                          <ProjectCard
                            key={pIndex}
                            project={project}
                            theme={theme}
                            isExpanded={expandedProjects[`${exp.id}-${pIndex}`] ?? true}
                            onToggle={() => toggleProject(`${exp.id}-${pIndex}`)}
                          />
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
