import {Component, NgFor} from "angular2/angular2";
import {TodoService} from "./todoService";
import {TodoItemRenderer} from "./todoItemRenderer";
import {StartsWith} from "./startsWith";

@Component({
    selector: 'todo-list',
    pipes:[StartsWith],
    directives: [NgFor, TodoItemRenderer],
    template:`
        <div>
            <todo-item-renderer
  *ng-for="#todo of todoService.todos | startsWith:'title':'e'"
             [todo]="todo"
             >
            </todo-item-renderer>
        </div>
    `
})
export class TodoList{
    constructor(
        public todoService:TodoService
    ){}
}