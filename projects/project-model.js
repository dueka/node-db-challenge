const knex = require("knex");
const db = knex(require("../knexfile").development);

// Get Resources
function getResources() {
  return db("resources");
}
// Get Resources by Id
function getResourcesById(id) {
  return db("resources")
    .where({ id })
    .first();
}

// Get Projects by Id
function getProjectsById(id) {
  return db("projects")
    .where({ id })
    .first();
}

// Get tasks by Id
function getTasksById(id) {
  return db("tasks")
    .where({ id })
    .first();
}

// Add Projects by Id
async function addProjects(projects) {
  const [id] = await db("projects").insert(projects, "id");

  return getProjectsById(id);
}

// Add tasks by ID
async function addTasks(tasks) {
  const [id] = await db("tasks").insert(tasks, "id");

  return getTasksById(id);
}

// Get tasks
function getTasks(projects_id) {
  return db("tasks")
    .select("projects.project_name as project_name", "projects.project_desc")
    .join("projects", "tasks.id", "projects.tasks_id")
    .where("projects.id", projects_id);
}

module.exports = {
  getResources,
  getProjects,
  getTasks,
  addProjects,
  getResourcesById,
  addTasks
};
