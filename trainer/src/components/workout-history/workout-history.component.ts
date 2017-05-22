import { Component } from '@angular/core';
import { WorkoutHistoryTracker, WorkoutLogEntry } from '../../services/workout-history-tracker';
import { Location } from '@angular/common';

@Component({
    selector: 'workout-history',
    //providers: [WorkoutHistoryTracker],         // register dependencies at component level
    templateUrl: `/src/components/workout-history/workout-history.html`
})
export class WorkoutHistoryComponent {
    history: Array<WorkoutLogEntry> = [];
    completed: boolean;       // tracking search filter: All, Completed, Incomplete

    constructor(private tracker: WorkoutHistoryTracker, private location: Location) { }

    ngOnInit() {
        this.history = this.tracker.getHistory();
    }

    goBack() {
        this.location.back();           // use built-in location service
    }
}
