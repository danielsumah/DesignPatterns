class Developer{
    constructor(name){
        this.name = name;
        this.type = "Developer"
    }
}

class QA{
    constructor(name){
        this.name = name;
        this.type = "QA"
    }
}

class EmployeeFacory{
    create(name, type){
        switch (type) {
            case 1:
                return new Developer(name)
                break;
            case 2:
                return new QA(name)
                break;
            default:
                break;
        }
    }
}

const newEmployee = new EmployeeFacory() // this is used to create all employees

const jimmy = newEmployee.create("Jimmy", 1)
const tammy = newEmployee.create("Tammy",2)

console.log(jimmy)
console.log(tammy)
