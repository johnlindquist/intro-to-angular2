import {bootstrap, Component} from "angular2/angular2";
import {TodoInput} from "./todoInput";
import {TodoService} from "./todoService";
import {TodoList} from "./todoList";

@Component({
    selector:'app',
    directives: [TodoInput, TodoList],
    template: `
        <div>
        <todo-input></todo-input>
        <todo-list></todo-list>
        </div>
    `
})
class App{}

bootstrap(App, [TodoService]);