import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../services/api";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async () => {
    try {
      await API.post("/auth/register", formData);

      alert("Registration Successful");

      navigate("/");
    } catch (error) {
      console.log(error);

      alert("Registration Failed");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-[#020617]">
      <div className="bg-[#1e293b] p-8 rounded-2xl w-[400px] shadow-2xl">
        <h1 className="text-3xl text-white font-bold mb-6 text-center">
          Register
        </h1>

        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          className="w-full p-3 rounded bg-[#0f172a] text-white mb-4 outline-none"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full p-3 rounded bg-[#0f172a] text-white mb-4 outline-none"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full p-3 rounded bg-[#0f172a] text-white mb-4 outline-none"
        />

        <button
          onClick={handleRegister}
          className="w-full bg-blue-500 hover:bg-blue-600 transition p-3 rounded text-white"
        >
          Register
        </button>

        <p className="text-gray-400 mt-4 text-center">
          Already have an account?{" "}
          <Link to="/" className="text-blue-400">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
