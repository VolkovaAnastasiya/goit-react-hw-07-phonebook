export const getVisibleContacts = (allItems, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return allItems.filter(
    item =>
      item.name.toLowerCase().includes(normalizedFilter) ||
      item.number.includes(normalizedFilter),
  );
};