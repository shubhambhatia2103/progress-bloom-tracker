
import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface ExerciseFormProps {
  onAddExercise: (exercise: { name: string; sets: number; reps: number; weight?: number }) => void;
}

export const ExerciseForm: React.FC<ExerciseFormProps> = ({ onAddExercise }) => {
  const [exerciseName, setExerciseName] = useState('');
  const [sets, setSets] = useState('3');
  const [reps, setReps] = useState('10');
  const [weight, setWeight] = useState('');
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!exerciseName || !sets || !reps) return;

    onAddExercise({
      name: exerciseName,
      sets: Number(sets),
      reps: Number(reps),
      weight: weight ? Number(weight) : undefined,
    });

    // Reset form
    setExerciseName('');
    setSets('3');
    setReps('10');
    setWeight('');
    setShowForm(false);
  };

  // Array of common exercises
  const commonExercises = [
    { value: "Bench Press", label: "Bench Press" },
    { value: "Squat", label: "Squat" },
    { value: "Deadlift", label: "Deadlift" },
    { value: "Pull-up", label: "Pull-up" },
    { value: "Push-up", label: "Push-up" },
    { value: "Leg Press", label: "Leg Press" },
    { value: "Shoulder Press", label: "Shoulder Press" },
    { value: "Bicep Curl", label: "Bicep Curl" },
    { value: "Tricep Extension", label: "Tricep Extension" },
    { value: "Lat Pulldown", label: "Lat Pulldown" },
  ];

  if (!showForm) {
    return (
      <Button 
        variant="outline" 
        className="w-full flex items-center justify-center gap-2"
        onClick={() => setShowForm(true)}
      >
        <Plus className="h-4 w-4" /> Add Exercise
      </Button>
    );
  }

  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="add-exercise" className="border bg-card rounded-md">
        <AccordionTrigger className="px-4 py-3">Add New Exercise</AccordionTrigger>
        <AccordionContent>
          <form onSubmit={handleSubmit} className="p-4 pt-0 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="exercise-name">Exercise Name</Label>
              <Select 
                onValueChange={(value) => setExerciseName(value)}
                value={exerciseName}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select or type exercise" />
                </SelectTrigger>
                <SelectContent>
                  {commonExercises.map((exercise) => (
                    <SelectItem key={exercise.value} value={exercise.value}>
                      {exercise.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="sets">Sets</Label>
                <Input 
                  id="sets" 
                  type="number" 
                  min="1" 
                  value={sets}
                  onChange={(e) => setSets(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="reps">Reps</Label>
                <Input 
                  id="reps" 
                  type="number" 
                  min="1" 
                  value={reps}
                  onChange={(e) => setReps(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="weight">Weight (kg)</Label>
                <Input 
                  id="weight" 
                  type="number" 
                  min="0" 
                  step="0.5" 
                  placeholder="Optional"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
              </div>
            </div>
            
            <div className="flex justify-end gap-2">
              <Button variant="outline" type="button" onClick={() => setShowForm(false)}>Cancel</Button>
              <Button type="submit">Add Exercise</Button>
            </div>
          </form>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
