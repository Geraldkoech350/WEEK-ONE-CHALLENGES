// create a class called FourthYearStudent
// add constructor to it

class FourthYearStudent {
    constructor(name, age, units){
        this.name= name;
        this.age = age;
        this.units = units;
    }

    // static
    static YearOfStudy(){
        return 4;
    }

    //Method 
     StudentAge(){
        return this.age;
    }
}
let student=new FourthYearStudent("Gerald",22,["java","javascript", "Python", "SQL", "Penetration testing"]);

console.log(student.age);
console.log(student.name);
console.log(student.units);
console.log(student.StudentAge());
console.log(FourthYearStudent.YearOfStudy());

