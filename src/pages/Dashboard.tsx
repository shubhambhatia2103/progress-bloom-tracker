
import React from 'react';
import { Activity, Dumbbell, TrendingUp, Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Progress } from '@/components/ui/progress';
import { WorkoutChart } from '@/components/charts/WorkoutChart';
import { WeeklyProgress } from '@/components/charts/WeeklyProgress';

const Dashboard = () => {
  // This would normally come from API/database
  const recentWorkouts = [
    { id: 1, name: 'Upper Body', date: '2023-05-10', type: 'Strength' },
    { id: 2, name: 'Cardio Session', date: '2023-05-08', type: 'Cardio' },
    { id: 3, name: 'Leg Day', date: '2023-05-06', type: 'Strength' },
  ];

  const stats = [
    { 
      title: 'Weekly Goal', 
      value: '4/5', 
      icon: <Activity className="h-4 w-4" />,
      progress: 80 
    },
    { 
      title: 'Workouts', 
      value: '24', 
      icon: <Dumbbell className="h-4 w-4" />,
      description: 'This month'
    },
    { 
      title: 'Streak', 
      value: '6 days', 
      icon: <TrendingUp className="h-4 w-4" />,
      description: 'Current streak'
    },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Track your fitness progress</p>
        </div>
        <Button asChild>
          <Link to="/add-workout">Log New Workout</Link>
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {stats.map((stat, i) => (
          <Card key={i} className="overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <div className="h-6 w-6 rounded-full bg-secondary flex items-center justify-center text-muted-foreground">
                {stat.icon}
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              {stat.description && (
                <p className="text-xs text-muted-foreground">{stat.description}</p>
              )}
              {stat.progress && (
                <Progress className="mt-2" value={stat.progress} />
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Weekly Activity</CardTitle>
            <CardDescription>Your workout activity for the past 7 days</CardDescription>
          </CardHeader>
          <CardContent>
            <WeeklyProgress />
          </CardContent>
        </Card>
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Workout Distribution</CardTitle>
            <CardDescription>Breakdown by workout type</CardDescription>
          </CardHeader>
          <CardContent>
            <WorkoutChart />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Workouts</CardTitle>
          <CardDescription>Your last recorded workout sessions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {recentWorkouts.map((workout) => (
              <div key={workout.id} className="flex justify-between items-center p-3 rounded-lg bg-secondary/50">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-fitness-purple/20 flex items-center justify-center text-fitness-purple">
                    <Dumbbell className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">{workout.name}</p>
                    <div className="flex gap-2 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" /> {workout.date}
                      </span>
                      <span>{workout.type}</span>
                    </div>
                  </div>
                </div>
                <Button variant="ghost" size="sm" asChild>
                  <Link to={`/workouts/${workout.id}`}>View</Link>
                </Button>
              </div>
            ))}
            <div className="flex justify-center pt-2">
              <Button variant="outline" asChild>
                <Link to="/workouts">View All Workouts</Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
