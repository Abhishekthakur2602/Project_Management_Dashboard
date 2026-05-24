const DashboardCards = () => {
  return (
    <div className="grid grid-cols-4 gap-5">
      <div className="bg-blue-500 text-white p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-semibold">Total Projects</h2>

        <p className="text-3xl mt-4">12</p>
      </div>

      <div className="bg-green-500 text-white p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-semibold">Completed Tasks</h2>

        <p className="text-3xl mt-4">34</p>
      </div>

      <div className="bg-yellow-500 text-white p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-semibold">Pending Tasks</h2>

        <p className="text-3xl mt-4">18</p>
      </div>

      <div className="bg-red-500 text-white p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-semibold">Employees</h2>

        <p className="text-3xl mt-4">8</p>
      </div>
    </div>
  );
};

export default DashboardCards;
