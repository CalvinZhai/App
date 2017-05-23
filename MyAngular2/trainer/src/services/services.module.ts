// this module is used to register all application-wide services

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LocalStorage } from './local-storage';
import { WorkoutHistoryTracker } from './workout-history-tracker';

@NgModule({
    imports: [],
    declarations: [],

    // register dependencies
    providers: [    
        LocalStorage,
        WorkoutHistoryTracker
    ],
})
export class ServicesModule { }