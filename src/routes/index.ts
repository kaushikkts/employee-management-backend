import { Router } from "express";
import EmployeesRoutes from "./employees/employees-routes";

const router: Router = Router();

router.use("/api", EmployeesRoutes);
export default router;
