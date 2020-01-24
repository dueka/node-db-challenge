const knex = require("knex");
const db = knex(require("../knexfile").development);

// Get tasks
function getTasks() {
  return db("tasks");
}

// Get tasks by Id
function getTasksById(id) {
  return db("tasks")
    .where({ id })
    .first();
}

// Add Tasks
async function addTasks(tasks) {
  const [id] = await db("tasks").insert(tasks, "id");

  return findById(id);
}

// Get tasks with Project name and Project Desc
function getTasksProj(projects_id) {
  return db("tasks")
    .select("projects.project_name as project_name", "projects.project_desc")
    .join("projects", "tasks.id", "projects.tasks_id")
    .where("projects.id", projects_id);
}

function updateTasks({ changes, id }) {
  return db("tasks")
    .where({ id })
    .update({ changes });
}

function removeTasks(id) {
  return db("tasks")
    .where({ id })
    .del();
}

module.exports = {
  getTasks,
  getTasksById,
  getTasksProj,
  addTasks,
  updateTasks,
  removeTasks
};
