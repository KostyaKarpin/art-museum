export const getPagesAmount = (rowCount: number, rowsPerPage: number) => {
  return Math.ceil(rowCount / rowsPerPage);
};
