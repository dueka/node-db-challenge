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

// Add Resources
async function addResources(resources) {
  const [id] = await db("resources").insert(resources, "id");

  return findById(id);
}

function updateResources({ changes, id }) {
  return db("Resources")
    .where({ id })
    .update({ changes });
}

function removeResources(id) {
  return db("Resources")
    .where({ id })
    .del();
}

module.exports = {
  getResources,
  getResourcesById,
  addResources,
  updateResources,
  removeResources
};
