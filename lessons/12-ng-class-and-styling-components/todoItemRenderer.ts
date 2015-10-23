import {Component, Input, NgClass} from "angular2/angular2";
import {TodoModel} from "./todoService";
@Component({
    selector: 'todo-item-renderer',
    directives:[NgClass],
    styles:[`
        .${TodoModel.STARTED}{
            color: green;
        }

        .${TodoModel.COMPLETED}{
            text-decoration: line-through;
        }
    `],
    template: `
        <div>
            <span [ng-class]="todo.status">{{todo.title}}</span>
            <button (click)="todo.toggle()">Toggle</button>
        </div>
    `
})
export class TodoItemRenderer {
    @Input() todo:TodoModel;
}