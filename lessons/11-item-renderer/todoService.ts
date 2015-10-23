export class TodoModel{
    status:string = "started";

    constructor(
        public title:string = ""
    ){}

    toggle():void{
        if(this.status == "started") this.status = "completed";
        else this.status = "started";
    }
}



export class TodoService{
    todos:TodoModel[] = [
        new TodoModel("eat"),
        new TodoModel("sleep"),
        new TodoModel("code")
    ];

    addTodo(value:TodoModel):void {
        this.todos.push(value);
    }
}