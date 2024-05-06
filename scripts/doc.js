const fs = require("fs");
const path = require("path");

const featured = require("./featured.json");
featured.sort((f1, f2) => f1.title.localeCompare(f2.title));

const readMeLines = [
  "# Featured packages built with this template.",
  "",
  "> This file is automatically generated. Please refrain from editing it directly. To add your package, update `scripts/featured.json` in alphabetical order.",
];

featured.forEach(f => {
  readMeLines.push(`- [${f.title}](${f.href}) - ${f.description}`);
});

fs.writeFileSync(path.resolve(__dirname, "..", "FEATURED.md"), readMeLines.join("\n"));
