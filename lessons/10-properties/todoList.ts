import {Component, NgFor} from "angular2/angular2";
import {TodoService} from "./todoService";

@Component({
    selector: 'todo-list',
    directives: [NgFor],
    template:`
        <div>
            <div *ng-for="#todo of todoService.todos">
            <span [hidden]="todo.status == 'completed'">{{todo.title}}</span>
            <button (click)="todo.toggle()">Toggle</button>
            </div>
        </div>
    `
})
export class TodoList{
    constructor(
        public todoService:TodoService
    ){}
}