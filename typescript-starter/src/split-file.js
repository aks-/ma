const fs = require("fs");
const split = require("split");

function splitFile(path) {
  let lines = [];
  const stream = fs.createReadStream(path);
  stream.pipe(split()).on("data", (line) => {
    lines.push(line);
  });
  stream.on("end", () => {
    splitLine(lines);
    return lines;
  });
  stream.on("error", (err) => console.log(err));
}

function getSlice(lines, start) {
  return lines.reduce((acc, line) => {
	  acc = `${acc}\n${line.slice(start, start + 3)}`
	  return acc;
  }, '');
}

function splitLine(lines) {
	for (i=0; i < 29; i=i+3) {
		console.log(getSlice(lines, i))
	}
}

function parseNumber(slice) {
	const map = {
		'': '0',
		'': '1',
		'': '2',
		'': '3',
		'': '4',
		'': '5',
		'': '6',
		'': '7',
		'': '8',
		'': '9',
	}
}

module.exports = {
	getSlice,
	splitLine
};

splitFile("../test/input-sample");
