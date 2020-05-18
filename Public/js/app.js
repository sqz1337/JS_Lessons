import {Fabric} from "js/PersonLib.js";
import {School} from 'js/School.js';

let fabric = new Fabric();
let school = new School(fabric);

school.addStudent('Ivan Ivanov');
school.addStudent('Lera');
school.addTeacher('Pavel Sidorovich');

let layout = school.appendToDOM(document.body);//students to dom

