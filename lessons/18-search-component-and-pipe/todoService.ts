export class TodoModel{
    static STARTED:string = "started";
    static COMPLETED:string = "completed";
    status:string = TodoModel.STARTED;

    constructor(
        public title:string = ""
    ){}

    toggle():void{
        if(this.status == TodoModel.STARTED) this.status = TodoModel.COMPLETED;
        else this.status = TodoModel.STARTED;
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