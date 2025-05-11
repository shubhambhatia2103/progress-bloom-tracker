
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export const WeeklyProgress = () => {
  // Sample data - in a real app this would come from API/database
  const data = [
    { name: 'Mon', minutes: 45 },
    { name: 'Tue', minutes: 30 },
    { name: 'Wed', minutes: 60 },
    { name: 'Thu', minutes: 0 },
    { name: 'Fri', minutes: 75 },
    { name: 'Sat', minutes: 90 },
    { name: 'Sun', minutes: 20 },
  ];

  // Custom tooltip to display minutes
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-card p-2 text-xs border rounded-md shadow-sm">
          <p className="font-medium">{`${label}: ${payload[0].value} min`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 5 }}>
        <XAxis dataKey="name" axisLine={false} tickLine={false} />
        <YAxis 
          axisLine={false} 
          tickLine={false} 
          label={{ value: 'Minutes', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle' } }} 
        />
        <Tooltip content={<CustomTooltip />} />
        <Bar 
          dataKey="minutes" 
          fill="url(#colorGradient)" 
          radius={[4, 4, 0, 0]} 
        />
        <defs>
          <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#9b87f5" stopOpacity={1} />
            <stop offset="100%" stopColor="#E5DEFF" stopOpacity={1} />
          </linearGradient>
        </defs>
      </BarChart>
    </ResponsiveContainer>
  );
};
