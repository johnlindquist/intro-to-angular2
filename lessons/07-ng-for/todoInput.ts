import {Component} from "angular2/angular2";
import {TodoService} from "./todoService";
@Component({
    selector: 'todo-input',
    template: `
        <input type="text" #log-me>
        <button on-click="onClick($event, logMe.value)">Log Input</button>
    `
})
export class TodoInput{

    constructor(
        public todoService:TodoService
    ){
        console.log(todoService);
    }

    onClick(event, value){
        this.todoService.addTodo(value);
        console.log(this.todoService.todos);
    }
}