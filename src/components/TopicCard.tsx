'use client';

import EKGLine from './EKGLine';

interface TopicCardProps {
  topic: string;
  tweetCount: number;
  velocity: number; // tweets per minute
  sentiment: number; // -1 to 1
  status: 'viral' | 'growing' | 'stable' | 'declining';
  category: string;
}

const statusConfig = {
  viral: {
    label: 'Viral',
    color: 'text-vital-critical',
    bgColor: 'bg-vital-critical/10',
    ekgColor: '#FF3B3B',
  },
  growing: {
    label: 'Growing',
    color: 'text-vital-healthy',
    bgColor: 'bg-vital-healthy/10',
    ekgColor: '#00FF88',
  },
  stable: {
    label: 'Stable',
    color: 'text-vital-neutral',
    bgColor: 'bg-vital-neutral/10',
    ekgColor: '#00D4FF',
  },
  declining: {
    label: 'Declining',
    color: 'text-vital-warning',
    bgColor: 'bg-vital-warning/10',
    ekgColor: '#FFD700',
  },
};

function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
}

function getSentimentLabel(sentiment: number): { label: string; color: string } {
  if (sentiment > 0.3) return { label: 'Positive', color: 'text-vital-healthy' };
  if (sentiment < -0.3) return { label: 'Negative', color: 'text-vital-critical' };
  return { label: 'Neutral', color: 'text-vital-neutral' };
}

export default function TopicCard({
  topic,
  tweetCount,
  velocity,
  sentiment,
  status,
  category,
}: TopicCardProps) {
  const config = statusConfig[status];
  const sentimentInfo = getSentimentLabel(sentiment);

  return (
    <div className="vital-card bg-x-gray-dark border border-x-gray-border rounded-xl p-4 hover:border-x-gray-light transition-all">
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div>
          <span className="text-x-gray-text text-xs uppercase tracking-wider">
            {category}
          </span>
          <h3 className="text-x-white font-bold text-lg mt-1">
            {topic}
          </h3>
        </div>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${config.bgColor} ${config.color}`}>
          {config.label}
        </span>
      </div>

      {/* EKG Line */}
      <div className="my-3 -mx-4 px-4 py-2 bg-x-black/50">
        <EKGLine color={config.ekgColor} height={40} speed={status === 'viral' ? 4 : 2} />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mt-4">
        <div>
          <p className="text-x-gray-text text-xs">Volume</p>
          <p className="text-x-white font-semibold">{formatNumber(tweetCount)}</p>
        </div>
        <div>
          <p className="text-x-gray-text text-xs">Velocity</p>
          <p className="text-x-white font-semibold">{velocity}/min</p>
        </div>
        <div>
          <p className="text-x-gray-text text-xs">Sentiment</p>
          <p className={`font-semibold ${sentimentInfo.color}`}>{sentimentInfo.label}</p>
        </div>
      </div>
    </div>
  );
}
