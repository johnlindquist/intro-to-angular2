import {Pipe} from "angular2/core";

@Pipe({
    name: "search"
})
export class SearchPipe{
    transform(value){
        return value.filter((item)=> item.title.startsWith('s'));
    }
}