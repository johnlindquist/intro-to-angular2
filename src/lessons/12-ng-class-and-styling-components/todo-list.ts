import {Component} from "angular2/core";
import {TodoService} from "./todo-service";
import {TodoItemRenderer} from "./todo-item-renderer";
@Component({
    selector:'todo-list',
    directives: [TodoItemRenderer],
    template:`<div>
        <ul>
            <li *ngFor="#todo of todoService.todos">
                <todo-item-renderer [todo]="todo"></todo-item-renderer>
            </li>
        </ul>
    </div>`
})
export class TodoList{
    constructor(public todoService:TodoService){}
}