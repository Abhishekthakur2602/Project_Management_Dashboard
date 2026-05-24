const Navbar = () => {
  return (
    <div className="bg-white shadow p-5 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Welcome Back</h1>

      <div className="flex items-center gap-4">
        <img
          src="https://i.pravatar.cc/40"
          alt="profile"
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Navbar;
