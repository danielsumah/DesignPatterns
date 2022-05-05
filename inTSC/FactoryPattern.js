// helps to singularize the creation of objects
var Developer = /** @class */ (function () {
    function Developer(name) {
        this.name = name;
        this.type = "Developer";
    }
    return Developer;
}());
var QA = /** @class */ (function () {
    function QA(name) {
        this.name = name;
        this.type = "QA";
    }
    return QA;
}());
var employeeFactory = /** @class */ (function () {
    function employeeFactory() {
    }
    employeeFactory.prototype.create = function (name, type) {
        switch (type) {
            case 1:
                return new Developer(name);
                break;
            case 2:
                return new QA(name);
                break;
            default:
                break;
        }
    };
    return employeeFactory;
}());
var employee = new employeeFactory();
var rachel = employee.create("Rachel", 1);
var yung = employee.create("Yung", 2);
console.log(rachel, yung);
