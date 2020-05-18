import {Student,Teacher } from "js/PersonLib.js";
export class Fabric {
    createStudent(name){
        return new Student(name);
    }
    createTeacher(name){
        return new Teacher(name);
    }
    createPerson(name){
        return new Person(name);
    }
    create(name,type){
        let block;
        switch(type){
            case "Student": block = this.createStudent(name); break;
            case "Teacher": block = this.createTeacher(name); break;  
            default: block = this.createPerson(name); break;  
        }
        return block;
    }
}
