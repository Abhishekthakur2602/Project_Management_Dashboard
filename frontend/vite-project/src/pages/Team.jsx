const Team = () => {
  const members = ["Abhishek", "Rahul", "Amit", "Priya"];

  return (
    <div className="min-h-screen bg-[#0f172a] text-white p-10">
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-5xl font-bold">Team Members</h1>

        <button className="bg-pink-500 hover:bg-pink-600 px-5 py-3 rounded-xl">
          + Add Member
        </button>
      </div>

      <div className="grid grid-cols-4 gap-8">
        {members.map((member, index) => (
          <div
            key={index}
            className="bg-[#1e293b] p-6 rounded-2xl text-center hover:scale-105 transition"
          >
            <img
              src={`https://ui-avatars.com/api/?name=${member}`}
              alt=""
              className="w-24 h-24 rounded-full mx-auto mb-5"
            />

            <h2 className="text-2xl font-bold">{member}</h2>

            <p className="text-gray-400 mt-2">MERN Developer</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
