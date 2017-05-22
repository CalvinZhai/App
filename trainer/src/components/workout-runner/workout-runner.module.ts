import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { WorkoutRunnerComponent } from './workout-runner.component';
import { ExerciseDescriptionComponent } from './exercise-description/exercise-description.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { VideoDialogComponent } from './video-player/video-dialog.component';
import { SecondsToTimePipe } from './second-to-times.pipe';

import { WorkoutAudioComponent } from './workout-audio/workout-audio.component';
import { MyAudioDirective } from './workout-audio/my-audio.directive';

@NgModule({
  imports:      [BrowserModule],
  declarations: [
      WorkoutRunnerComponent, ExerciseDescriptionComponent,
      VideoPlayerComponent, VideoDialogComponent,
      SecondsToTimePipe,
      MyAudioDirective,
      WorkoutAudioComponent
  ],
  entryComponents: [VideoDialogComponent], 
  // without exports, we cannot use WorkoutRunnerComponent outside WorkoutRunnerModule
  exports: [WorkoutRunnerComponent]     
})
export class WorkoutRunnerModule { }