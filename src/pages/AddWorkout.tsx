
import React, { useState } from 'react';
import { Calendar, Clock, Dumbbell, Plus, X } from 'lucide-react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { ExerciseForm } from '@/components/workout/ExerciseForm';

const AddWorkout = () => {
  const { toast } = useToast();
  const [exercises, setExercises] = useState<{ id: number; name: string; sets: number; reps: number; weight?: number }[]>([]);

  const handleAddExercise = (exercise: { name: string; sets: number; reps: number; weight?: number }) => {
    setExercises([...exercises, { id: Date.now(), ...exercise }]);
  };

  const handleRemoveExercise = (id: number) => {
    setExercises(exercises.filter(exercise => exercise.id !== id));
  };

  const handleSaveWorkout = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, this would save to an API/database
    toast({
      title: "Workout Logged",
      description: "Your workout has been successfully saved.",
    });
  };
  
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold">Log Workout</h1>
        <p className="text-muted-foreground">Track your workout details</p>
      </div>
      
      <Tabs defaultValue="strength" className="w-full">
        <TabsList className="grid grid-cols-4 mb-4">
          <TabsTrigger value="strength">Strength</TabsTrigger>
          <TabsTrigger value="cardio">Cardio</TabsTrigger>
          <TabsTrigger value="flexibility">Flexibility</TabsTrigger>
          <TabsTrigger value="custom">Custom</TabsTrigger>
        </TabsList>
        
        <TabsContent value="strength">
          <form onSubmit={handleSaveWorkout}>
            <Card>
              <CardHeader>
                <CardTitle>Strength Training</CardTitle>
                <CardDescription>Log your strength workout with exercises, sets, and reps</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="workout-name">Workout Name</Label>
                    <Input id="workout-name" placeholder="E.g. Upper Body Strength" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="workout-date">Date</Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                      <Input id="workout-date" type="date" className="pl-10" defaultValue={new Date().toISOString().split('T')[0]} required />
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="workout-duration">Duration (minutes)</Label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                      <Input id="workout-duration" type="number" className="pl-10" min="1" placeholder="E.g. 45" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Intensity</Label>
                    <Slider defaultValue={[50]} max={100} step={1} />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Low</span>
                      <span>Medium</span>
                      <span>High</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <Label className="text-lg">Exercises</Label>
                  </div>
                  
                  <div className="space-y-4 mb-4">
                    {exercises.map(exercise => (
                      <div key={exercise.id} className="flex items-center justify-between p-3 bg-secondary/50 rounded-md">
                        <div>
                          <p className="font-medium">{exercise.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {exercise.sets} sets × {exercise.reps} reps
                            {exercise.weight && ` @ ${exercise.weight} kg`}
                          </p>
                        </div>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          onClick={() => handleRemoveExercise(exercise.id)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                  
                  <ExerciseForm onAddExercise={handleAddExercise} />
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button type="submit">Save Workout</Button>
              </CardFooter>
            </Card>
          </form>
        </TabsContent>
        
        <TabsContent value="cardio">
          <Card>
            <CardHeader>
              <CardTitle>Cardio Workout</CardTitle>
              <CardDescription>Log your cardio exercise details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="cardio-name">Workout Name</Label>
                  <Input id="cardio-name" placeholder="E.g. Morning Run" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cardio-date">Date</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input id="cardio-date" type="date" className="pl-10" defaultValue={new Date().toISOString().split('T')[0]} />
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="cardio-type">Cardio Type</Label>
                  <Select defaultValue="running">
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="running">Running</SelectItem>
                      <SelectItem value="cycling">Cycling</SelectItem>
                      <SelectItem value="swimming">Swimming</SelectItem>
                      <SelectItem value="rowing">Rowing</SelectItem>
                      <SelectItem value="elliptical">Elliptical</SelectItem>
                      <SelectItem value="hiit">HIIT</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cardio-duration">Duration (minutes)</Label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input id="cardio-duration" type="number" className="pl-10" min="1" placeholder="E.g. 30" />
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="cardio-distance">Distance (km)</Label>
                  <Input id="cardio-distance" type="number" step="0.01" min="0" placeholder="E.g. 5.2" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cardio-calories">Calories Burned</Label>
                  <Input id="cardio-calories" type="number" min="0" placeholder="E.g. 300" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>Intensity</Label>
                <Slider defaultValue={[50]} max={100} step={1} />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Low</span>
                  <span>Medium</span>
                  <span>High</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="cardio-notes">Notes (optional)</Label>
                <Input id="cardio-notes" placeholder="Any additional notes about your workout" />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancel</Button>
              <Button>Save Workout</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="flexibility">
          <Card>
            <CardHeader>
              <CardTitle>Flexibility & Mobility</CardTitle>
              <CardDescription>Log your flexibility workout details</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <Dumbbell className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium">Flexibility Tracking</h3>
                <p className="text-muted-foreground">This feature is coming soon!</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="custom">
          <Card>
            <CardHeader>
              <CardTitle>Custom Workout</CardTitle>
              <CardDescription>Create and log a custom workout routine</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <Dumbbell className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium">Custom Workout Builder</h3>
                <p className="text-muted-foreground">This feature is coming soon!</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AddWorkout;
