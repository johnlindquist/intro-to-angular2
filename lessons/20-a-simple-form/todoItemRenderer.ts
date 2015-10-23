import {Component, Input, NgClass} from "angular2/angular2";
import {TodoModel} from "./todoService";
@Component({
    selector: 'todo-item-renderer',
    directives:[NgClass],
    styles:[`
        .started{
            color: green;
        }

        .completed{
            text-decoration: line-through;
        }
    `],
    template: `
        <div>
            <span [ng-class]="todo.status">
            {{todo.title}} | {{todo.action}}
            </span>
            <button (click)="todo.toggle()">Toggle</button>
        </div>
    `
})
export class TodoItemRenderer {
    @Input() todo:TodoModel;
}