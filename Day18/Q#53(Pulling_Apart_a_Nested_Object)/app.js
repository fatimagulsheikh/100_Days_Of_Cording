"use strict";
// Pulling Apart a Nested Object:
let developerSkills = {
    languages: ["Javascript", "Typescript", "pythone"],
    frameworks: ["React", "Angular", "vue"],
    tools: ["Git", "Webpack", "Decker"]
};
let { languages, frameworks, tools } = developerSkills;
console.log(`Language: ${languages[0]}, Framework: ${frameworks[1]}, Tools: ${tools[2]}`);
