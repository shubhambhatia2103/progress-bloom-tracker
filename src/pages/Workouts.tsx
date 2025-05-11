
import React from 'react';
import { Dumbbell, Filter, Calendar, Clock, Search } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Link } from 'react-router-dom';

const workoutItems = [
  {
    id: 1,
    name: "Upper Body Strength",
    date: "May 10, 2023",
    type: "Strength",
    duration: "45 mins",
    muscleGroups: ["Chest", "Shoulders", "Triceps"]
  },
  {
    id: 2,
    name: "HIIT Cardio",
    date: "May 8, 2023",
    type: "Cardio",
    duration: "30 mins",
    muscleGroups: []
  },
  {
    id: 3,
    name: "Leg Day",
    date: "May 6, 2023",
    type: "Strength",
    duration: "60 mins",
    muscleGroups: ["Quadriceps", "Hamstrings", "Calves"]
  },
  {
    id: 4,
    name: "Yoga Flow",
    date: "May 4, 2023",
    type: "Flexibility",
    duration: "45 mins",
    muscleGroups: ["Full body"]
  },
  {
    id: 5,
    name: "Back & Biceps",
    date: "May 2, 2023",
    type: "Strength",
    duration: "50 mins",
    muscleGroups: ["Back", "Biceps"]
  }
];

const Workouts = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">Workouts</h1>
          <p className="text-muted-foreground">View and manage your workout history</p>
        </div>
        <Button asChild>
          <Link to="/add-workout">Log New Workout</Link>
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-end">
        <div className="flex-grow relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input 
            placeholder="Search workouts..." 
            className="pl-10" 
          />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex gap-2">
              <Filter className="h-4 w-4" /> Filter
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>All Types</DropdownMenuItem>
            <DropdownMenuItem>Strength</DropdownMenuItem>
            <DropdownMenuItem>Cardio</DropdownMenuItem>
            <DropdownMenuItem>Flexibility</DropdownMenuItem>
            <DropdownMenuItem>Custom</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Sort By</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Latest</DropdownMenuItem>
            <DropdownMenuItem>Oldest</DropdownMenuItem>
            <DropdownMenuItem>Duration (High to Low)</DropdownMenuItem>
            <DropdownMenuItem>Duration (Low to High)</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="space-y-4">
        {workoutItems.map((workout) => (
          <Card key={workout.id} className="overflow-hidden hover:shadow-md transition-shadow">
            <CardContent className="p-0">
              <div className="flex flex-col sm:flex-row justify-between">
                <div className="p-4 flex-1">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-fitness-purple/20 flex items-center justify-center text-fitness-purple">
                      <Dumbbell className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">{workout.name}</h3>
                      <div className="flex flex-wrap gap-2 text-xs text-muted-foreground mt-1">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" /> {workout.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" /> {workout.duration}
                        </span>
                        <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-fitness-purple/10 text-fitness-purple-dark">
                          {workout.type}
                        </span>
                      </div>
                      {workout.muscleGroups && workout.muscleGroups.length > 0 && (
                        <div className="mt-2 flex flex-wrap gap-1">
                          {workout.muscleGroups.map((muscle, i) => (
                            <span 
                              key={i}
                              className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground"
                            >
                              {muscle}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="border-t sm:border-t-0 sm:border-l bg-secondary/30 flex sm:flex-col justify-around sm:items-center p-3 sm:px-6">
                  <Button variant="ghost" size="sm">
                    View
                  </Button>
                  <Button variant="ghost" size="sm">
                    Edit
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Workouts;
