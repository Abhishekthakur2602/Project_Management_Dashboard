import { FaHome, FaTasks, FaProjectDiagram, FaUsers } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-[250px] bg-gray-900 text-white min-h-screen p-5">
      <h1 className="text-2xl font-bold mb-10">PM Dashboard</h1>

      <ul className="space-y-6">
        <li className="flex items-center gap-3 cursor-pointer hover:text-blue-400">
          <FaHome />
          Dashboard
        </li>

        <li className="flex items-center gap-3 cursor-pointer hover:text-blue-400">
          <FaTasks />
          Tasks
        </li>

        <li className="flex items-center gap-3 cursor-pointer hover:text-blue-400">
          <FaProjectDiagram />
          Projects
        </li>

        <li className="flex items-center gap-3 cursor-pointer hover:text-blue-400">
          <FaUsers />
          Team
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
