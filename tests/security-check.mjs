import fs from "node:fs";

const html = fs.readFileSync("index.html", "utf8");

if (!html.includes("Content-Security-Policy")) {
  throw new Error("Content-Security-Policy is missing");
}

if (!html.includes("X-Content-Type-Options")) {
  throw new Error("X-Content-Type-Options is missing");
}

if (html.includes("http://") || html.includes("https://")) {
  throw new Error("External network references are not allowed in the standalone lab");
}

console.log("DevOps Lab security checks passed.");
