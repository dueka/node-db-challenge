const knex = require("knex");
const db = knex(require("../knexfile").development);

// Get Projects
function getProjects() {
  return db("projects");
}

// Get Projects by Id
function getProjectsById(id) {
  return db("projects")
    .where({ id })
    .first();
}

// Add Projects by Id
async function addProjects(projects) {
  const [id] = await db("projects").insert(projects, "id");

  return getProjectsById(id);
}

function updateProjects({ changes, id }) {
  return db("projects")
    .where({ id })
    .update({ changes });
}

function removeProjects(id) {
  return db("projects")
    .where({ id })
    .del();
}

module.exports = {
  getProjects,
  getProjectsById,
  addProjects,
  updateProjects,
  removeProjects
};
