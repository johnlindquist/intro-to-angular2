export class TodoService{
    todos:string[] = [];

    addTodo(value:any):void {
        this.todos.push(value);
    }
}