import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold">
              <Sparkles size={16} />
              AI-Powered Client Acquisition
            </div>

            <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              Grow Your Business Faster with Smart AI Tools
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Transform your marketing agency with intelligent automation.
              PreciseAI helps you identify, engage, and convert high-value clients
              while you focus on delivering exceptional results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary group">
                Start Free Trial
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-secondary">
                Watch Demo
              </button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div>
                <p className="text-3xl font-bold text-gray-900">10x</p>
                <p className="text-sm text-gray-600">More Qualified Leads</p>
              </div>
              <div className="h-12 w-px bg-gray-300"></div>
              <div>
                <p className="text-3xl font-bold text-gray-900">85%</p>
                <p className="text-sm text-gray-600">Time Saved</p>
              </div>
              <div className="h-12 w-px bg-gray-300"></div>
              <div>
                <p className="text-3xl font-bold text-gray-900">3x</p>
                <p className="text-sm text-gray-600">Revenue Growth</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="AI automation dashboard"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl border-2 border-orange-500">
              <p className="text-sm text-gray-600 mb-1">New Client Alert</p>
              <p className="text-lg font-bold text-gray-900">+$25,000 MRR</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}