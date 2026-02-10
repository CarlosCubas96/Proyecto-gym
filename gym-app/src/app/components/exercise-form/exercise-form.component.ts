import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ExerciseService, Exercise } from '../../services/exercise.service';

@Component({
  selector: 'app-exercise-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './exercise-form.component.html'
})
export class ExerciseFormComponent {
  exercise: Exercise = { name: '', weight: 0, reps: 0 };

  constructor(private exerciseService: ExerciseService) {}

  addExercise() {
    this.exerciseService.addExercise(this.exercise).subscribe(res => {
    console.log('Exercise added:', res);
    this.exercise = { name: '', weight: 0, reps: 0 };
    window.location.reload(); // refresh simple
    });
  }
}
