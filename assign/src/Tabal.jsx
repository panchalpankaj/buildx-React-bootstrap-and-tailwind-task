import React from 'react';

const Tabal = () => {
  const data = [
    { id: 26, name: 'Unish', designation: 'Software Engineer', contact: '7896545123', workProfile: 'Frontend Developer' },
    { id: 36, name: 'Hiren', designation: 'Project Manager', contact: '9789654123', workProfile: 'Project Coordination' },
    { id: 78, name: 'Pankaj', designation: 'UI/UX Designer', contact: '7854123567', workProfile: 'UI/UX Design' },
    { id: 28, name: 'Jigar', designation: 'Backend Developer', contact: '8965123111', workProfile: 'Backend Development' },
    { id: 55, name: 'Hardik', designation: 'QA Engineer', contact: '6278654123', workProfile: 'Testing' },
    { id: 70, name: 'Jayesh', designation: 'DevOps Engineer', contact: '7896542377', workProfile: 'Infrastructure Management' },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen p-4 bg-gray-50">
      <div className="w-full max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-8">EMPLOYEE DETAIL</h1>
        <table className="min-w-full bg-white shadow-md rounded-md">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-3 px-6 text-center">Code Number</th>
              <th className="py-3 px-6 text-center">Name</th>
              <th className="py-3 px-6 text-center">Designation</th>
              <th className="py-3 px-6 text-center">Contact Detail</th>
              <th className="py-3 px-6 text-center">Work Profile</th>
            </tr>
          </thead>
          <tbody>
            {data.map((employee, index) => (
              <tr key={employee.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}>
                <td className="py-3 px-6 text-center">{employee.id}</td>
                <td className="py-3 px-6 text-center">{employee.name}</td>
                <td className="py-3 px-6 text-center">{employee.designation}</td>
                <td className="py-3 px-6 text-center">{employee.contact}</td>
                <td className="py-3 px-6 text-center">{employee.workProfile}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tabal;
