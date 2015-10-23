import {Component, Inject} from "angular2/angular2";
import {TodoService} from "./todoService";
@Component({
    selector: 'todo-input',
    template: `
        <input type="text" #log-me>
        <button on-click="onClick($event, logMe.value)">Log Input</button>
    `
})
export class TodoInput{
    todoService;
    constructor(
        @Inject(TodoService) todoService
    ){
        this.todoService = todoService;
        console.log(todoService);
    }

    onClick(event, value){
        this.todoService.addTodo(value);
        console.log(this.todoService.todos);
    }
}