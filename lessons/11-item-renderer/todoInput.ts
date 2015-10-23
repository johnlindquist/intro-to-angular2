import {Component, FORM_DIRECTIVES} from "angular2/angular2";
import {TodoService, TodoModel} from "./todoService";
@Component({
    selector: 'todo-input',
    directives:[FORM_DIRECTIVES],
    template: `
        <form (ng-submit)="onSubmit()">
            <input type="text" [(ng-model)]="todoModel.title">
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