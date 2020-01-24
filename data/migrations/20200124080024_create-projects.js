exports.up = function(knex) {
  return knex.schema
    .createTable("projects", table => {
      table.increments();
      table.string("project_name", 128).notNullable();
      table.string("project_desc");
      table
        .boolean("completed")
        .notNullable()
        .defaultTo(false);
    })
    .createTable("resources", table => {
      table.increments();
      table.string("resource_name", 128).notNullable();
      table.string("resource_desc", 256).notNullable();
      table
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects");
    })
    .createTable("tasks", table => {
      table.increments();
      table.string("tasks_desc").notNullable();
      table.string("notes");
      table
        .boolean("completed")
        .notNullable()
        .defaultTo(false);
      table
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("projects")
    .dropTableIfExists("resources")
    .dropTableIfExists("tasks");
};
