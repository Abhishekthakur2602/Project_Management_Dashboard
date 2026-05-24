import {
  FaChartBar,
  FaTasks,
  FaProjectDiagram,
  FaUsers,
  FaSignOutAlt,
  FaBell,
} from "react-icons/fa";

import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("token");

    navigate("/");
  };

  const stats = [
    {
      title: "Total Projects",
      value: "24",
      bg: "bg-blue-500",
    },

    {
      title: "Completed Tasks",
      value: "138",
      bg: "bg-green-500",
    },

    {
      title: "Pending Tasks",
      value: "32",
      bg: "bg-orange-500",
    },

    {
      title: "Team Members",
      value: "12",
      bg: "bg-pink-500",
    },
  ];

  const recentTasks = [
    {
      title: "Create Login UI",
      assigned: "Rahul",
      status: "Completed",
      color: "bg-green-500",
    },

    {
      title: "Backend Authentication",
      assigned: "Abhishek",
      status: "Pending",
      color: "bg-orange-500",
    },

    {
      title: "Dashboard Charts",
      assigned: "Amit",
      status: "In Progress",
      color: "bg-blue-500",
    },
  ];

  const projects = [
    {
      name: "MERN Dashboard",
      progress: "80%",
    },

    {
      name: "Payroll System",
      progress: "60%",
    },

    {
      name: "Task Management App",
      progress: "45%",
    },
  ];

  return (
    <div className="flex min-h-screen bg-[#0f172a] text-white">
      {/* SIDEBAR */}

      <div className="w-[260px] bg-[#111827] border-r border-gray-800 p-6 flex flex-col justify-between">
        <div>
          <h1 className="text-3xl font-bold text-blue-400 mb-12">
            PM Dashboard
          </h1>

          <ul className="space-y-6">
            <Link to="/dashboard">
              <li className="flex items-center gap-3 hover:text-blue-400 transition cursor-pointer">
                <FaChartBar />
                Dashboard
              </li>
            </Link>

            <Link to="/projects">
              <li className="flex items-center gap-3 hover:text-blue-400 transition cursor-pointer">
                <FaProjectDiagram />
                Projects
              </li>
            </Link>

            <Link to="/tasks">
              <li className="flex items-center gap-3 hover:text-blue-400 transition cursor-pointer">
                <FaTasks />
                Tasks
              </li>
            </Link>

            <Link to="/team">
              <li className="flex items-center gap-3 hover:text-blue-400 transition cursor-pointer">
                <FaUsers />
                Team
              </li>
            </Link>
          </ul>
        </div>

        <button
          onClick={logoutHandler}
          className="flex items-center gap-3 bg-red-500 hover:bg-red-600 transition px-4 py-3 rounded-xl"
        >
          <FaSignOutAlt />
          Logout
        </button>
      </div>

      {/* MAIN SECTION */}

      <div className="flex-1 p-8">
        {/* TOPBAR */}

        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-4xl font-bold">Welcome Back 👋</h1>

            <p className="text-gray-400 mt-2">Here's your project overview</p>
          </div>

          <div className="flex items-center gap-5">
            <FaBell className="text-2xl cursor-pointer hover:text-blue-400" />

            <img
              src="https://ui-avatars.com/api/?name=Abhishek"
              alt="profile"
              className="w-12 h-12 rounded-full border-2 border-blue-500"
            />
          </div>
        </div>

        {/* STATS GRID */}

        <div className="grid grid-cols-4 gap-6 mb-10">
          {stats.map((item, index) => (
            <div
              key={index}
              className={`${item.bg} p-6 rounded-2xl shadow-lg hover:scale-105 transition`}
            >
              <h2 className="text-lg">{item.title}</h2>

              <p className="text-4xl font-bold mt-4">{item.value}</p>
            </div>
          ))}
        </div>

        {/* MAIN GRID */}

        <div className="grid grid-cols-3 gap-8">
          {/* RECENT TASKS */}

          <div className="col-span-2 bg-[#1e293b] p-6 rounded-2xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Recent Tasks</h2>

              <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg">
                + Add Task
              </button>
            </div>

            <div className="space-y-5">
              {recentTasks.map((task, index) => (
                <div
                  key={index}
                  className="bg-[#0f172a] p-5 rounded-xl flex items-center justify-between"
                >
                  <div>
                    <h3 className="text-xl font-semibold">{task.title}</h3>

                    <p className="text-gray-400">Assigned to {task.assigned}</p>
                  </div>

                  <span
                    className={`${task.color} px-4 py-2 rounded-full text-sm`}
                  >
                    {task.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* PROJECT PROGRESS */}

          <div className="bg-[#1e293b] p-6 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6">Project Progress</h2>

            <div className="space-y-6">
              {projects.map((project, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span>{project.name}</span>

                    <span>{project.progress}</span>
                  </div>

                  <div className="w-full bg-gray-700 h-3 rounded-full">
                    <div
                      className="bg-blue-500 h-3 rounded-full"
                      style={{
                        width: project.progress,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* TEAM SECTION */}

        <div className="mt-10 bg-[#1e293b] p-6 rounded-2xl">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Team Members</h2>

            <button className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg">
              + Add Member
            </button>
          </div>

          <div className="grid grid-cols-4 gap-6">
            {["Abhishek", "Rahul", "Amit", "Priya"].map((member, index) => (
              <div
                key={index}
                className="bg-[#0f172a] p-5 rounded-xl text-center hover:scale-105 transition"
              >
                <img
                  src={`https://ui-avatars.com/api/?name=${member}`}
                  alt=""
                  className="w-20 h-20 rounded-full mx-auto mb-4"
                />

                <h3 className="text-xl font-semibold">{member}</h3>

                <p className="text-gray-400 mt-2">MERN Developer</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
