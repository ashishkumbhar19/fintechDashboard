import React, { useState } from "react";

const mockData = Array.from({ length: 100 }, (_, index) => ({
  id: index + 1,
  name: `Record ${index + 1}`,
  description: `Description for Record ${index + 1}`,
}));

function Dashboard() {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;

  // Calculate the index of the first and last record to display
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = mockData.slice(indexOfFirstRecord, indexOfLastRecord);

  // Handle next page and previous page actions
  const handleNext = () => {
    if (currentPage < Math.ceil(mockData.length / recordsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="flex flex-col p-6">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>

      {/* Display records */}
      <div className="bg-white shadow-lg rounded-lg p-4">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2 border">ID</th>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Description</th>
            </tr>
          </thead>
          <tbody>
            {currentRecords.map((record) => (
              <tr key={record.id}>
                <td className="px-4 py-2 border">{record.id}</td>
                <td className="px-4 py-2 border">{record.name}</td>
                <td className="px-4 py-2 border">{record.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between mt-4">
        <button
          onClick={handlePrev}
          className="bg-indigo-700 text-white py-2 px-4 rounded-lg hover:bg-indigo-800 disabled:opacity-50"
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="flex items-center justify-center text-lg">
          Page {currentPage} of {Math.ceil(mockData.length / recordsPerPage)}
        </span>
        <button
          onClick={handleNext}
          className="bg-indigo-700 text-white py-2 px-4 rounded-lg hover:bg-indigo-800 disabled:opacity-50"
          disabled={currentPage === Math.ceil(mockData.length / recordsPerPage)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
