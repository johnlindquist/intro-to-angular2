import {Component, FORM_DIRECTIVES, NgFor} from "angular2/angular2";

@Component({
    selector: 'letter-select',
    directives: [FORM_DIRECTIVES, NgFor],
    template: `
    <select [(ng-model)]="selectedLetter">
        <option *ng-for="#letter of letters">{{letter}}</option>
    </select>
    `
})
export class LetterSelect {
    letters:string[] = ["e", "c", "s"];
    selectedLetter:string = "e";
}