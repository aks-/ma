const fs = require("fs");
const split = require("split");

function splitFile(path, cb) {
  let lines = [];
  const stream = fs.createReadStream(path);
  stream.pipe(split()).on("data", (line) => {
    lines.push(line);
  });
  stream.on("end", () => {
	cb(lines)
  });
  stream.on("error", (err) => console.log(err));
}

function getSlice(lines, start) {
  return lines.reduce((acc, line) => {
    acc = `${acc}\n${line.slice(start, start + 3)}`;
    return acc;
  }, "");
}

function splitLine(lines) {
  let str = "";
  for (i = 0; i < 29; i = i + 3) {
    const slice = getSlice(lines, i).replace(/\n/g, "");
    str = str + String(parseDigit(slice));
  }
  console.log(str);
}

function parseNumber (file, cb) {
	splitFile(file, function (lines) {
		splitLine(lines)
	})
}


function parseDigit(slice) {
  const map = {
    " _ | ||_|": 0,
    "     |  |": 1,
    " _  _||_ ": 2,
    " _  _| _|": 3,
    "   |_|  |": 4,
    " _ |_  _|": 5,
    " _ |_ |_|": 6,
    " _   |  |": 7,
    " _ |_||_|": 8,
    " _ |_| _|": 9,
  };
  if (map[slice] === undefined) return "";
  return map[slice];
}

module.exports = {
  getSlice,
  splitLine,
};

parseNumber("../../inputs/use_case_1/000000000");
