const FlexSearch = require("flexsearch");
const index = new FlexSearch.Index();

const search = (input, data) => {
  for (let i = 0; i < data.length; i++) {
    index.add(data[i].costume, data[i].description);
  }
  return index.search(input);
};

export default search;
