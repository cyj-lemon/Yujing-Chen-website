export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-white/50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            工作项目
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            在这里展示您的产品项目经历
          </p>
        </div>

        {/* Placeholder for projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="h-48 bg-gradient-to-br from-blue-100 to-pink-100 rounded-xl mb-4 flex items-center justify-center text-gray-400">
                项目 {i} 占位图
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                项目名称 {i}
              </h3>
              <p className="text-gray-500 text-sm">
                这里是项目描述，介绍项目的背景、您的角色和取得的成果。
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
