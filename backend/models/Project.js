const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    title: String,

    description: String,

    status: {
      type: String,
      default: "Active",
    },

    deadline: Date,
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Project", projectSchema);
