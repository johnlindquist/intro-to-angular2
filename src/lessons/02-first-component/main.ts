import {bootstrap} from "angular2/platform/browser";
import {Component} from "angular2/core";
import {TodoInput} from "./todo-input";

@Component({
    selector: 'app',
    directives: [TodoInput],
    template: `<div>
        <todo-input></todo-input>
    </div>`
})
class App{}

bootstrap(App);