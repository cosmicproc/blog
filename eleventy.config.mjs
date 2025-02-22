import { EleventyI18nPlugin } from "@11ty/eleventy";
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";

export default function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/assets");
    eleventyConfig.addPlugin(syntaxHighlight);
    eleventyConfig.addPlugin(EleventyI18nPlugin, {
        defaultLanguage: "en",
    });
}

export const config = {
    dir: {
        input: "src",
    },
};
