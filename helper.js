//getOffset is used to calculate the offset value for the query
//Pagination is used to limit the number of rows returned by the query
function getOffset(currentPage = 1, listPerPage) {
    return (currentPage - 1) * [listPerPage];
}

//emptyOrRows is used to return the rows if there are any, otherwise it returns an empty array
function emptyOrRows(rows) {
    if (!rows) {
        return [];
    }
    return rows;
}

//exporting the functions out of the file
module.exports = {
    getOffset,
    emptyOrRows,
};