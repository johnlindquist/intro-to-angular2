import {bootstrap, Component} from "angular2/angular2";
import {TodoInput} from "./todoInput";

@Component({
    selector:'app',
    directives: [TodoInput],
    template: `
        <div><todo-input></todo-input></div>
    `
})
class App{}

bootstrap(App);