export default async function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy("photos");

    eleventyConfig.addPassthroughCopy("css");

    eleventyConfig.addPassthroughCopy("fonts");

    eleventyConfig.addPassthroughCopy("favicon.png");
};
