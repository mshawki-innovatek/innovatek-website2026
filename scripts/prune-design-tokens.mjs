// Remove unreachable Figma custom properties while preserving every selector and live token.
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const postcss = require("postcss");
const target = "app/designer/landing.css";
const source = fs.readFileSync(target, "utf8");
const tree = postcss.parse(source);
const definitions = new Map();
const needed = new Set();
const references = (text) => [...text.matchAll(/var\(\s*(--[\w-]+)/g)].map((m) => m[1]);
tree.walkDecls((decl) => {
  if (decl.prop.startsWith("--")) {
    const dependencies = definitions.get(decl.prop) ?? new Set();
    references(decl.value).forEach((key) => dependencies.add(key));
    definitions.set(decl.prop, dependencies);
  } else references(decl.value).forEach((key) => needed.add(key));
});
function scan(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) scan(file);
    else if (/\.(tsx?|css)$/.test(file) && ![target, "app/designer/designer.css"].includes(file)) {
      const text = fs.readFileSync(file, "utf8");
      references(text).forEach((key) => needed.add(key));
      // Also retain custom properties addressed directly through DOM style APIs.
      for (const match of text.matchAll(/["'](--[\w-]+)["']/g)) needed.add(match[1]);
    }
  }
}
["app", "components", "lib"].forEach(scan);
for (const key of needed) for (const dep of definitions.get(key) ?? []) needed.add(dep);
let removed = 0;
tree.walkDecls((decl) => {
  if (decl.prop.startsWith("--") && !needed.has(decl.prop)) {
    if (decl.next()?.type === "comment" && decl.next().text.includes("@kind")) decl.next().remove();
    decl.remove(); removed++;
  }
});
const result = tree.toString();
fs.writeFileSync(target, result);
console.log(`Removed ${removed} unused declarations; stylesheet ${Buffer.byteLength(source)} → ${Buffer.byteLength(result)} bytes.`);
