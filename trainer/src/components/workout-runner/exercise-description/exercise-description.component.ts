import { Component, Input } from '@angular/core';      
@Component({
    selector: 'exercise-description',
    templateUrl: '/src/components/workout-runner/exercise-description/exercise-description.html'
})
export class ExerciseDescriptionComponent {
    @Input() description: string;       // @Input decorator signifies that the component property is available for view binding
    @Input() steps: string
}