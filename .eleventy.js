// docs: https://www.11ty.io/docs/config/

module.exports = function (eleventyConfig) {
  // eleventyConfig.addFilter( "myFilter", function() {});

  eleventyConfig.setBrowserSyncConfig({
    // https://www.browsersync.io/docs/options/#option-ghostMode
    ghostMode: false,
  });

  eleventyConfig.addPassthroughCopy("src/assets/css/style.css");

  eleventyConfig.addShortcode(
    "headers",
    (title, subtitle) => `<h1>${title}</h1><p>${subtitle}</p>`
  );

  eleventyConfig.addCollection("page", function (collections) {
    return collections.getFilteredByTag("page").sort(function (a, b) {
      return a.data.order - b.data.order;
    });
  });

  return {
    dir: {
      input: "src",
      output: "dist",
      data: "_data",
    },
  };
};
