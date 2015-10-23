import {Pipe} from "angular2/angular2";


@Pipe({
    name: 'simpleSearch',
    pure: false
})
export class SimpleSearch{
    transform(value, [field, letter]:[string, string]){

        return value.filter((item)=> item[field].includes(letter));
    }
}