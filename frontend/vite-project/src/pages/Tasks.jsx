const Tasks = () => {
  const tasks = [
    {
      title: "Create Login Page",
      assigned: "Rahul",
      status: "Completed",
    },

    {
      title: "Setup Backend",
      assigned: "Abhishek",
      status: "Pending",
    },

    {
      title: "Design Dashboard",
      assigned: "Amit",
      status: "In Progress",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0f172a] text-white p-10">
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-5xl font-bold">Tasks</h1>

        <button className="bg-green-500 hover:bg-green-600 px-5 py-3 rounded-xl">
          + Add Task
        </button>
      </div>

      <div className="space-y-6">
        {tasks.map((task, index) => (
          <div
            key={index}
            className="bg-[#1e293b] p-6 rounded-2xl flex items-center justify-between"
          >
            <div>
              <h2 className="text-2xl font-bold">{task.title}</h2>

              <p className="text-gray-400 mt-2">Assigned to {task.assigned}</p>
            </div>

            <span className="bg-blue-500 px-4 py-2 rounded-full">
              {task.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tasks;
