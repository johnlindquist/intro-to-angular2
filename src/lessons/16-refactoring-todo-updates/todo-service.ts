import {Injectable} from "angular2/core";
import {TodoModel} from "./todo-model";

@Injectable()
export class TodoService{
    todos:TodoModel[] = [
        new TodoModel("eat"),
        new TodoModel("sleep"),
        new TodoModel("code")
    ];

    addTodo(todo:TodoModel){
        this.todos = [...this.todos, todo];
    }

    toggleTodo(todo:TodoModel){
        todo.toggle();

        const i = this.todos.indexOf(todo);

        this.todos = [
            ...this.todos.slice(0, i),
            todo,
            ...this.todos.slice(i + 1)
        ];
    }
}