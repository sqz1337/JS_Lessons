import {Person} from 'js/Person.js';
export class Teacher extends Person{
    constructor(name){
        super(name);
        this.type = "Teacher"; 
    }
}