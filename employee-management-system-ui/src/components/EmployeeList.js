import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import EmployeeService from '../services/EmployeeService';
import Employee from './Employee';

const EmployeeList = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [employees, setemployees] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await EmployeeService.getEmployees();
        setemployees(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  },[]);

  const deleteEmployee = (e, id) => {
    e.preventDefault();
    EmployeeService.deleteEmployee(id).then((res) => {
      if(employees) {
        setemployees((prevElement) => {
          return prevElement.filter((employee) => employee.id !== id)
        })
      }
    });

  };
  
  return (
    <div className="container mx-auto my-8">
        <div>
            <button 
              className="bg-slate-600 hover:bg-slate-800 text-white py-2 px-4 rounded text-center"
              onClick ={() => navigate("/addEmployee")}>
              Add Employee
            </button>
        </div>
        <div className="flex shado border-b py-2">
          <table className="table table-striped min-w-full">
            <thead className="bg-gray-100">
              <tr className="text-left font-medium text-gray-500 uppercase tracking-wider py-6 px-6 h-10">
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email Id</th>
                <th className="text-right">Actions</th>
              </tr>
            </thead>
            {!loading && (
              <tbody>
                {
                  employees.map((employee) => (
                    <Employee employee={employee} key={employee.id} deleteEmployee={deleteEmployee}></Employee>
                ))}
              </tbody>
            )}
          </table>
        </div>
    </div>
  )
}

export default EmployeeList