import { Injectable } from '@angular/core';

import { ExercisePlan } from '../components/workout-runner/model';
import { LocalStorage } from './local-storage';

// Unlike Module and Component who have @NgModule/@Component to help transpiler to generate metadata for Angular to determine dependencies
// We need @Injectable to force TypeScript transpiler to generate metadata for the class so that Angular can use to determine dependencies
@Injectable()
export class WorkoutHistoryTracker {
    private maxHistoryItems: number = 20;   //We only track for last 20 exercise
    private currentWorkoutLog: WorkoutLogEntry = null;
    private workoutHistory: Array<WorkoutLogEntry> = [];
    private workoutTracked: boolean;
    private storageKey: string = "workouts";

    constructor(private storage: LocalStorage) {
        console.log("WorkoutHistoryTracker.constructor()...");
        this.workoutHistory = (storage.getItem<Array<WorkoutLogEntry>>(this.storageKey) || [])
            .map((item: WorkoutLogEntry) => {
                item.startedOn = new Date(item.startedOn.toString());
                item.endedOn = item.endedOn == null ? null : new Date(item.endedOn.toString());
                return item;
            });
    }

    get tracking(): boolean {
        return this.workoutTracked;
    }

    startTracking() {
        this.workoutTracked = true;
        this.currentWorkoutLog = new WorkoutLogEntry(new Date());
        if (this.workoutHistory.length >= this.maxHistoryItems) {
            this.workoutHistory.shift();
        }
        this.workoutHistory.push(this.currentWorkoutLog);
        this.storage.setItem(this.storageKey, this.workoutHistory);
    }

    exerciseComplete(exercise: ExercisePlan) {
        this.currentWorkoutLog.lastExercise = exercise.exercise.title;
        ++this.currentWorkoutLog.exercisesDone;
        this.storage.setItem(this.storageKey, this.workoutHistory);
    }

    endTracking(completed: boolean) {
        if (this.currentWorkoutLog) {
            this.currentWorkoutLog.completed = completed;
            this.currentWorkoutLog.endedOn = new Date();

            this.currentWorkoutLog = null;
        }
        
        this.workoutTracked = false;
        this.storage.setItem(this.storageKey, this.workoutHistory);
    };

    getHistory(): Array<WorkoutLogEntry> {
        return this.workoutHistory;
    }
}

export class WorkoutLogEntry {
    constructor(
        public startedOn: Date,
        public completed: boolean = false,
        public exercisesDone: number = 0,
        public lastExercise?: string,
        public endedOn?: Date) { }
}
