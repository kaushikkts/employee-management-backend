import prisma from "../../db";
import { Employee } from "../../models/Employee";
export const createEmployeeService = async (employee: Employee) => {
  try {
    return await prisma.employee.create({
      data: {
        userId: employee.userId,
        firstName: employee.firstName,
        lastName: employee.lastName,
        dateOfBirth: new Date(employee.dateOfBirth),
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
            line1: employee.address?.line1,
            line2: employee.address?.line2,
            city: employee.address?.city,
            state: employee.address?.state,
            zip: employee.address?.zip,
          },
        },
      },
      select: {
        id: true,
      },
    });
  } catch (e) {
    throw e;
  }
};

export const getEmployeeService = async (id: string) => {
  try {
    return await prisma.employee.findUnique({
      where: {
        id: id,
      },
      select: {
        id: true,
        userId: true,
        user: {
          select: {
            id: true,
            email: true,
          },
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
      },
    });
  } catch (e) {
    throw e;
  }
};

export const getAllEmployeesService = async () => {
  try {
    return await prisma.employee.findMany({
      select: {
        id: true,
        userId: true,
        user: {
          select: {
            id: true,
            email: true,
          },
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
      },
    });
  } catch (e) {
    throw e;
  }
};

// export const updateEmployeeService = async (employee: Employee) => {
//     try {
//         return await prisma.employee.update({
//             where: {
//                 id: employee.id,
//             },
//             data: {
//
//             },
//         });
//     }
// }
