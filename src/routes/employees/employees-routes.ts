import { Router } from "express";
import { Employee } from "../../models/Employee";
import {
  createEmployeeController,
  getAllEmployeesController,
  getEmployeeController,
} from "../../controllers/employees/employee-controller";

const employeesRoutes: Router = Router();

employeesRoutes.get("/employees", async (req, res) => {
  try {
    const employees = await getAllEmployeesController();
    res.status(200).json(employees);
  } catch (e) {
    res.status(400).json({ message: "Error getting employees", error: e });
  }
});

employeesRoutes.get("/employees/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const employee = await getEmployeeController(id);
    if (!employee) {
      res.status(404).json({ message: "Employee not found" });
      return;
    }
    res.status(200).json(employee);
  } catch (e) {
    res.status(400).json({ message: "Error getting employee", error: e });
  }
});

employeesRoutes.post("/employees", async (req, res) => {
  const employee: Employee = req.body;
  try {
    const id = await createEmployeeController(employee);
    res.status(201).json({ id });
  } catch (err: any) {
    console.log(err)
    res.status(400).json({ message: "Failed to create employee", error: err });
  }
});

employeesRoutes.put("/employees/:id", (req, res) => {});

employeesRoutes.delete("/employees/:id", (req, res) => {});

export default employeesRoutes;
