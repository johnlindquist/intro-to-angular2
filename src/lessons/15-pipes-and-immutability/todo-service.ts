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
}