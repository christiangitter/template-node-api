const db = require("./db");
const helper = require("../helper");
const config = require("../config");

// function to get all the data from the database
async function getMultiple(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    //TODO: SQL-STATEMENT
    `*SQL-STATEMENT* LIMIT ${offset},${config.listPerPage}`
  );
  const data = helper.emptyOrRows(rows);
  const meta = { page };

  return {
    data,
    meta,
  };
}

// function to create data
async function create(data) {
  const result = await db.query(
    //TODO: SQL-STATEMENT
    `INSERT INTO data 
      (name, age) 
      VALUES 
      ('${data.name}', ${data.age})`
  );

  let message = "Error in creating data";

  if (result.affectedRows) {
    message = "Data created successfully";
  }

  return { message };
}

//function to delete data
async function remove(id) {
  //TODO: SQL-STATEMENT
  const result = await db.query(`DELETE FROM data WHERE id=${id}`);

  let message = "Error in deleting data";

  if (result.affectedRows) {
    message = "Data deleted successfully";
  }

  return { message };
}

module.exports = {
  getMultiple,
  create,
  remove,
};
