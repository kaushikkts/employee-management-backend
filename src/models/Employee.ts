export interface Employee {
  id?: string;
  userId: string;
  firstName: string;
  lastName: string;
  dateOfBirth: Date | string;
  age: number;
  role: string;
  gender: string;
  phone: string;
  isPhoneVerified: boolean;
  isWorking: boolean;
  hireDate: Date;
  resignationDate?: Date;
  resignationReason?: string;
  salary?: Salary;
  department: string;
  position: string;
  email: string;
  password: string;
  address: Address;
  leaves?: Leaves;
}

export interface Address {
  id?: string;
  line1: string;
  line2: string;
  city: string;
  state: string;
  zip: string;
  employeeId: string;
}

export interface Salary {
  id?: string;
  baseSalary: number;
  bonus: number;
  date: Date;
  employeeId: string;
}

export interface Leaves {
  id?: string;
  startDate: Date;
  endDate: Date;
  days: number;
  reason: string;
  employeeId: string;
}
