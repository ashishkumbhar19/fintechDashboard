// import React, { useState } from "react";
// import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
// import Navbar from "../src/components/Navbar";
// import Login from "../src/pages/Login";
// import Dashboard from "../src/components/Dashboard";

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   return (
//     <Router>
//       {/* Navbar remains consistent across all pages */}
//       <Navbar />
//       <Routes>
//         {/* Login route */}
//         <Route
//           path="/"
//           element={<Login setIsAuthenticated={setIsAuthenticated} />}
//         />
//         {/* Dashboard route with conditional rendering based on authentication */}
//         <Route
//           path="/dashboard"
//           element={
//             isAuthenticated ? <Dashboard /> : <Navigate to="/" replace />
//           }
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";  // Navbar component
import Login from "./pages/Login";         // Login page
import Dashboard from "./components/Dashboard";  // Dashboard page with category dropdown

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      {/* Navbar remains consistent across all pages */}
      <Navbar />
      
      <Routes>
        {/* Login route */}
        <Route
          path="/"
          element={<Login setIsAuthenticated={setIsAuthenticated} />}
        />
        {/* Dashboard route with conditional rendering based on authentication */}
        <Route
          path="/dashboard"
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/" replace />}
        />
      </Routes>
    </Router>
  );
}

export default App;
