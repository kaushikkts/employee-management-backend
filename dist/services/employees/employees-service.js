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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllEmployeesService = exports.getEmployeeService = exports.createEmployeeService = void 0;
const db_1 = __importDefault(require("../../db"));
const createEmployeeService = (employee) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e;
    try {
        return yield db_1.default.employee.create({
            data: {
                userId: employee.userId,
                firstName: employee.firstName,
                lastName: employee.lastName,
                dateOfBirth: employee.dateOfBirth,
                age: employee.age,
                //@ts-ignore
                role: employee.role,
                //@ts-ignore
                gender: employee.gender,
                phone: employee.phone,
                isPhoneVerified: false,
                isWorking: true,
                hireDate: new Date(),
                address: {
                    create: {
                        line1: (_a = employee.address) === null || _a === void 0 ? void 0 : _a.line1,
                        line2: (_b = employee.address) === null || _b === void 0 ? void 0 : _b.line2,
                        city: (_c = employee.address) === null || _c === void 0 ? void 0 : _c.city,
                        state: (_d = employee.address) === null || _d === void 0 ? void 0 : _d.state,
                        zip: (_e = employee.address) === null || _e === void 0 ? void 0 : _e.zip,
                    }
                }
            },
            select: {
                id: true
            }
        });
    }
    catch (e) {
        throw e;
    }
});
exports.createEmployeeService = createEmployeeService;
const getEmployeeService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield db_1.default.employee.findUnique({
            where: {
                id: id
            },
            select: {
                id: true,
                userId: true,
                user: {
                    select: {
                        id: true,
                        email: true,
                    }
                },
                firstName: true,
                lastName: true,
                dateOfBirth: true,
                age: true,
                role: true,
                gender: true,
                phone: true,
                isPhoneVerified: true,
                isWorking: true,
                hireDate: true,
                resignationDate: true,
                resignationReason: true,
                address: true,
            }
        });
    }
    catch (e) {
        throw e;
    }
});
exports.getEmployeeService = getEmployeeService;
const getAllEmployeesService = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield db_1.default.employee.findMany({
            select: {
                id: true,
                userId: true,
                user: {
                    select: {
                        id: true,
                        email: true,
                    }
                },
                firstName: true,
                lastName: true,
                dateOfBirth: true,
                age: true,
                role: true,
                gender: true,
                phone: true,
                isPhoneVerified: true,
                isWorking: true,
                hireDate: true,
                resignationDate: true,
                resignationReason: true,
                salary: true,
                address: true,
            }
        });
    }
    catch (e) {
        throw e;
    }
});
exports.getAllEmployeesService = getAllEmployeesService;
