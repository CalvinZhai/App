import { Component } from '@angular/core';

@Component({
    selector: 'test',
    template: `
        <div>
            test component here...
        </div>
    `
})
export class TestComponent {
    name: string = 'Test';

    test() {
        console.log("TestComponent's .test()")
    }
}
