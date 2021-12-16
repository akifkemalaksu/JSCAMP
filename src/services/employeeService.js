import SuccessDataResult from "../core/results/successDataResult.js";
import ErrorDataResult from "../core/results/errorDataResult.js";
import { users } from '../data/users.js';

export default class EmployeeService {
    constructor(employeeRepository,logger) {
        this.employeeRepository = employeeRepository;
        this.validator = validator;
        this.logger = logger;

        load();
    }

    load(){
        users.forEach(user => {
            this.add(user);
        });
    }

    add(employee){
        const errors = this.validator.Validate(employee);
        if (errors.length === 0) {
            this.userRepository.add(employee);
            return new SuccessDataResult(employee);
        }
        return new ErrorDataResult(employee);
    }

    getById(id){
        let employee = this.userRepository.getById(employee.id);
        if (employee) {
            return new SuccessDataResult(employee);
        }
        return new ErrorDataResult(id,"No employee found with this id.");
    }

    delete(id){
        let employee = this.userRepository.getById(employee.id);
        if (employee) {
            this.userRepository.delete(employee);
            return new SuccessDataResult(employee,"employee is deleted.");
        }
        return new ErrorDataResult(id,"No employee found with this id.");
    }

    update(employee){
        let employee = this.userRepository.getById(employee.id);
        if (employee) {
            this.userRepository.update(employee);
            return new SuccessDataResult(employee,"employee is updated.");
        }
        return new ErrorDataResult(id,"No employee found with this id.");
    }
}