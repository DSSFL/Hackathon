import VitalCard from '@/components/VitalCard';
import TopicCard from '@/components/TopicCard';
import EKGLine from '@/components/EKGLine';
import SentimentGauge from '@/components/SentimentGauge';
import VelocityMeter from '@/components/VelocityMeter';

// Mock data for demonstration
const mockTopics = [
  {
    topic: '#TechNews',
    tweetCount: 142500,
    velocity: 234,
    sentiment: 0.45,
    status: 'viral' as const,
    category: 'Technology',
  },
  {
    topic: 'Bitcoin',
    tweetCount: 89200,
    velocity: 156,
    sentiment: 0.12,
    status: 'growing' as const,
    category: 'Finance',
  },
  {
    topic: '#MondayMotivation',
    tweetCount: 45000,
    velocity: 45,
    sentiment: 0.78,
    status: 'stable' as const,
    category: 'Lifestyle',
  },
  {
    topic: 'Breaking News',
    tweetCount: 234000,
    velocity: 567,
    sentiment: -0.32,
    status: 'viral' as const,
    category: 'News',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen p-6 lg:p-8">
      {/* Header */}
      <header className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-x-white">
              Vitals
            </h1>
            <p className="text-x-gray-text text-sm mt-1">
              Real-time health check on X
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-x-gray-dark border border-x-gray-border">
              <div className="w-2 h-2 rounded-full bg-vital-healthy animate-pulse" />
              <span className="text-sm text-x-gray-text">Live</span>
            </div>
            <span className="text-x-gray-text text-sm">
              Last updated: <span className="text-x-white">Just now</span>
            </span>
          </div>
        </div>
      </header>

      {/* Main EKG Banner */}
      <section className="mb-8 p-6 rounded-2xl bg-x-gray-dark border border-x-gray-border relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <EKGLine color="#00D4FF" height={200} speed={1.5} />
        </div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-3 h-3 rounded-full bg-vital-healthy status-pulse" />
            <span className="text-x-gray-text text-sm uppercase tracking-wider">Platform Status</span>
          </div>
          <h2 className="text-4xl font-bold gradient-text mb-2">
            523.4M
          </h2>
          <p className="text-x-gray-text">
            tweets in the last 24 hours
          </p>
          <div className="flex gap-8 mt-6">
            <div>
              <p className="text-vital-healthy text-2xl font-bold">+12.3%</p>
              <p className="text-x-gray-text text-sm">vs yesterday</p>
            </div>
            <div>
              <p className="text-vital-neutral text-2xl font-bold">847K</p>
              <p className="text-x-gray-text text-sm">active topics</p>
            </div>
            <div>
              <p className="text-vital-warning text-2xl font-bold">23</p>
              <p className="text-x-gray-text text-sm">viral moments</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vitals Grid */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold text-x-white mb-4 flex items-center gap-2">
          <svg className="w-5 h-5 text-pulse-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 12h3l2-4 3 8 2-4h3.5" />
          </svg>
          Core Vitals
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <VitalCard
            title="Heart Rate"
            value="1,247"
            unit="tweets/min"
            status="healthy"
            trend="up"
            subtitle="Platform engagement velocity"
            icon={
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            }
          />

          <VitalCard
            title="Blood Pressure"
            value="62/38"
            unit="pos/neg"
            status="neutral"
            trend="stable"
            subtitle="Sentiment balance ratio"
            icon={
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            }
          />

          <VitalCard
            title="Temperature"
            value="94.2"
            unit="heat index"
            status="warning"
            trend="up"
            subtitle="Viral potential score"
            icon={
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
              </svg>
            }
          />

          <VitalCard
            title="O2 Level"
            value="87"
            unit="%"
            status="healthy"
            trend="stable"
            subtitle="Signal-to-noise ratio"
            icon={
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            }
          />
        </div>
      </section>

      {/* Sentiment & Velocity Section */}
      <section className="mb-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="p-6 rounded-xl bg-x-gray-dark border border-x-gray-border">
          <h3 className="text-lg font-semibold text-x-white mb-6 flex items-center gap-2">
            <svg className="w-5 h-5 text-pulse-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            Global Sentiment
          </h3>
          <div className="flex justify-center">
            <SentimentGauge value={24} label="Overall Platform Sentiment" size="lg" />
          </div>
        </div>

        <div className="p-6 rounded-xl bg-x-gray-dark border border-x-gray-border">
          <h3 className="text-lg font-semibold text-x-white mb-6 flex items-center gap-2">
            <svg className="w-5 h-5 text-pulse-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            Engagement Velocity
          </h3>
          <div className="space-y-6">
            <VelocityMeter current={1247} max={2000} label="tweets/min" />
            <VelocityMeter current={423} max={1000} label="retweets/min" />
            <VelocityMeter current={892} max={1500} label="likes/min" />
          </div>
        </div>
      </section>

      {/* Trending Topics */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-x-white flex items-center gap-2">
            <svg className="w-5 h-5 text-pulse-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            Active Monitors
          </h2>
          <button className="px-4 py-2 rounded-full bg-x-blue text-white text-sm font-medium hover:bg-x-blue/90 transition-colors">
            + Add Topic
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {mockTopics.map((topic) => (
            <TopicCard key={topic.topic} {...topic} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-12 pt-6 border-t border-x-gray-border">
        <div className="flex items-center justify-between text-x-gray-text text-sm">
          <p>XPulse - Real-time Narrative Intelligence</p>
          <p>xpulse.buzz</p>
        </div>
      </footer>
    </div>
  );
}
