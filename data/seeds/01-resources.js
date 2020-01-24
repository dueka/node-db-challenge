exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("resources")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("resources").insert([
        {
          id: 1,
          resource_name: "google fonts",
          resource_desc: "for stylish font for text",
          project_id: 1
        },
        {
          id: 2,
          resource_name: "netlify",
          resource_desc: "for hosting your projects",
          project_id: 1
        },
        {
          id: 3,
          resource_name: "figma",
          resource_desc:
            "For creating wireframes to give the landing page structure",
          project_id: 1
        }
      ]);
    });
};
