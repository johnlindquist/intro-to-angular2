import {Component} from "angular2/angular2";

@Component({
    selector: 'todo-input',
    template: `
        <input type="text" #log-me>
        <button (click)="onClick(logMe.value)">Log Input</button>
    `
})
export class TodoInput{
    onClick(value){
        console.log(value);
    }
}