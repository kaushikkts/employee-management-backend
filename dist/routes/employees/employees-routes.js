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
const express_1 = require("express");
const employee_controller_1 = require("../../controllers/employees/employee-controller");
const employeesRoutes = (0, express_1.Router)();
employeesRoutes.get("/employees", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const employees = yield (0, employee_controller_1.getAllEmployeesController)();
        res.status(200).json(employees);
    }
    catch (e) {
        res.status(400).json({ message: "Error getting employees", error: e });
    }
}));
employeesRoutes.get("/employees/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const employee = yield (0, employee_controller_1.getEmployeeController)(id);
        if (!employee) {
            res.status(404).json({ message: "Employee not found" });
            return;
        }
        res.status(200).json(employee);
    }
    catch (e) {
        res.status(400).json({ message: "Error getting employee", error: e });
    }
}));
employeesRoutes.post("/employees", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const employee = req.body;
    try {
        const id = yield (0, employee_controller_1.createEmployeeController)(employee);
        res.status(201).json({ id });
    }
    catch (err) {
        res.status(400).json({ message: "Failed to create employee", error: err });
    }
}));
employeesRoutes.put("/employees/:id", (req, res) => { });
employeesRoutes.delete("/employees/:id", (req, res) => { });
exports.default = employeesRoutes;
