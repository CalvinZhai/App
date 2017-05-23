import { Component, ViewContainerRef} from '@angular/core';
import { Overlay } from 'angular2-modal';

@Component({
    selector: 'trainer-app',
    template: `
        <div class="navbar navbar-default navbar-fixed-top top-navbar">
            <div class="container app-container">
                <div class="navbar-header">
                    <h1>7 Minute Workout</h1>
                </div>

                <header></header>

            </div>
        </div>

        <!-- or: <test #tester></test> -->
        <test ref-tester></test>
        <button (click)="tester.test()">test component</button>

        <div class="container body-content app-container">
            <router-outlet></router-outlet>
        </div>
    `
})
export class TrainerAppComponent {
    name: string = 'World';

    constructor(overlay: Overlay, viewContainer: ViewContainerRef) {
        overlay.defaultViewContainer = viewContainer;
    }
}
