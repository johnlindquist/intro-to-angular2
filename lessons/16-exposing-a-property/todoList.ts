import {Component, NgFor} from "angular2/angular2";
import {TodoService} from "./todoService";
import {TodoItemRenderer} from "./todoItemRenderer";
import {StartsWith} from "./startsWith";
import {LetterSelect} from "./letterSelect";

@Component({
    selector: 'todo-list',
    pipes:[StartsWith],
    directives: [NgFor, TodoItemRenderer, LetterSelect],
    template:`
        <div>
            <todo-item-renderer
  *ng-for="#todo of todoService.todos | startsWith:'title':letterSelect.selectedLetter"
             [todo]="todo"
             >
            </todo-item-renderer>
            <letter-select #letter-select></letter-select>
        </div>
    `
})
export class TodoList{

    constructor(
        public todoService:TodoService
    ){}
}