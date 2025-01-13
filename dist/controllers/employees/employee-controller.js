"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllEmployeesController = exports.getEmployeeController = exports.createEmployeeController = void 0;
const employees_service_1 = require("../../services/employees/employees-service");
const createEmployeeController = (employee) => __awaiter(void 0, void 0, void 0, function* () {
    // Implementation
    try {
        employee.dateOfBirth = new Date(employee.dateOfBirth);
        return yield (0, employees_service_1.createEmployeeService)(employee);
    }
    catch (e) {
        throw e;
    }
});
exports.createEmployeeController = createEmployeeController;
const getEmployeeController = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield (0, employees_service_1.getEmployeeService)(id);
    }
    catch (e) {
        throw e;
    }
});
exports.getEmployeeController = getEmployeeController;
const getAllEmployeesController = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield (0, employees_service_1.getAllEmployeesService)();
    }
    catch (e) {
        throw e;
    }
});
exports.getAllEmployeesController = getAllEmployeesController;
