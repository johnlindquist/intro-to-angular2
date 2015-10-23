import {Component, NgFor} from "angular2/angular2";
import {TodoService} from "./todoService";
import {TodoItemRenderer} from "./todoItemRenderer";
import {StartsWith} from "./startsWith";
import {LetterSelect} from "./letterSelect";
import {TodoSearch} from "./todoSearch";
import {SimpleSearch} from "./simpleSearch";

@Component({
    selector: 'todo-list',
    pipes:[StartsWith, SimpleSearch],
    directives: [NgFor, TodoItemRenderer, LetterSelect, TodoSearch],
    template:`
        <div>
            <todo-search #todo-search></todo-search>
            <todo-item-renderer
  *ng-for="#todo of todoService.todos
  | simpleSearch: ['title', 'action']:todoSearch.term
  "
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