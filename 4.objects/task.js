'use strict';

function Student(name, gender, age) {
    // Ваш код
    this.name = name;
    this.gender = gender;
    this.age = age;
}

let masha = new Student('Мария', 'Ж', 20);
let sasha = new Student('Александр', 'М', 19);
let petya = new Student('Пётр', 'М', 21);
let kolya = new Student('Николай', 'М', 20);

Student.prototype.setSubject = function (subjectName) {
  //ваш код
        this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
    if(this.marks === undefined){
        this.marks = [];
    }
    this.marks.push(mark);
}

Student.prototype.addMarks = function (...addingMarks) {
    if(this.marks === undefined){
        this.marks = [];
    }
    addingMarks.forEach(mark => this.marks.push(mark));
}

Student.prototype.getAverage = function () {
    let sum = this.marks.reduce((a, b) => a + b);
    let average = sum  / this.marks.length;
    return average;
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
}

// ваш код для остальных методов