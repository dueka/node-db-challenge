exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("tasks").insert([
        {
          id: 1,
          tasks_desc: "Create index.html",
          notes:
            "make sure proper markup is carried out and a suitable wireframe created",
          completed: false,
          project_id: 1
        },
        {
          id: 2,
          tasks_desc: "Create styles.css",
          notes: "Preferred if scss is used for the styling.",
          completed: false,
          project_id: 2
        },
        {
          id: 3,
          tasks_desc: "Create main.js",
          notes:
            "Create any functions that would be needed on the landing page here and J-Query can be used",
          completed: false,
          project_id: 3
        }
      ]);
    });
};
