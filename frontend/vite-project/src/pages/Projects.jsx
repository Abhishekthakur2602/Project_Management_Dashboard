import { useEffect, useState } from "react";

import API from "../services/api";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    deadline: "",
  });

  const fetchProjects = async () => {
    try {
      const res = await API.get("/projects");

      setProjects(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const addProject = async () => {
    try {
      await API.post("/projects", formData);

      setFormData({
        title: "",
        description: "",
        deadline: "",
      });

      fetchProjects();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProject = async (id) => {
    try {
      await API.delete(`/projects/${id}`);

      fetchProjects();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-white p-10">
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-5xl font-bold">Projects</h1>
      </div>

      {/* ADD PROJECT */}

      <div className="bg-[#1e293b] p-6 rounded-2xl mb-10">
        <h2 className="text-3xl font-bold mb-6">Add New Project</h2>

        <div className="grid grid-cols-3 gap-5">
          <input
            type="text"
            name="title"
            placeholder="Project Title"
            value={formData.title}
            onChange={handleChange}
            className="bg-[#0f172a] p-4 rounded-xl outline-none"
          />

          <input
            type="text"
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className="bg-[#0f172a] p-4 rounded-xl outline-none"
          />

          <input
            type="date"
            name="deadline"
            value={formData.deadline}
            onChange={handleChange}
            className="bg-[#0f172a] p-4 rounded-xl outline-none"
          />
        </div>

        <button
          onClick={addProject}
          className="mt-6 bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl"
        >
          Add Project
        </button>
      </div>

      {/* PROJECT LIST */}

      <div className="grid grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project._id}
            className="bg-[#1e293b] p-6 rounded-2xl shadow-lg"
          >
            <h2 className="text-3xl font-bold mb-4">{project.title}</h2>

            <p className="text-gray-400 mb-5">{project.description}</p>

            <p className="mb-6">
              Deadline: {new Date(project.deadline).toLocaleDateString()}
            </p>

            <div className="flex gap-4">
              <button className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-lg">
                Edit
              </button>

              <button
                onClick={() => deleteProject(project._id)}
                className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
