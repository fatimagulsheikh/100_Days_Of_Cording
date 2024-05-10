/* **Question 53:** Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.*/

// Pulling Apart a Nested Object:


let developerSkills = {
    languages: ["Javascript", "Typescript", "pythone"],
    frameworks: ["React", "Angular", "vue"],
    tools: ["Git", "Webpack", "Decker"]
};
let { languages, frameworks, tools } = developerSkills;
console.log(`Language: ${languages[0]}, Framework: ${frameworks[1]}, Tools: ${tools[2]}`);
