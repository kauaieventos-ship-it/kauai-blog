module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/style.css");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addCollection("articles", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/articles/*.md").sort((a,b) => (b.date - a.date));
  });
  eleventyConfig.addCollection("casamentos", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/casamentos/*.md").sort((a,b) => (b.date - a.date));
  });
  eleventyConfig.addGlobalData("year", new Date().getFullYear());
  return {
    dir: { input: "src", output: "_site", includes: "_includes" }
  };
};
