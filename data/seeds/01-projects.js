exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        {
          id: 1,
          project_name: "landing Page",
          project_desc:
            "Creation of a landing page for steelworks.ng using Vue and Firebase",
          completed: false
        },
        {
          id: 2,
          project_name: "Database Set-up",
          project_desc: "Creation a database on mongodb",
          completed: false
        },
        {
          id: 3,
          project_name: "Organization of payroll",
          project_desc: "Using SAP HANA to create a payroll management system",
          completed: false
        }
      ]);
    });
};
