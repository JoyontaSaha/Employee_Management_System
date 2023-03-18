import React from 'react'
import { useNavigate } from 'react-router-dom'


const Employee = ({ employee, deleteEmployee }) => {
    const navigate = useNavigate();

    const editEmployee = (e, id) => {
        e.preventDefault();
        navigate(`/editEmployee/${id}`);
    };

  return (
    <tr key={employee.id} className="text-left px-6 whitespace-nowrap text-sm text-gray-500">
        <td>{employee.firstName}</td>
        <td>{employee.lastName}</td>
        <td>{employee.emailId}</td>
        <td className="py-3 text-right text-indigo-400 hover:text-indigo-800">
            <a onClick={(e, id) => editEmployee(e, employee.id)} className="px-4 hover:cursor-pointer">Edit</a>
            <a onClick={(e, id) => deleteEmployee(e, employee.id)} className="px-4 hover:cursor-pointer">Delete</a>
        </td>
    </tr>
  )
}

export default Employee