import {Pipe} from "angular2/angular2";


@Pipe({
    name: 'simpleSearch',
    pure: false
})
export class SimpleSearch{
    transform(value, [fields, letter]:[string[], string]){

        return value.filter((item)=>
            fields.some((field)=>
                item[field].includes(letter)
            ));
    }
}