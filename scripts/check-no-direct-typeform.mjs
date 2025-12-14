import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const TARGET_DIRS = ["app", "components", "lib", "apps"];
const NEEDLE = "form.typeform.com/to/";

/** @param {string} p */
function isLikelyTextFile(p) {
  return (
    p.endsWith(".ts") ||
    p.endsWith(".tsx") ||
    p.endsWith(".js") ||
    p.endsWith(".mjs") ||
    p.endsWith(".cjs") ||
    p.endsWith(".json") ||
    p.endsWith(".md") ||
    p.endsWith(".css")
  );
}

/** @param {string} dir */
function walk(dir) {
  /** @type {string[]} */
  const out = [];
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (ent.name.startsWith(".")) continue;
    if (ent.name === "node_modules") continue;
    if (ent.name === ".next") continue;

    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) out.push(...walk(full));
    else if (ent.isFile() && isLikelyTextFile(full)) out.push(full);
  }
  return out;
}

/** @param {string} abs */
function toRel(abs) {
  return abs.startsWith(ROOT + path.sep) ? abs.slice(ROOT.length + 1) : abs;
}

/** @param {string} file */
function isAllowed(file) {
  const rel = toRel(file);
  // The only allowed place to contain a direct Typeform link is the server redirect endpoint.
  if (rel === "app/apply/page.tsx") return true;
  // Docs may reference the canonical link.
  if (rel === "README.md") return true;
  return false;
}

/** @type {{file: string, count: number}[]} */
const hits = [];

for (const dir of TARGET_DIRS) {
  const absDir = path.join(ROOT, dir);
  if (!fs.existsSync(absDir)) continue;

  for (const file of walk(absDir)) {
    if (isAllowed(file)) continue;
    const text = fs.readFileSync(file, "utf8");
    if (!text.includes(NEEDLE)) continue;

    const count = text.split(NEEDLE).length - 1;
    hits.push({ file: toRel(file), count });
  }
}

if (hits.length > 0) {
  console.error(
    `\n✖ Direct Typeform links detected (must route via /apply instead):\n`
  );
  for (const h of hits) {
    console.error(`- ${h.file} (${h.count})`);
  }
  console.error(
    `\nFix: replace direct links with "/apply" so host-based locking prevents misrouting.\n`
  );
  process.exit(1);
}

console.log("✓ No direct Typeform links found outside /apply.");


