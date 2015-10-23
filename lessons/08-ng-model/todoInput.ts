import {Component, FORM_DIRECTIVES} from "angular2/angular2";
import {TodoService} from "./todoService";
@Component({
    selector: 'todo-input',
    directives:[FORM_DIRECTIVES],
    template: `
        <form (ng-submit)="onSubmit()">
            <input type="text" [(ng-model)]="todoModel"> {{todoModel}}
        </form>
    `
})
export class TodoInput{
    todoModel;

    constructor(
        public todoService:TodoService
    ){
        console.log(todoService);
    }

    onSubmit(){
        this.todoService.addTodo(this.todoModel);
    }
}