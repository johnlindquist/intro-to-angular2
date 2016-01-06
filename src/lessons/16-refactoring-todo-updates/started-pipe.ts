import {Pipe} from "angular2/core";

@Pipe({
    name: "started"
})
export class StartedPipe{
    transform(value){
        return value.filter((item)=> item.status === "started");
    }
}