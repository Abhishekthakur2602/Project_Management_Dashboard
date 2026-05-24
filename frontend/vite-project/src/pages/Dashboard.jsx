import { FaTasks, FaUsers, FaProjectDiagram, FaChartBar } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-[#0f172a] text-white">
      {/* Sidebar */}
      <div className="w-[260px] bg-[#111827] p-6">
        <h1 className="text-3xl font-bold mb-10 text-blue-400">PM Dashboard</h1>

        <ul className="space-y-6">
          <li className="flex items-center gap-3 hover:text-blue-400 cursor-pointer">
            <FaChartBar />
            Dashboard
          </li>

          <li className="flex items-center gap-3 hover:text-blue-400 cursor-pointer">
            <FaTasks />
            Tasks
          </li>

          <li className="flex items-center gap-3 hover:text-blue-400 cursor-pointer">
            <FaProjectDiagram />
            Projects
          </li>

          <li className="flex items-center gap-3 hover:text-blue-400 cursor-pointer">
            <FaUsers />
            Team
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Top Navbar */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-4xl font-bold">Project Dashboard</h1>

            <p className="text-gray-400 mt-2">
              Manage projects and team productivity
            </p>
          </div>

          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search..."
              className="bg-[#1e293b] px-4 py-2 rounded-lg outline-none"
            />

            <img
              src="https://i.pravatar.cc/45"
              alt="profile"
              className="rounded-full"
            />
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-4 gap-6">
          <div className="bg-gradient-to-r from-blue-500 to-blue-700 p-6 rounded-2xl shadow-xl">
            <h2 className="text-lg">Total Projects</h2>
            <p className="text-4xl font-bold mt-4">12</p>
          </div>

          <div className="bg-gradient-to-r from-green-500 to-green-700 p-6 rounded-2xl shadow-xl">
            <h2 className="text-lg">Completed Tasks</h2>
            <p className="text-4xl font-bold mt-4">34</p>
          </div>

          <div className="bg-gradient-to-r from-yellow-500 to-orange-600 p-6 rounded-2xl shadow-xl">
            <h2 className="text-lg">Pending Tasks</h2>
            <p className="text-4xl font-bold mt-4">18</p>
          </div>

          <div className="bg-gradient-to-r from-pink-500 to-red-600 p-6 rounded-2xl shadow-xl">
            <h2 className="text-lg">Employees</h2>
            <p className="text-4xl font-bold mt-4">8</p>
          </div>
        </div>

        {/* Recent Tasks Section */}
        <div className="mt-10 bg-[#1e293b] p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-5">Recent Tasks</h2>

          <div className="space-y-4">
            <div className="bg-[#0f172a] p-4 rounded-xl flex justify-between">
              <div>
                <h3 className="font-semibold">Design Dashboard UI</h3>

                <p className="text-gray-400 text-sm">Assigned to Rahul</p>
              </div>

              <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm">
                In Progress
              </span>
            </div>

            <div className="bg-[#0f172a] p-4 rounded-xl flex justify-between">
              <div>
                <h3 className="font-semibold">Setup Backend APIs</h3>

                <p className="text-gray-400 text-sm">Assigned to Amit</p>
              </div>

              <span className="bg-green-500 text-black px-3 py-1 rounded-full text-sm">
                Completed
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
