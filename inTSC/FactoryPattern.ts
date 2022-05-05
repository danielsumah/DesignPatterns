// helps to singularize the creation of objects

class Developer{
    name : string;
    type : string;
    constructor(name:string){
        this.name = name;
        this.type = "Developer"
    }
}

class QA{
    name : string;
    type : string;
    constructor(name:string){
        this.name = name;
        this.type = "QA"
    }
}

class employeeFactory{
    create (name:string, type: number){
        switch (type) {
            case 1:
                return new Developer(name)
                break;
            case 2:
                return new QA(name)
                break
            default:
                break;
        }
    }
}

const employee  = new employeeFactory();

const rachel = employee.create("Rachel",1);
const yung = employee.create("Yung", 2);

console.log(rachel, yung)