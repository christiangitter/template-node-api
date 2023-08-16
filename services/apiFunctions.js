const db = require("./db");
const helper = require("../helper");
const config = require("../config");

// function to get all the markers from the database
async function getMultiple(page = 1) {
    const offset = helper.getOffset(page, config.listPerPage);
    const rows = await db.query(
        `*SQL-STATEMENT* LIMIT ${offset},${config.listPerPage}`
    );
    const data = helper.emptyOrRows(rows);
    const meta = { page };

    return {
        data,
        meta,
    };
}

module.exports = {
    getMultiple,
};