import {Component, Inject} from "angular2/core";
import {TodoService} from "./todo-service";

@Component({
    selector: 'todo-input',
    template: `<div>
    <form (submit)="onSubmit()">
        <input type="text" [(ngModel)]="todoModel">
    </form>
    </div>`
})
export class TodoInput{
    todoModel;

    constructor(public todoService:TodoService){

    }

    onSubmit(){
        this.todoService.todos.push(this.todoModel);
        console.log(this.todoService.todos);
    }
}