
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

export const WorkoutChart = () => {
  // Sample data - in a real app this would come from API/database
  const data = [
    { name: 'Strength', value: 12 },
    { name: 'Cardio', value: 8 },
    { name: 'Flexibility', value: 4 },
    { name: 'Custom', value: 2 },
  ];

  const COLORS = ['#9b87f5', '#7E69AB', '#E5DEFF', '#6E59A5'];

  return (
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
