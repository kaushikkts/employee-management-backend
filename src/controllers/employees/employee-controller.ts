import { Employee } from "../../models/Employee";
import {
  createEmployeeService,
  getAllEmployeesService,
  getEmployeeService,
} from "../../services/employees/employees-service";

export const createEmployeeController = async (employee: Employee) => {
  // Implementation
  try {
    return await createEmployeeService(employee);
  } catch (e) {
    throw e;
  }
};

export const getEmployeeController = async (id: string) => {
  try {
    return await getEmployeeService(id);
  } catch (e) {
    throw e;
  }
};

export const getAllEmployeesController = async () => {
  try {
    return await getAllEmployeesService();
  } catch (e) {
    throw e;
  }
};
