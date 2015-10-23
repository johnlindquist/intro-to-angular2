import {Component, FORM_DIRECTIVES} from "angular2/angular2";

@Component({
    selector: 'todo-search',
    directives:[FORM_DIRECTIVES],
    template: `
        Search: <input type="text" [(ng-model)]="term">
    `
})
export class TodoSearch {
    term:string = "";
}