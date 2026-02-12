import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  icon: LucideIcon;
  label: string;
  value: string | number;
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

export default function StatsCard({ icon: Icon, label, value, trend }: StatsCardProps) {
  return (
    <div className="relative overflow-hidden bg-white rounded-2xl p-6 border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg group">
      <div className="relative z-10">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black mb-4">
          <Icon className="w-6 h-6 text-white" />
        </div>
        
        <p className="text-gray-500 text-sm font-medium mb-1">{label}</p>
        <p className="text-3xl font-bold text-black">{value}</p>
        
        {trend && (
          <div className={`flex items-center mt-2 text-sm ${trend.isPositive ? 'text-gray-700' : 'text-gray-500'}`}>
            <span>{trend.isPositive ? '↑' : '↓'} {Math.abs(trend.value)}%</span>
            <span className="text-gray-400 ml-2">vs last month</span>
          </div>
        )}
      </div>
    </div>
  );
}
