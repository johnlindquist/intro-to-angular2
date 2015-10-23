import {Component, NgFor} from "angular2/angular2";
import {TodoService} from "./todoService";
import {TodoItemRenderer} from "./todoItemRenderer";
import {StartsWith} from "./startsWith";
import {LetterSelect} from "./letterSelect";
import {TodoSearch} from "./todoSearch";
import {SimpleSearch} from "./simpleSearch";
import {FieldForm} from "./fieldForm";

@Component({
    selector: 'todo-list',
    pipes:[StartsWith, SimpleSearch],
    directives: [FieldForm, NgFor, TodoItemRenderer, LetterSelect, TodoSearch],
    template:`
        <div>
            <field-form #field-form></field-form>
            <todo-search #todo-search></todo-search>
            <todo-item-renderer
  *ng-for="#todo of todoService.todos
  | simpleSearch: fieldForm.selectedFields:todoSearch.term
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