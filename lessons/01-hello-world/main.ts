import {bootstrap, Component} from "angular2/angular2";

@Component({
    selector:'app',
    template: `
        <div>My first Angular 2 App</div>
    `
})
class App{}

bootstrap(App);