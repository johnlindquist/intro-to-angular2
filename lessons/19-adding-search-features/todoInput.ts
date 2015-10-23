import {Component, FORM_DIRECTIVES} from "angular2/angular2";
import {TodoService, TodoModel} from "./todoService";
@Component({
    selector: 'todo-input',
    directives:[FORM_DIRECTIVES],
    styles:[
        `
            form{
                border-bottom: 1px solid black;
                display: flex;
                flex-direction: column;
                margin-bottom: 10px;
                padding-bottom: 10px;
            }
        `
    ],
    template: `
        <form (ng-submit)="onSubmit()">
            Title: <input #title type="text" [(ng-model)]="todoModel.title">
            Action: <input type="text" [(ng-model)]="todoModel.action">
            <button type="submit" (click)="title.focus()">Add Todo</button>
        </form>
    `
})
export class TodoInput{
    todoModel:TodoModel = new TodoModel();

    constructor(
        public todoService:TodoService
    ){}

    onSubmit(){
        this.todoService.addTodo(this.todoModel);
        this.todoModel = new TodoModel();
    }
}