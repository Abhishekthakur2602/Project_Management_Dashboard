import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";

import Projects from "./pages/Projects";
import Tasks from "./pages/Tasks";
import Team from "./pages/Team";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/projects" element={<Projects />} />

      <Route path="/tasks" element={<Tasks />} />

      <Route path="/team" element={<Team />} />
    </Routes>
  );
}

export default App;
