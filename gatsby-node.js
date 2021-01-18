const path = require(`path`);
const data = require("./data.json");

exports.createPages = ({ actions }) => {
  const { createPage } = actions;

  const template = path.resolve("./src/templates/food.tsx");

  data.forEach((food_obj) => {
    const path = food_obj.slug;
    createPage({
      path,
      component: template,
      context: food_obj,
    });
  });
};
