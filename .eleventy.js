module.exports = (eleventyConfig) => {
    eleventyConfig.addLayoutAlias("default", "layouts/base.liquid");
    eleventyConfig.addPassthroughCopy("./src/site/images");
    eleventyConfig.addPassthroughCopy("./src/site/css");
    return {
        dir: {
            input: "src/site",
            includes: "_includes",
            output: "dist"
        }
    }

}