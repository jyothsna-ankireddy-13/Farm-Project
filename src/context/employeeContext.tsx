import { createContext, useEffect, useState } from "react";
import utils from "../utils/utils.json";

export const EmployeeContext = createContext(utils);
const EmployeeContextProvider = (props: any) => {
  const [employees, setEmployees] = useState([
    {
      id: "1",
      employeeName: "Rahul Singh",
      jobTitle: "CEO",
      inTime: "3",
      outTime: "2",
      totalTime: "6",
      inOfficeHours: "20",
      leaveType: "Normal",
      inGeoTag: "Mumbai",
      outGeoTag: "Mumbai",
      firstInTime: "0",
      lastestOutTime: "0",
      latestInTimme: "0",
      present: "20",
      absent: "8",
      onLeave: "8",
      location: "Noida",
      holidays: "No",
      employeeCode: "1",
      employeeType: "Full-time Hourly",
      employeeManager: "Kamal Gupta",
      department: "ASDDF",
      employeeStatus: "Active",
      workingDayType: "Office",
      timeoffLeavePolicy: "ABCDEF",
      timeoffLeaveApprovedBy: "Manager",
      holidaysType: "Casual",
    },
    {
      id: "2",
      employeeName: "Harshit Sharma",
      jobTitle: "Developer",
      inTime: "19",
      outTime: "6",
      totalTime: "8",
      inOfficeHours: "50",
      leaveType: "Casual",
      inGeoTag: "Delhi",
      outGeoTag: "Delhi",
      firstInTime: "0",
      lastestOutTime: "0",
      latestInTimme: "0",
      present: "20",
      absent: "8",
      onLeave: "8",
      location: "Noida",
      holidays: "No",
      employeeCode: "108",
      employeeType: "Full-time Hourly",
      employeeManager: "Kamal Gupta",
      department: "ASDDF",
      employeeStatus: "Active",
      workingDayType: "Office",
      timeoffLeavePolicy: "ABCDEF",
      timeoffLeaveApprovedBy: "Manager",
      holidaysType: "Casual",
    },
    {
      id: "3",
      employeeName: "Kamal Gupta",
      jobTitle: "Manager",
      inTime: "8",
      outTime: "5",
      totalTime: "10",
      inOfficeHours: "80",
      leaveType: "Sick",
      inGeoTag: "Noida",
      outGeoTag: "Noida",
      firstInTime: "0",
      lastestOutTime: "0",
      latestInTimme: "0",
      present: "20",
      absent: "8",
      onLeave: "8",
      location: "Noida",
      holidays: "No",
      employeeCode: "345",
      employeeType: "Full-time Hourly",
      employeeManager: "Kamal Gupta",
      department: "ASDDF",
      employeeStatus: "Active",
      workingDayType: "Office",
      timeoffLeavePolicy: "ABCDEF",
      timeoffLeaveApprovedBy: "Manager",
      holidaysType: "Casual",
    },
  ]);

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  });

  useEffect(() => {
    setEmployees(JSON.parse(localStorage.getItem("employees") || ""));
  }, []);

  const sortedEmployees = [employees].sort((a: any, b: any) =>
    a.employeeName < b.employeeName ? -1 : 1
  );

  const updateEmployee = (id: any, updatedEmployee: any) => {
    setEmployees(
      employees.map((employee) =>
        employee.id === id ? updatedEmployee : employee
      )
    );
  };

  return (
    <EmployeeContext.Provider value={{ updateEmployee }}>
      {props.children}
    </EmployeeContext.Provider>
  );
};
export default EmployeeContextProvider;