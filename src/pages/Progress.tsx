
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const Progress = () => {
  const [timeRange, setTimeRange] = useState('month');

  // Sample data - in a real app this would come from API/database
  const strengthData = [
    { date: 'Week 1', benchPress: 60, squat: 100, deadlift: 120 },
    { date: 'Week 2', benchPress: 65, squat: 105, deadlift: 125 },
    { date: 'Week 3', benchPress: 65, squat: 110, deadlift: 130 },
    { date: 'Week 4', benchPress: 70, squat: 115, deadlift: 135 },
    { date: 'Week 5', benchPress: 72.5, squat: 120, deadlift: 140 },
    { date: 'Week 6', benchPress: 75, squat: 125, deadlift: 145 },
  ];

  const cardioData = [
    { date: 'Week 1', duration: 20, distance: 3, calories: 180 },
    { date: 'Week 2', duration: 25, distance: 3.5, calories: 210 },
    { date: 'Week 3', duration: 30, distance: 4, calories: 250 },
    { date: 'Week 4', duration: 30, distance: 4.2, calories: 260 },
    { date: 'Week 5', duration: 35, distance: 4.5, calories: 280 },
    { date: 'Week 6', duration: 40, distance: 5, calories: 320 },
  ];

  const workoutDistribution = [
    { name: 'Chest', value: 8 },
    { name: 'Back', value: 6 },
    { name: 'Legs', value: 10 },
    { name: 'Arms', value: 5 },
    { name: 'Shoulders', value: 4 },
    { name: 'Core', value: 3 },
  ];

  const COLORS = ['#9b87f5', '#7E69AB', '#6E59A5', '#E5DEFF', '#514281', '#A094D8'];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">Progress</h1>
          <p className="text-muted-foreground">Track your fitness improvements over time</p>
        </div>
        <Select
          defaultValue={timeRange}
          onValueChange={setTimeRange}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select time range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="week">Past Week</SelectItem>
            <SelectItem value="month">Past Month</SelectItem>
            <SelectItem value="year">Past Year</SelectItem>
            <SelectItem value="all">All Time</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Tabs defaultValue="strength" className="w-full">
        <TabsList className="grid grid-cols-3 mb-4">
          <TabsTrigger value="strength">Strength</TabsTrigger>
          <TabsTrigger value="cardio">Cardio</TabsTrigger>
          <TabsTrigger value="overview">Overview</TabsTrigger>
        </TabsList>

        <TabsContent value="strength">
          <Card>
            <CardHeader>
              <CardTitle>Strength Progress</CardTitle>
              <CardDescription>Track your lifting improvements over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={strengthData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis label={{ value: 'Weight (kg)', angle: -90, position: 'insideLeft' }} />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="benchPress" name="Bench Press" stroke="#9b87f5" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="squat" name="Squat" stroke="#7E69AB" />
                    <Line type="monotone" dataKey="deadlift" name="Deadlift" stroke="#6E59A5" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="cardio">
          <Card>
            <CardHeader>
              <CardTitle>Cardio Progress</CardTitle>
              <CardDescription>Track your cardiovascular improvements</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={cardioData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="duration" name="Duration (min)" fill="#9b87f5" />
                    <Bar dataKey="distance" name="Distance (km)" fill="#7E69AB" />
                    <Bar dataKey="calories" name="Calories (kcal)" fill="#E5DEFF" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="overview">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Workout Distribution</CardTitle>
                <CardDescription>Breakdown of muscle groups trained</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={workoutDistribution}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {workoutDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Legend />
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Workout Consistency</CardTitle>
                <CardDescription>Your workout frequency by day</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={[
                        { day: 'Mon', workouts: 4 },
                        { day: 'Tue', workouts: 2 },
                        { day: 'Wed', workouts: 3 },
                        { day: 'Thu', workouts: 0 },
                        { day: 'Fri', workouts: 3 },
                        { day: 'Sat', workouts: 5 },
                        { day: 'Sun', workouts: 2 },
                      ]}
                      margin={{ top: 10, right: 30, left: 0, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="day" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="workouts" name="Workouts" fill="#9b87f5" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Personal Records</CardTitle>
              <CardDescription>Your best performances</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { exercise: "Bench Press", value: "75 kg", date: "May 15, 2023" },
                  { exercise: "Squat", value: "125 kg", date: "May 12, 2023" },
                  { exercise: "Deadlift", value: "145 kg", date: "May 8, 2023" },
                  { exercise: "Pull-ups", value: "12 reps", date: "May 14, 2023" },
                  { exercise: "5k Run", value: "22:45", date: "May 10, 2023" },
                  { exercise: "Plank", value: "3:15", date: "May 11, 2023" },
                ].map((record, i) => (
                  <div key={i} className="bg-secondary/50 p-4 rounded-lg">
                    <p className="font-medium text-lg">{record.exercise}</p>
                    <p className="text-2xl font-bold text-fitness-purple">{record.value}</p>
                    <p className="text-xs text-muted-foreground">{record.date}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Progress;
