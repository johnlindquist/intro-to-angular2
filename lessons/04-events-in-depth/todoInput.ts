import {Component} from "angular2/angular2";

@Component({
    selector: 'todo-input',
    template: `
        <input type="text" #log-me>
        <button on-click="onClick($event, logMe.value)">Log Input</button>
    `
})
export class TodoInput{
    onClick(event, value){
        console.log(event, value);
    }
}