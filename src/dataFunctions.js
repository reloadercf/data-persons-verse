export const sortData = (data, sortBy, sortOrder) => {
  const sortOrderFactor = sortOrder === 'desc' ? -1 : 1;

  if (sortBy && sortOrder!== 'default') {
    return data.sort((a, b) => {
      const propA = a[sortBy].toUpperCase();
      const propB = b[sortBy].toUpperCase();
      if (propA < propB) {
        return -1 * sortOrderFactor;
      }
      if (propA > propB) {
        return 1 * sortOrderFactor;
      }
      return 0;
    });
  }
  return data;
};
