import {Component} from "angular2/core";
import {TodoService} from "./todo-service";

@Component({
    selector:'todo-list',
    template:`<div>
        <ul>
            <li *ngFor="#todo of todoService.todos">
                {{todo.title}}
            </li>
        </ul>
    </div>`
})
export class TodoList{

    constructor(public todoService:TodoService){}
}