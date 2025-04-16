const subject = "science-fiction";
// const data = require(`.raw/science-fiction.json`);
const data = require(`./raw/${subject}.json`);
const fs = require("fs");
const path = require("path");

const works = data.works.map((work) => {
  return {
    title: work.title,
    key: work.key,
    cover_id: work.cover_id,
    authors: work.authors,
    first_publish_year: work.first_publish_year,
    edition_count: work.edition_count,
  };
});
const worksByDate = works.sort((a, b) => {
  return a.first_publish_year - b.first_publish_year;
});

console.log(JSON.stringify(worksByDate, null, 2));

const dir = path.resolve(__dirname);
const outputFile = path.join(dir, "extracted", "science-fiction.json");

if (!fs.existsSync(path.join(dir, "extracted"))) {
  fs.mkdirSync(path.join(dir, "extracted"));
}

fs.writeFileSync(outputFile, JSON.stringify(worksByDate, null, 2), {
  encoding: "utf-8",
  flag: "w",
  mode: 0o666,
});

console.log(`Wrote ${outputFile}`);
