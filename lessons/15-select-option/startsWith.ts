import {Pipe} from "angular2/angular2";


@Pipe({
    name: 'startsWith'
})
export class StartsWith{
    transform(value, [field, letter]:[string, string]){

        return value.filter((item)=> item[field].startsWith(letter));
    }
}