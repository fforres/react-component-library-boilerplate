import data from 'skills';

export default (queryString, searchId) => {
  console.info(`searching for ${queryString}`);
  return new Promise((resolve) => {
    let filtered = [];
    if (queryString) {
      filtered = data.filter((el) => (el.tagName.lastIndexOf(queryString) !== -1));
    }
    setTimeout(() => {
      resolve({
        data: filtered,
        searchId,
        queryString,
      });
    }, 2000);
  });
};
