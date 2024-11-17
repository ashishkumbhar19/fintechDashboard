import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";

function Dashboard() {
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [regionData, setRegionData] = useState(null);

  // Fetch the data based on the selected region
  const fetchRegionData = (region) => {
    const regionNames = region.split(" - "); // Split region into continent and country
    console.log("Fetching data for region: ", regionNames); // Debug log

    fetch("/response1.json") // Path to the JSON file in public folder
      .then((response) => response.json())
      .then((data) => {
        const regionContent = data[regionNames[0]]?.[regionNames[1]]; // Access the data dynamically
        console.log("Fetched data: ", regionContent); // Debug log
        setRegionData(regionContent); // Set the content for the selected region
      })
      .catch((error) => console.error("Error fetching data: ", error));
  };

  // Handle region selection
  const handleRegionSelect = (region) => {
    setSelectedRegion(region); // Update selected region
    fetchRegionData(region); // Fetch data for the selected region
  };

  return (
    <div className="flex">
      <Sidebar setSelectedRegion={handleRegionSelect} />
      <div className="flex-1 p-6 bg-gray-100">
        {selectedRegion && (
          <div className="text-2xl font-bold mb-4">Data for {selectedRegion}</div>
        )}

        {/* Conditional Rendering for Region Data */}
        {regionData ? (
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse border border-gray-300">
              <thead>
                <tr>
                  <th className="px-4 py-2 border-b">Category</th>
                  <th className="px-4 py-2 border-b">Value</th>
                  <th className="px-4 py-2 border-b">Description</th>
                  <th className="px-4 py-2 border-b">Date</th>
                  <th className="px-4 py-2 border-b">Status</th>
                </tr>
              </thead>
              <tbody>
                {regionData.map((data, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2 border-b">{data.category}</td>
                    <td className="px-4 py-2 border-b">{data.value}</td>
                    <td className="px-4 py-2 border-b">{data.description}</td>
                    <td className="px-4 py-2 border-b">{data.date}</td>
                    <td className="px-4 py-2 border-b">{data.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p>Select a region to see the data.</p>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
