import {Component, NgFor, FORM_DIRECTIVES} from "angular2/angular2";
import {TodoService} from "./todoService";
import {TodoItemRenderer} from "./todoItemRenderer";
import {StartsWith} from "./startsWith";

@Component({
    selector: 'todo-list',
    pipes:[StartsWith],
    directives: [NgFor, TodoItemRenderer, FORM_DIRECTIVES],
    template:`
        <div>
            <todo-item-renderer
  *ng-for="#todo of todoService.todos | startsWith:'title':selectedLetter"
             [todo]="todo"
             >
            </todo-item-renderer>

            <select [(ng-model)]="selectedLetter">
                <option *ng-for="#letter of letters">{{letter}}</option>
            </select>
        </div>
    `
})
export class TodoList{
    letters:string[] = ["e", "c", "s"];
    selectedLetter:string = "e";
    constructor(
        public todoService:TodoService
    ){}
}